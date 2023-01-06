import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";

import {
  createComment,
  deleteComment,
  getAllComments,
  updateComment,
  updateRatingProduct,
} from "../../actions";
import "./CreateComment.css";
import star from "./puntajes.png";

const CreateComment = () => {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(true);
  const [show, setShow] = useState(true);

  const product = useSelector((state) => state.productDetail);
  let comments = useSelector((state) => state.productComments);
  const user = useSelector((state) => state.user);
  const ratings = useSelector((state) => state.productDetail.rating);

  const userComment = comments.filter((c) => {
    return c.users[0].id === user.id;
  });

  const [comment, setComment] = useState({
    comment: "",
    rating: 1,
  });

  function handleComment(e) {
    e.preventDefault();
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
    return comment;
  }

  const setRating = (e) => {
    e.preventDefault();
    let newRating = 0;
    for (const c of comments) {
      newRating += c.rating;
    }
    newRating /= comments.length;
    if (newRating > 0) {
      dispatch(updateRatingProduct({ rating: newRating, id: product.id }));
    }
    return newRating;
  };

  async function sendComment(e, idUser) {
    e.preventDefault();
    if (!comment.comment || !comment.rating)
      return swal(" Please! Fill in the fields");

    setFlag(!flag);
    let idProduct = product.id;
    dispatch(
      createComment({
        ...comment,
        idUser,
        idProduct,
      })
    );
    setComment({ ...comment, comment: "" });
    setRating(e);
    window.location.reload();
  }

  async function deleteComments(e, idUser) {
    e.preventDefault();
    setShow(false);
    let idProduct = product.id;
    dispatch(deleteComment(idUser, idProduct));
    dispatch(getAllComments(idProduct));
    setComment({ ...comment, comment: "" });
    setRating(e);
    window.location.reload();
  }

  async function editComment(e, idUser) {
    e.preventDefault();
    if (!comment.comment || !comment.rating) return alert("Fill in the fields");
    setShow(!show);
    let idProduct = product.id;
    dispatch(
      updateComment({
        ...comment,
        idUser,
        idProduct,
      })
    );
    dispatch(getAllComments(idProduct));
    setRating(e);
    window.location.reload();
  }

  useEffect(() => {
    if (product.id) {
      dispatch(getAllComments());
    }
  }, [dispatch]);

  return (
    <div className="conten">
      {ratings > 0 ? (
        <label>
          Rating General del Producto: {ratings.toFixed(1)} ({comments.length})
        </label>
      ) : (
        ""
      )}
      <>
        {user.name ? (
          userComment.length === 0 && flag ? (
            <div>
              <div className="rating">
                <label>Rating:</label>
                <br />
                <select
                  className="select"
                  name="rating"
                  onChange={(e) => handleComment(e)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <br />
              </div>
              <div className="comment">
                <textarea
                  className="textarea"
                  cols={80}
                  name="comment"
                  placeholder={"Please, write a comment"}
                  value={comment.comment}
                  onChange={(e) => handleComment(e)}
                />
                <button
                  className="btn"
                  onClick={(e) => sendComment(e, user.id)}
                >
                  enviar Comment
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="parafo">¡Ya hiciste un comentario!</p>
            </div>
          )
        ) : (
          <p className="parafo">
            Para dejar un comentario, por favor{" "}
            <Link to="/login"> inicie sesión </Link>{" "}
          </p>
        )}
      </>

      <div>
        {comments.length ? (
          <div>
            <h3 className="h3">Comments:</h3>
            {comments.map((c, index) => {
              return (
                <div className="contenComments" key={index}>
                  <p>{c.users.length ? c.users[0].name : ""}</p>
                  <div className="divrow">
                    <h4 className="h3">Rating:</h4>
                    <div className="divrow">
                      <p className="par">{c.rating}</p>
                      <img src={star} alt="" height={"30px"} className="immg" />
                    </div>
                  </div>

                  <p className="parafo">{c.comment}</p>

                  <div className="contenedores">
                    {c.users[0].id === user.id ? (
                      <div>
                        {show ? (
                          <div>
                            <div className="rating">
                              <label>Rating:</label>
                              <br />
                              <select
                                className="select"
                                name="rating"
                                onChange={(e) => handleComment(e)}
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                              <br />
                            </div>
                            <div className="comment">
                              <textarea
                                className="textarea"
                                cols={50}
                                name="comment"
                                rows={10}
                                placeholder={"Please, write a comment"}
                                value={comment.comment}
                                onChange={(e) => handleComment(e)}
                              />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}

                        <div>
                          {!show ? (
                            <button
                              className="btn"
                              onClick={(e) => setShow(!show)}
                            >
                              Edita tu Comment
                            </button>
                          ) : (
                            ""
                          )}

                          {show ? (
                            <button
                              className="btn"
                              onClick={(e) => editComment(e, user.id)}
                            >
                              Accept Comment
                            </button>
                          ) : (
                            ""
                          )}
                          <button
                            className="btn"
                            onClick={(e) => deleteComments(e, user.id)}
                          >
                            Borrar Comment
                          </button>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="parafo">Sin comentarioss</p>
        )}
      </div>
    </div>
  );
};

export default CreateComment;
