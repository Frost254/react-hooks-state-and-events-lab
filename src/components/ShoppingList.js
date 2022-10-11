import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
    const [selectedCategory, setselectedCategory] = useState("All")

    function handleSelect(event) {
        setselectedCategory(event.target.value);
        console.log(selectedCategory)
    }

    const dataToDisplay =  items.filter(item => item.category !== selectedCategory)
    return ( 
        <div className = "ShoppingList" >
        <div className = "Filter" >
        <select name = "filter" onChange = { handleSelect } >
        <option value = "All" > Filter by category </option> 
        <option value = "Produce" > Produce </option> 
        <option value = "Dairy" > Dairy </option> 
        <option value = "Dessert" > Dessert </option> 
        </select> 
        </div> 
        <ul className = "Items" > {
            dataToDisplay.map((item) => ( 
                <Item key = { item.id } name = { item.name } category = { item.category }/>
            ))
        } 
        </ul> 
        </div>
    );
}

export default ShoppingList;