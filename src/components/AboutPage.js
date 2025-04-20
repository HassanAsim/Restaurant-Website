import React from 'react';
import chefImageA from '../assets/images/Mario and Adrian A.jpg';
import chefImageB from '../assets/images/restaurant chef B.jpg';
import restaurantImage from '../assets/images/restaurant.jpg';

function AboutPage() {
  return (
    <div className="about-page">
      <section className="hero about-hero">
        <h1>Our Story</h1>
        <p>A taste of Mediterranean tradition in Chicago</p>
      </section>

      <section className="history" aria-labelledby="history-title">
        <div className="content-wrapper">
          <div className="text-content">
            <h2 id="history-title">Our History</h2>
            <p>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
            <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.</p>
            <p>Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
          </div>
          <div className="image-content">
            <img src={restaurantImage} alt="Inside view of Little Lemon restaurant" className="history-image" />
          </div>
        </div>
      </section>

      <section className="team" aria-labelledby="team-title">
        <h2 id="team-title">Meet Our Chefs</h2>
        <div className="chefs-grid">
          <div className="chef-card">
            <img src={chefImageA} alt="Chef Mario in the kitchen" />
            <div className="chef-info">
              <h3>Mario</h3>
              <p>Head Chef</p>
              <p>Specializing in traditional Italian cuisine, Mario brings authentic Mediterranean flavors to every dish.</p>
            </div>
          </div>
          <div className="chef-card">
            <img src={chefImageB} alt="Chef Adrian preparing a dish" />
            <div className="chef-info">
              <h3>Adrian</h3>
              <p>Sous Chef</p>
              <p>With a passion for fusion cuisine, Adrian adds modern twists to our traditional recipes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values" aria-labelledby="values-title">
        <h2 id="values-title">Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Fresh Ingredients</h3>
            <p>We source the freshest ingredients from local markets and suppliers.</p>
          </div>
          <div className="value-card">
            <h3>Family Recipes</h3>
            <p>Our menu features time-tested family recipes passed down through generations.</p>
          </div>
          <div className="value-card">
            <h3>Warm Service</h3>
            <p>We treat every guest like family, providing warm and attentive service.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;