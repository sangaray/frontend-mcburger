import React, { useState } from "react";
import { getProductByAmount } from '../../actions/index';
import { useDispatch } from 'react-redux';

export default function FilterAmount(){

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        firstValue:"",
        secValue:""
    })
    function handleFilterAmount(c) {
        dispatch(getProductByAmount([input.firstValue, input.secValue]));
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        
    }
    return(
        <div>
            <div>
                <input type="number" value={input.firstValue} name="firstValue" onChange={e => handleChange(e)} /> 
                <input type="number" value={input.secValue} name="secValue" onChange={e => handleChange(e)} /> 
                <button onClick={() => handleFilterAmount(input)}>search</button>
            </div>
        </div>
    )
}