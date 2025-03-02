import React from "react";
import jennifer from "../assets/jennifer.jpg";
import alex from "../assets/alex.jpg";

const CustomersSay = () => {
    return (
        <section id="testimonials">
            <h2>Testimonials</h2>
            <div className="feedback-items">
                <article className="feedback">
                    <img src={jennifer} alt="jennifer " />
                    <div className="feedback-header">
                        <h3>Jennifer</h3>
                        <p>"Amazing food and great service!" - Jennifer</p>
                    </div>
                </article>

                <article className="feedback">
                    <img src={alex} alt="Alex" />
                    <div className="feedback-header">
                        <h3>Alex</h3>
                        <p>"Best Mediterranean food ever!" - Alex</p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default CustomersSay;
