import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../actions";
import NavBar from "../NavBar/NavBar";
import FilterCategories from "../FilterCategories/FilterCategories";
import FilterIngredients from "../FilterIngredients/FilterIngredients";
import FilterAmount from "../FilterAmount/FilterAmount";
import Ordering from "../Ordering/Ordering";
import Cards from "../Cards/Cards";
import "./Menu.css"

export default function Menu() {

    const dispatch = useDispatch();

    const { products } = useSelector(state => state.products);
    console.log(products)

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])

    return (
        <div>
            <div>
                <NavBar />
            </div>

            <div className="filters-container">
                <div className="filters">
                    <label>Filters</label>
                    <div >
                        <FilterCategories />
                    </div>
                    <div >
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

            <div>
                {
                    products?.map(p => {
                        return (
                                    <div>
                                        <Cards name={p.name} image={p.image ? p.image : 'imagen predeterminada'} key={p.id} />
                                    </div>
                        )
                    })
                }
            </div>



        </div>
    )
}