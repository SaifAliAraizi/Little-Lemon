import React from "react";
import bruschetta from "../assets/bruchetta.svg";
import salad from "../assets/greek salad.jpg";
import dessert from "../assets/dessert.jpg";

const Specials = () => {
    return (
        <section id="specials">
            <div className="special-head">
                <h2>This Weeks Specials!</h2>
                <button className="specials-btn">Online Menu</button>
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
    );
};

export default Specials;
