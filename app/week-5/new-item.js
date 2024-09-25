"use client";

import { useState } from "react";

export default function NewItem () {
    const [quantity, setQuantity] = useState (1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const increment = () => {
        if (quantity < 20)
            setQuantity(quantity + 1);
    }
    
    const decrement = () => {
        if (quantity > 1)
            setQuantity(quantity - 1);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name: name,
            quantity: quantity,
            category: category
        };
        
        console.log("Item: " + item);

        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                {/* Name */}
                <label>Name: </label>
                <input 
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter your name"
                    required
                />

                {/* Quantity */}
                <p className="text-lg font-bold mb-4">Quantity: {quantity}</p>
                <button 
                    onClick={increment}
                    className={`px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600`}
                    >Increment
                </button>
                <button 
                    onClick={decrement}
                    className={`px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-600`}
                    >Decrement
                </button>

                {/* Category */}
                <label>Category: </label>
                <select
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>

                {/* Submit */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}