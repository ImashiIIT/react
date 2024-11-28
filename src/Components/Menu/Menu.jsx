import { Link } from 'react-router-dom';
import React from "react";
import './Menu.css';
const Menu = () => {
    return (
        <>
        <div className='nav-bar'>
        <img src="./Components/Assests/DineFlow.png" alt="Logo" className="nav-logo" />

                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="news.asp">News</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        <div className='intro'>
        <img src="./Components/Assests/DineFlow.png" alt="Logo" className="nav-logo" />
            <h3>Welcome to DineFlow</h3>
            <h4><i>"Savor every bite, cherish every moment."</i></h4>  
            <h4>Discover our diverse selection of carefully crafted dishes designed to tantalize your taste buds.</h4>

            <h3>Appetizers</h3> 
            <ul>
                <li>1. Classic Bruschetta - Toasted bread topped with fresh tomatoes, basil, garlic, and olive oil.  
                *Price:* $8  </li>   
                <li>2. Crispy Calamari - Golden-fried calamari rings served with a zesty marinara sauce.  
                *Price:* $12    </li>                   
                <li>3. Stuffed Mushrooms - Button mushrooms filled with creamy cheese and herbs, baked to perfection.  
                *Price:* $10   </li>                
            </ul>

            <h3>Soups & Salads</h3> 
            <ul>
                <li>4. Creamy Tomato Basil Soup - Rich and velvety tomato soup with a hint of basil, served with garlic bread.  
                *Price:* $7  </li>  
                <li>5. Caesar Salad - Crisp romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.  
                *Price:* $10  </li>
                <li>6. Grilled Chicken Salad - Mixed greens topped with grilled chicken, cherry tomatoes, cucumbers, and honey mustard dressing.  
                *Price:* $14  </li>
            </ul> 

            <h3>Main Courses</h3>
            <ul>
                <li>7. Grilled Ribeye Steak - Juicy ribeye steak served with garlic mashed potatoes and steamed asparagus.  
                *Price:* $28  </li>
                <li>8. Lemon Herb Salmon - Pan-seared salmon with a lemon butter sauce, served with wild rice and sautéed vegetables.  
                *Price:* $24  
                </li>
                <li>9. Spaghetti Carbonara - Classic Italian pasta with creamy sauce, crispy bacon, and Parmesan cheese.  
                *Price:* $18 </li>
                <li>10. Veggie Stir-fry *(Vegetarian)*  - A medley of fresh vegetables sautéed in a savory soy-ginger sauce, served with jasmine rice.  
                *Price:* $16</li>
            </ul>

            <h3>Desserts</h3> 
            <ul>
                <li>11. Tiramisu - Layers of espresso-soaked ladyfingers, mascarpone cream, and cocoa powder.  
                *Price:* $8</li>
                <li>12. Chocolate Lava Cake - Warm chocolate cake with a gooey molten center, served with vanilla ice cream.  
                *Price:* $9  </li>
                <li>13. Seasonal Fruit Tart - A delicate tart filled with custard and topped with fresh seasonal fruits.  
                *Price:* $7  
                </li>
            </ul>

            <h3>Beverages</h3>
            <ul>
                <li>14. Soft Drinks - Coke, Sprite, Fanta, or Diet Coke.  
                *Price:* $3</li>
                <li>15. Freshly Brewed Coffee - Available in regular or decaf.  
                *Price:* $4  </li>
                <li>16. Signature Mocktails - Choose from Mango Mojito, Virgin Pina Colada, or Berry Lemonade.  
                *Price:* $6  </li>
                <li>17. House Wine & Cocktails *(21+)* - Select red, white, or crafted cocktails.  
                *Price:* $10+ </li>
            </ul>

            <h3>Specials of the Day *(Chef's Recommendations)*  </h3>
            <p>**Ask your server about today’s special dishes and pairings!**</p>
            <p>Feel free to customize this menu with your restaurant’s branding and pricing!</p>
        </div>
        </>
    );
};
export default Menu;