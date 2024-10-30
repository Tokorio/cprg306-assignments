"use client";

import {useState} from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json";

function Page(){
    //items become items with data from items.json
    const [items, setItems] = useState(itemsData);

    //handler
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    return (
        <main>
            <h1 className="text-3xl font-bold">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} /> 
        </main>
    );
}

export default Page;