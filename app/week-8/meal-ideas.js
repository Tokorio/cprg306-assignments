"use client";

import { useState, useEffect } from "react";

//api fetch
async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    //load function
    async function loadMealIdeas() {
        const mealsData = await fetchMealIdeas(ingredient);
        setMeals(mealsData);
    }

    //step 5
    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div className="meal-ideas">
            <h2>Meal Ideas for {ingredient}</h2>
            {meals && meals.length > 0 ? (
                <ul className="grid grid-cols-2 gap-4">
                    {meals.map((meal) => (
                        <li key={meal.idMeal} className="meal-item">
                            <h3>{meal.strMeal}</h3>
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                className="meal-image"
                                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No meal ideas available.</p>
            )}
        </div>
    );
}
