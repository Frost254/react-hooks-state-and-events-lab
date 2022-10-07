import React, { useState } from "react";

function Item({ name, category }) {
    const [isClicked, setisClicked] = useState("false")
    const [inCart, setinCart] = useState("false")

    function handleValue() {
        setinCart(!inCart)
        setisClicked(!isClicked)
    }

    const buttonValue = isClicked ? "Remove From Cart" : "Add to Cart"
    const liClass = inCart ? "in-cart" : ""

    return ( <
        li className = { liClass } >
        <
        span > { name } < /span> <
        span className = "category" > { category } < /span> <
        button className = "add"
        onClick = { handleValue } > { buttonValue } < /button> <
        /li>
    );
}

export default Item;