import React, { useState } from "react";
import { orderByPrice } from '../../actions/index';
import { useDispatch } from 'react-redux';



export default function Ordering() {

    const dispatch = useDispatch();

    function handleSortPrice(e) {
        e.preventDefault();
        dispatch(orderByPrice(e.target.value))
    }

    return (
        <div>
            <div>
                <select name="" id="" onChange={e => handleSortPrice(e)}>
                    <option value="cost"> Cost </option>
                    <option value="asc">higher price</option>
                    <option value="des">lower price</option>
                </select>

            </div>
        </div>
    )
}