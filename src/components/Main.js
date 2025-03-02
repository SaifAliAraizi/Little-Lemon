import React from "react";
import { useNavigate } from "react-router-dom";
import bruschetta from "../assets/bruchetta.svg";
import salad from "../assets/greek salad.jpg";
import dessert from "../assets/dessert.jpg";
import jennifer from "../assets/jennifer.jpg";
import alex from "../assets/alex.jpg";
import restaurant from "../assets/restauranfood.jpg";

const Main = () => {

    const navigate = useNavigate();

    return (
        <main>
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
                    <button className="hero-btn" onClick={() => navigate("/booking")}>Reserve a Table</button>
                </div>
                <div className="hero-image">
                    <img src={restaurant} alt="Restaurant Image" />
                </div>
            </section>
            <section id="specials">
                <div className="special-head">
                    <h2>This Weeks Specials!</h2>
                    <button className="specials-btn" onClick={() => navigate("/order")}>Online Menu</button>
                </div>
                <div className="special-items">
                    <article className="bruschetta">
                        <img src={bruschetta} alt="Bruschetta" />
                        <div className="special-item-header">
                            <h3>Bruschetta</h3>
                            <h4>$ 12.99</h4>
                        </div>
                        <p>Our Bruschetta is made from grilled <br></br>
                            bread that has been smeared with garlic<br></br>
                            and seasoned with salt <br></br>
                            and olive oil.</p>
                        <a href="#delivery" role="button">Order a delivery</a>
                    </article>

                    <article className="greek-salad">
                        <img src={salad} alt="Greek Salad" />
                        <div className="special-item-header">
                            <h3>Greek Salad</h3>
                            <h4>$ 5.99</h4>
                        </div>
                        <p>The famous greek salad of crispy lettuce,<br></br>
                            peppers, olives and our Chicago style<br></br>
                            feta cheese, garnished with crunchy<br></br>
                            garlic and rosemary croutons.<br></br>
                        </p>
                        <a href="#delivery" role="button">Order a delivery</a>
                    </article>

                    <article className="dessert">
                        <img src={dessert} alt="Lemon Dessert" />
                        <div className="special-item-header">
                            <h3>Lemon Dessert</h3>
                            <h4>$ 5.00</h4>
                        </div>
                        <p>This comes straight from grandma’s <br></br>
                            recipe book, every last ingredient<br></br>
                            has been sourced and is as authentic<br></br>
                            as can be imagined. </p>
                        <a href="#delivery" role="button">Order a delivery</a>
                    </article>
                </div>
            </section>

            <section id="testimonials">
                <h2>Testimonials</h2>
                <div className="feedback-items">
                    <article className="feedback">
                        <img src={jennifer} alt="jennifer " />
                        <div className="feedback-header">
                            <h3>Jennifer</h3>
                            <p>"Amazing food and great service!" - Jennifer <br></br>⭐⭐⭐⭐⭐</p>
                        </div>
                    </article>

                    <article className="feedback">
                        <img src={alex} alt="Alex" />
                        <div className="feedback-header">
                            <h3>Alex</h3>
                            <p>"Best Mediterranean food ever!" - Alex <br></br>⭐⭐⭐⭐⭐</p>
                        </div>
                    </article>
                </div>
            </section>

        </main>
    );
};

export default Main;