import React from "react";
import restaurant from "../assets/restauranfood.jpg";

const CallToAction = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Little Lemon is a cozy, family-owned eatery in Chicago that celebrates<br></br>
                    Mediterranean cuisine. Our menu features fresh, flavorful dishes made from<br></br>
                    locally sourced ingredients, ensuring an authentic and delightful dining experience.<br></br>
                    We take pride in serving homemade recipes passed down through generations,<br></br>
                    offering a warm and welcoming atmosphere where guests <br></br>
                    can enjoy great food and hospitality.
                </p>
                <button className="hero-btn">Reserve a Table</button>
            </div>
            <div className="hero-image">
                <img src={restaurant} alt="Restaurant Image" />
            </div>
        </section>
    );
};

export default CallToAction;
