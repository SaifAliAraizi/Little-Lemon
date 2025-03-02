import React from "react";
import bruschetta from "../assets/bruchetta.svg"; 
import salad from "../assets/greek salad.jpg"; 
import dessert from "../assets/lemon dessert.jpg"; 

const Main = () => {
  return (
    <main>
      <section id="hero">
        <h1>Little Lemon</h1>
        <p>Experience authentic Mediterranean flavors.</p>
        <button>Reserve a Table</button>
      </section>
      <section id="specials">
        <h2>Specials</h2>
        <div className="special-items">
          <article>
            <img src={bruschetta} alt="Bruschetta" />
            <h3>Bruschetta</h3>
            <p>Grilled bread with fresh tomatoes.</p>
          </article>
          <article>
            <img src={salad} alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p>A mix of crisp lettuce, tomatoes, and feta.</p>
          </article>
          <article>
            <img src={dessert} alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p>A sweet and tangy treat.</p>
          </article>
        </div>
      </section>
      <section id="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <p>"Amazing food and great service!" - Jennifer</p>
        </div>
        <div className="testimonial">
          <p>"Best Mediterranean food ever!" - Alex</p>
        </div>
      </section>
    </main>
  );
};

export default Main;