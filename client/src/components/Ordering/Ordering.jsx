import React, { useState } from "react";
import { orderByPrice } from '../../actions/index';
import { useDispatch } from 'react-redux';
import "./Ordering.css"



export default function Ordering() {

    const dispatch = useDispatch();

    function handleSortPrice(e) {
        e.preventDefault();
        dispatch(orderByPrice(e.target.value))
    }

    return (
        <div>
            <div>
                <select className="select-order" name="" id="" onChange={e => handleSortPrice(e)}>
                    <option value="cost"> Cost </option>
                    <option value="asc">Higher price</option>
                    <option value="des">Lower price</option>
                </select>

            </div>
        </div>
    )
}