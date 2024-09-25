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
            <form onSubmit={handleSubmit} className="flex flex-col items-center">

                {/* Name */}
                <label className="block text-gray-700 text-2xl mb-4 mt-4">Name: </label>
                <input 
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Item name:"
                    required
                    className="px-4 py-2 border rounded-md"
                />

                {/* Quantity */}
                <p className="block text-gray-700 text-2xl mb-4 mt-4">Quantity: {quantity}</p>
                <button 
                    onClick={increment}
                    className="px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 mb-2"
                    >Increment
                </button>
                <button 
                    onClick={decrement}
                    className="px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-600"
                    >Decrement
                </button>

                {/* Category */}
                <label className="block text-gray-700 text-2xl mb-4 mt-4">Category: </label>
                <select
                    onChange={(event) => setCategory(event.target.value)}
                    className="px-4 py-2 border rounded-md"
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
                <button 
                    type="submit" 
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4"
                >Submit</button>
            </form>
        </div>
    );
}