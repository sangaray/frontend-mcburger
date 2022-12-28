import { removeProductFavorite } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom";
import img from "./BannerFav.png"
import "./Favorites.css";

function Favorites() {
  const dispatch = useDispatch();

  const [productsFavourites] = useSelector((state) => [
    state.productsFavourites,
  ]);

  return (
    <div className="cont">
      <div>
        <NavBar/>
      </div>
      <Link to="/Selectmenu">
      <div>
        <img src={img}></img>
      </div>
      </Link>
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
       <div className="container-acceso-directo">
                <div className="acceso-directo1">
                    <img src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671118229/mcburger/Prod11_outidc.png" alt="Imagen" />
                    <h4>Classic Burger</h4>
                    <Link to="/product/11">
                    <button className="button-pediya1">Order Now</button>
                    </Link>
                </div>

                <div className="acceso-directo2">
                    <img src="https://www.freepnglogos.com/uploads/fries-png/premium-french-fries-photos-7.png" alt="Imagen" />
                    <h4>French Fries</h4>
                    <Link to="/product/52">
                    <button className="button-pediya2">Order Now</button>
                    </Link>
                </div>

                <div className="acceso-directo3">
                    <img src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671118234/mcburger/Prod64_zhudyu.png" alt="Imagen" />
                    <h4>Offers</h4>
                    <Link to="/product/64">
                    <button className="button-pediya3">Order Now</button>
                    </Link>
                </div>
            </div>
       <div>
        <Footer/>
      </div>
    </div>
  );
}
export default Favorites;