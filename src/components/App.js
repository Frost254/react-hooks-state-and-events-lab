import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

    const [switchToggle, setSwitchToggle] = useState("false")
    const [appClass, setappClass] = useState("App light");
    const [buttonstate, setbuttonstate] = useState("Dark Mode")

    function handleSwitch() {
        setSwitchToggle(!switchToggle)
            const changedColor = switchToggle ? "App dark" : "App light"
            const changedState = switchToggle ? "Light Mode" : "Dark Mode"
            setappClass(changedColor)
            setbuttonstate(changedState)
    }

    // replace 'false' with a state variable that can be toggled between true and false
    // this will be used for the Dark Mode Toggle feature


    return ( 
        <div className = { appClass } >
        <header >
        <h2> Shopster </h2> 
        <button onClick = { handleSwitch } > {buttonstate} </button> 
        </header> 
        <ShoppingList items = { itemData }/> 
        </div>
    );
}

export default App;