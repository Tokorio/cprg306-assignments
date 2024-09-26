"use client";

import Item from "./items.js";
import { useState } from "react";
import items from "./items.json";

export default function ItemList(){

  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a,b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <button
        onClick={() => setSortBy("name")}
        className = "px-4 py-2 bg-blue-500 text-white"
      >
        Sort by Name
      </button>
      <button
        onClick={() => setSortBy("category")}
        className = "px-4 py-2 bg-blue-500 text-white"
      >
        Sort by Category
      </button>

      <ul className="max-w-md px-auto mt-6">
        {sortedItems.map((item) => (
          <Item 
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}