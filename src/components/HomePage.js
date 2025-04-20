import React from 'react';
import { Link } from 'react-router-dom';
import greekSalad from '../assets/images/greek salad.jpg';
import bruchetta from '../assets/images/bruchetta.svg';
import lemonDessert from '../assets/images/lemon dessert.jpg';
import chefImageC from '../assets/images/Mario and Adrian c.jpg';
import restaurantImage from '../assets/images/restaurant.jpg';

function HomePage() {
  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "The Greek salad was incredibly fresh and authentic. Definitely coming back for more!",
      image: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Michael R.",
      rating: 5,
      text: "Best Mediterranean food in Chicago. The atmosphere is cozy and welcoming.",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Jessica L.",
      rating: 4,
      text: "Love their lemon dessert! A perfect ending to a perfect meal.",
      image: "https://i.pravatar.cc/150?img=16"
    }
  ];

  return (
    <div className="home-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <h1 id="hero-title">Little Lemon</h1>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/booking" className="cta-button">Reserve a Table</Link>
        </div>
      </section>

      <section className="specials" aria-labelledby="specials-title">
        <div className="section-header">
          <h2 id="specials-title">This week's specials!</h2>
          <Link to="/menu" className="button">Online Menu</Link>
        </div>
        <div className="specials-grid">
          <article className="menu-card">
            <img src={greekSalad} alt="Greek salad" />
            <div className="card-content">
              <div className="card-header">
                <h3>Greek Salad</h3>
                <span className="price">$12.99</span>
              </div>
              <p>Fresh vegetables, olives, and our house-made feta cheese dressing.</p>
            </div>
          </article>
          <article className="menu-card">
            <img src={bruchetta} alt="Bruschetta" />
            <div className="card-content">
              <div className="card-header">
                <h3>Bruschetta</h3>
                <span className="price">$5.99</span>
              </div>
              <p>Grilled bread topped with tomatoes, garlic, and fresh basil.</p>
            </div>
          </article>
          <article className="menu-card">
            <img src={lemonDessert} alt="Lemon Dessert" />
            <div className="card-content">
              <div className="card-header">
                <h3>Lemon Dessert</h3>
                <span className="price">$5.00</span>
              </div>
              <p>This comes straight from grandma's recipe book.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="testimonials fade-in" aria-labelledby="testimonials-title">
        <h2 id="testimonials-title">What our customers say!</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="testimonial-card">
              <img 
                src={testimonial.image} 
                alt={`${testimonial.name}'s avatar`}
                className="testimonial-avatar"
              />
              <div className="testimonial-content">
                <h3>{testimonial.name}</h3>
                <div className="rating">
                  {"★".repeat(testimonial.rating)}
                  {"☆".repeat(5 - testimonial.rating)}
                </div>
                <p>"{testimonial.text}"</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-preview" aria-labelledby="about-title">
        <div className="about-content">
          <h2 id="about-title">Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
             Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
             and were inspired to bring the flavors of their hometown in Italy to the people of Chicago.</p>
        </div>
        <div className="about-images">
          <img src={chefImageC} alt="Little Lemon chefs Mario and Adrian in the kitchen" />
          <img src={restaurantImage} alt="Little Lemon restaurant interior" />
        </div>
      </section>
    </div>
  );
}

export default HomePage;