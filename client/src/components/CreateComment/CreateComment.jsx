import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { useAuth0 } from "@auth0/auth0-react";
import { FaStar } from "react-icons/fa";

import {
  createComment,
  deleteComment,
  getAllComments,
  updateComment,
} from "../../actions";
import "./CreateComment.css";

const CreateComment = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0();
  const [show, setShow] = useState(false);

  const product = useSelector((state) => state.product);
  const comments = useSelector((state) => state.productComments);
  const user = useSelector((state) => state.user);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [generalRating, setGeneralRating] = useState(0);

  const userComment = comments.filter((c) => {
    return c.idUser === user.email;
  });

  const [comment, setComment] = useState("");

  useEffect(() => {
    setGeneralRating(() => {
      let newRating = 0;
      if (comments.length) {
        for (const c of comments) {
          newRating += c.rating;
        }
        newRating /= comments.length;
      }

      return newRating.toFixed(1);
    });
  }, [generalRating, comments]);

  function handleComment(e) {
    e.preventDefault();
    setComment(e.target.value);
    return comment;
  }

  async function sendComment(e) {
    e.preventDefault();
    if (!comment || !rating) return swal("Please! Fill in the fields");

    dispatch(
      createComment({
        rating: parseInt(rating),
        idProduct: product[0].id,
        userName: user.name,
        comment: comment,
        idUser: user.email,
      })
      //swal("You made a comment!", "Thanks!", "success")
    );

    setComment("");
    setRating(1);
    dispatch(getAllComments(product[0].id));
    window.location.reload();
  }

  async function deleteComments(e) {
    e.preventDefault();

    dispatch(
      deleteComment({
        idProduct: product[0].id,
        idUser: user.email,
      }),
      swal("Are you sure?", {
        dangerMode: true,
        buttons: true,
      })
    );
    setComment("");
    setRating(1);
    dispatch(getAllComments(product[0].id));
  }

  async function editComment(e) {
    e.preventDefault();
    if (!comment || !rating) return swal("Fill in the blanks");
    setShow(!show);

    dispatch(
      updateComment({
        rating: parseInt(rating),
        idProduct: product[0].id,
        userName: user.name,
        comment: comment,
        idUser: user.email,
      })
    );
    setComment("");
    setRating(1);
    dispatch(getAllComments(product[0].id));
  }

  return (
    <div className="conten">
      <label>Overall product rating: {generalRating}</label>
      <>
        {isAuthenticated && user.name ? (
          userComment.length === 0 ? (
            <div>
              <div className="rating">
                <label>Rating:</label>
                <br />
                <div>
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                      <label key={ratingValue}>
                        <input
                          type="radio"
                          name="rating"
                          value={ratingValue}
                          onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                          className="star"
                          color={
                            ratingValue <= (hover || rating)
                              ? "#ffc107"
                              : "#e4e5e9"
                          }
                          size={30}
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(null)}
                        />
                      </label>
                    );
                  })}
                </div>
                <br />
              </div>
              <div className="comment">
                <textarea
                  className="textarea"
                  cols={90}
                  name="comment"
                  placeholder={"Please, write a comment"}
                  value={comment.comment}
                  onChange={(e) => handleComment(e)}
                />
                <button className="btn" onClick={(e) => sendComment(e)}>
                  Send comment
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p>You already made your comment!</p>
            </div>
          )
        ) : (
          <p> To leave a comment, please login</p>
        )}
      </>

      <div>
        {comments.length ? (
          <div>
            <h3>Comments:</h3>
            {comments.map((c) => {
              return (
                <div key={c.comment + c.idUser} className="contenComments">
                  {!show ? (
                    <div>
                      <p>{c.userName}</p>
                      <h4>Rating:</h4>
                      <div>
                        <p>{c.rating}</p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {[...Array(c.rating)].map((star, i) => (
                            <FaStar
                              key={star}
                              className="star"
                              color={"#ffc107"}
                              size={30}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}

                  <p>{c.comment}</p>

                  <div>
                    {c.idUser === user.email ? (
                      <div>
                        {show ? (
                          <div>
                            <div className="rating">
                              <label>Rating:</label>
                              <br />
                              {[...Array(5)].map((star, i) => {
                                const ratingValue = i + 1;
                                return (
                                  <label key={ratingValue}>
                                    <input
                                      type="radio"
                                      name="rating"
                                      value={ratingValue}
                                      onClick={() => setRating(ratingValue)}
                                    />
                                    <FaStar
                                      className="star"
                                      color={
                                        ratingValue <= (hover || rating)
                                          ? "#ffc107"
                                          : "#e4e5e9"
                                      }
                                      size={30}
                                      onMouseEnter={() => setHover(ratingValue)}
                                      onMouseLeave={() => setHover(null)}
                                    />
                                  </label>
                                );
                              })}
                              <br />
                            </div>
                            <div className="comment">
                              <textarea
                                className="textarea"
                                cols={50}
                                name="comment"
                                rows={10}
                                placeholder={c.comment}
                                value={comment.comment}
                                onChange={(e) => handleComment(e)}
                              />
                            </div>
                            <button
                              className="btn"
                              onClick={(e) => editComment(e)}
                            >
                              Accept
                            </button>
                            <br />
                            <button
                              className="btn"
                              onClick={(e) => setShow(!show)}
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <></>
                        )}

                        <div>
                          {!show ? (
                            <button
                              className="btn"
                              onClick={(e) => setShow(!show)}
                            >
                              Edit your comment
                            </button>
                          ) : (
                            ""
                          )}
                          <br />
                          <button
                            className="btn"
                            onClick={(e) => deleteComments(e)}
                          >
                            Delete your comment
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
          <p>No comment</p>
        )}
      </div>
    </div>
  );
};

export default CreateComment;
