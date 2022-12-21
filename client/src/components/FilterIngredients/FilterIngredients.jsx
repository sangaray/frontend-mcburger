import React, { useEffect } from "react";
import { getProductsByIgredient } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

export default function FilterIngredients() {


    const dispatch = useDispatch();

    function handleFilterIngredient(e) {
        e.preventDefault();

        let ingredient = ["All"]
        switch (e.target.value) {
            case "All": 
                ingredient = ["All"]
            case "bread":
                ingredient = [
                    'Regular Bun',
                    'Quarter Pound Bun',
                    'Big Mac Bun',
                    'bread',
                    'Potato Roll',
                    'croutons',]
                break;
            case "beef":
                ingredient = [
                    '100% Beef Patty',
                    'Quarter Pound 100% Beef Patty',
                ]
                break;
            case "chicken":
                ingredient = [
                    'McChicken Patty',
                    'chicken',
                    'Crispy Chicken Fillet',
                    'crispy chicken',
                ]
                break;
            case "cheese":
                ingredient = [
                    'cream cheese',
                    'Pasteurized Process American Cheese',
                    'string cheese',
                    'mozzarella',
                    'Cheddar',
                ]
                break;
            case "sauces and dressings":
                ingredient = [
                    'Ketchup',
                    'ketchup',
                    'Mustard',
                    'Mayonnaise',
                    'mayonnaise',
                    'Big Mac Sauce',
                    'Smoky Sauce',
                    'Spicy Pepper Sauce',
                ]
                break;
            case "vegetable":
                ingredient = [
                    'Pickle Slices',
                    'Onions',
                    'onion',
                    'Shredded Lettuce',
                    'Roma Tomato',
                    'potatoes',
                    '5 vegetable',
                    'vegetable medallion',
                    'lettuce',
                    'tomato',
                    'pickles',
                    'arugula',
                    'grated carrot',
                    'Lettuce',
                    'Crinkle Cut Pickle',
                    'Milanese NotCo',
                ]
                break;
            case "milk":
                ingredient = [
                    'Whole Milk',
                    'M&M Mini Milk Chocolate Candies',
                    'Lowfat Smoothie Yogurt',
                ]
                break;
            case "fish":
                ingredient = [
                    'tuna',
                ]
                break;
            case "fruits":
                ingredient = [
                    'Strawberry Banana Fruit Base',
                    'apple',
                    'blueberries',
                    'Strawberry Shake Syrup',
                ]
                break;
            case "bacon":
                ingredient = [
                    'Thick Cut Applewood Smoked Bacon'
                ]
                break;
            case "cream":
                ingredient = [
                    'American cream ice cream',
                    'Vanilla Reduced Fat Ice Cream',
                    'vanilla ice cream',
                    'Whipped Light Cream',
                ]
                break;
            case "chocolate":
                ingredient = [
                    'hot chocolate',
                    'Chocolate Chip',
                    'Chocolate Shake Syrup',
                    'Oreo cookies',
                    'Hot Fudge Topping',
                ]
                break;
            default:
                ingredient = ["All"]
                break;
        }
        dispatch(getProductsByIgredient(ingredient))
    }

    return (
        <div>
            <div>
                <select onChange={e => handleFilterIngredient(e)}>
                    <option value="All">-</option>
                    <option value="bread">bread</option>
                    <option value="beef">beef</option>
                    <option value="chicken">chicken</option>
                    <option value="cheese">cheese</option>
                    <option value="sauces and dressings">sauces and dressings</option>
                    <option value="vegetable">vegetable</option>
                    <option value="milk">milk</option>
                    <option value="fish">fish</option>
                    <option value="fruits">fruits</option>
                    <option value="bacon">bacon</option>
                    <option value="cream">cream</option>
                    <option value="chocolate">chocolate</option>
                </select>
            </div>
        </div>
    )
}

