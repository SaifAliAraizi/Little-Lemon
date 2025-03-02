import React from "react";
import restaurant from "../assets/Mario and Adrian A.jpg";

const Chicago = () => {
    return (
        <section className="about">
            <div className="about-content">
                <h2>Lemon Dessert</h2>
                <p>"Little Lemon is a family-owned eatery located in the heart of Chicago,<br></br>
                    dedicated to bringing the authentic flavors of the Mediterranean to your table. <br></br>
                    With a passion for traditional recipes and a commitment to using only the freshest ingredients, we create dishes that celebrate the rich culinary heritage of the region.<br></br><br></br>
                      Our cozy and inviting atmosphere makes every visit feel like a warm embrace,
                      whether you're stopping by for a quick bite,
                     a leisurely meal with family, or a special gathering with friends.<br></br><br></br>
                     At Little Lemon, we believe that great food brings people,<br></br>
                    together and we can't wait to share our love for Mediterranean cuisine with you."</p>
            </div>
            <div className="about-image">
                <img src={restaurant} alt="Restaurant Image" />
            </div>
        </section >
    );
};

export default Chicago;
