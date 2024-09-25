"use client";

import { useState } from "react";

export default function NewItem () {
    const [quantity, setQuantity] = useState (1);

    const increment = () => {
        if (quantity < 20)
            setQuantity(quantity + 1);
    }

    const decrement = () => {
        if (quantity > 1)
            setQuantity(quantity - 1);
    }

    return (
        <div>
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
        </div>
    );
}