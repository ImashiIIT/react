import { Link } from 'react-router-dom';
import React from "react";
import './Event.css';
const Event = () => {
    return (
        <>
        <div className='nav-bar'>
        <img src="./Components/Assests/DineFlow.png" alt="Logo" className="nav-logo" />

                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="news.asp">News</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        <div className="event-container">
            <div>
                <h1>Welcome to the Event Page</h1>
                <p>
                    Plan and organize your events effortlessly with DineFlow. From small gatherings to large celebrations, 
                    we provide the perfect spaces and services to make your events memorable.
                </p>
            </div>
        </div>
        <div className='event1'>
        <h3> Valentine's Day Special at DineFlow 💖</h3>
        <p>Love is in the air, and DineFlow invites you to celebrate this Valentine’s Day with an unforgettable dining experience! 🌹✨</p>
        <ul>
            <li>Date: February 14th</li>  
            <li>Time:  7:00 PM onwards </li> 
            <li>Location: [Restaurant Address]</li>  
        </ul>
        

        <h3> Indulge in a Romantic Evening:</h3>

        <h4>🌟 Exquisite Menu: </h4> 
        Treat your taste buds to a specially curated Valentine's Day menu featuring delectable appetizers, gourmet entrees, and indulgent desserts—crafted with love by our chefs.  

        <h4>🍷 Complimentary Drinks: </h4> 
        Toast to your love with a glass of fine wine or champagne, on the house.  

        <h4>🎶 Live Entertainment: </h4> 
        Set the mood with enchanting live music, creating the perfect romantic ambiance for you and your partner.  

        <h4>💐 Special Surprises: </h4> 
        Receive a complimentary rose for your loved one and capture the moment with a photo at our beautifully decorated Valentine’s Day corner.  

        

        <h3> Reservations:</h3>
        Make this Valentine’s Day truly magical—reserve your table now! Seating is limited, so book early to avoid disappointment.  

        <h4>📞 Call us at: 011111111</h4>  
        <h4>🌐 Book online: [Website/Reservation Link] </h4> 

        

        <h4>Celebrate love in style at DineFlow. Let us make your evening one to remember! ❤️🍴</h4>
        </div>
        <div className='event2'>
            <h3> 🎃 Spooktacular Halloween Night at DineFlow 👻 </h3> 
            <p>Get ready for a frightfully fun evening filled with delicious bites, eerie delights, and spooky surprises! Join us this Halloween for a hauntingly good time at DineFlow.</p>  
            <ul>
                <li>Date: October 31st</li>  
                <li>Time: [Event Timing, e.g., 7:00 PM onwards]</li>  
                <li>Location: [Restaurant Address]</li>  
            </ul>

        <h3> What Awaits You:</h3>
        <h4>🕷️ Themed Menu:</h4>  
        Sink your fangs into our exclusive Halloween menu featuring wickedly good appetizers, monstrous mains, and creepy-crawly desserts.  

        <h4>🍹 Ghastly Drinks: </h4> 
        Sip on spellbinding cocktails and mocktails designed to give you chills (in the best way possible)!  

        <h4>🎭 Costume Contest:  </h4>
        Come dressed in your spookiest or funniest outfit for a chance to win exciting prizes. Our staff will be in costume too—so don’t hold back!  

        <h4>🎶 Live Music & DJ:  </h4>
        Dance the night away to spine-chilling beats and Halloween-themed tunes.  

        <h4>🕸️ Frightful Decorations: </h4> 
        Enjoy a dining experience like no other, surrounded by eerie lights, pumpkins, cobwebs, and other spooky décor.  

        

        <h3> Reservations:  </h3>
        Spaces are limited, and our Halloween Night always sells out fast. Reserve your table now to secure your spot!  

        <h4>📞 Call us at: 011111111  </h4>
        <h4>🌐 Book online: [Website/Reservation Link]  </h4>

        

        <h4>Don’t miss out on the most boo-tiful night of the year at DineFlow. We can’t wait to treat you to a night full of tricks, treats, and terrifyingly good food! 🦇🍴</h4>
    </div>
    <div className='event3'>
        <h3> 🎄 Celebrate Christmas Day at DineFlow 🎅✨  </h3>
        <p>This Christmas, gather your loved ones and join us for a festive feast and magical moments at DineFlow. Let’s make your holiday season truly special with an unforgettable dining experience! </p> 
        <ul>
            <li>Date: December 25th </li> 
            <li>Time: [Event Timing, e.g., 12:00 PM – 10:00 PM] </li>
            <li>Location: [Restaurant Address]  </li>
        </ul>


        <h3> What We Have in Store for You: </h3> 

        <h4>🎁 Festive Feast:  </h4>
        Savor a specially curated Christmas menu featuring traditional holiday dishes, seasonal favorites, and sweet treats crafted with love by our chefs.  

        <h4>🍷 Holiday Drinks: </h4> 
        Raise a toast to the season with our selection of mulled wine, eggnog, and other festive beverages.  

        <h4>🎶 Live Music & Carolers: </h4> 
        Feel the holiday spirit with live Christmas music and carolers spreading cheer throughout the day.  

        <h4>🎄 Beautiful Decorations:  </h4>
        Dine in a warm and cozy atmosphere, surrounded by twinkling lights, festive décor, and a grand Christmas tree.  

        <h4>🎅 Special Visit from Santa:  </h4>
        Bring the kids along to meet Santa Claus, who will be handing out gifts and spreading holiday joy.  

        

        <h3> Reservations:  </h3>
        Celebrate the most wonderful time of the year with us! Seating is limited, so reserve your table early.  

        <h4>📞 Call us at: 0111111111  </h4>
        <h4>🌐 Book online: [Website/Reservation Link]  </h4>

        

        <h4>Spend your Christmas Day creating cherished memories with family, friends, and amazing food at [Restaurant Name]. We look forward to celebrating with you! ❄️🍴</h4>
    </div>
        </>
    );
};

export default Event;
