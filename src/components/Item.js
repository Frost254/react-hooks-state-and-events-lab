import React, { useState } from "react";

function Item({ name, category }) {
    const [isClicked, setisClicked] = useState("false")
    const [inCart, setinCart] = useState("false")
    const [defaultValue, setdefaultValue] = useState("")

    function handleValue() {
        setinCart(!inCart)
        setisClicked(!isClicked)
        const liClass = inCart ? "in-cart" : ""
        setdefaultValue(liClass)
    }

    const buttonValue = isClicked ? "Remove From Cart" : "Add to Cart"

    return ( 
        <li className = { defaultValue } >
        <span> { name } </span> 
        <span className = "category" > { category } </span> 
        <button className = "add" onClick = { handleValue } > { buttonValue } </button> 
        </li>
    );
}

export default Item;