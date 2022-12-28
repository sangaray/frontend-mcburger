import React from "react";
import { useSelector } from "react-redux";
import FilterIngredients from "../FilterIngredients/FilterIngredients";
import FilterAmount from "../FilterAmount/FilterAmount";
import Ordering from "../Ordering/Ordering";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"
import "./Menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="filters-container">
        <div className="filters">
          <label>Filters</label>
          <div>
            <FilterIngredients />
          </div>
        </div>

        <div className="filters">
          <label>Ammount</label>
          <FilterAmount />
        </div>

        <div className="filters">
          <label>Order</label>
          <Ordering />
        </div>
      </div>

      <div className="cards-container">
        {products?.map((p) => {
          return (
            <Link to={"/product/" + p.id} key={p.id}>
              <Cards
                name={p.name}
                image={p.image ? p.image : "imagen predeterminada"}
              />
            </Link>
          );
        })}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
