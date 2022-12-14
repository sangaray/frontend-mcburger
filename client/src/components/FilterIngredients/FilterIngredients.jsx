import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByIngredient } from "../../actions";

export default function FilterIngredients() {
  const ingredients = useSelector((state) => state.ingredients);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <select
          name=""
          id=""
          onChange={(e) => {
            dispatch(filterByIngredient(e.currentTarget.value));
          }}
        >
          <option>All ingredients...</option>
          {ingredients.map((ingredient) => (
            <option key={ingredient} value={ingredient}>
              {ingredient}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
