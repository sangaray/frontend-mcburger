import { removeProductFavorite } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import "./Favorites.css";

function Favorites() {
  const dispatch = useDispatch();

  const [productsFavourites] = useSelector((state) => [
    state.productsFavourites,
  ]);

  return (
    <div className="cont">
      {productsFavourites.map((p) => (
        <div>
          <div>
            <img className="detailImg" src={p.image} alt={p.name} />
          </div>
          <div className="detailTextContainer">
            <h2 className="detailTitle">{p.name}</h2>
            <div className="detailLabelContainerPrice">
              <p className="detailLabelPrice">Price:</p>
              <p className="detailPrice">{p.price}</p>
            </div>
            <div className="detailLabelContainer">
              <p className="detailLabel">Details:</p>
              <p>{p.summary}</p>
            </div>
            <div className="detailLabelContainer">
              <p className="detailLabel">Ingredients:</p>
              <p>{p.ingredients}</p>
            </div>
            <div className="bt">
              <button onClick={() => dispatch(removeProductFavorite(p))}>
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Favorites;
