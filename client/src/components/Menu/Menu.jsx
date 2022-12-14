import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterIngredients from "../FilterIngredients/FilterIngredients";
import FilterAmount from "../FilterAmount/FilterAmount";
import Ordering from "../Ordering/Ordering";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import "./Menu.css";
import { Link } from "react-router-dom";
import { getAllIngredients } from "../../actions";

export default function Menu() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllIngredients())
  })

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
    </div>
  );
}
