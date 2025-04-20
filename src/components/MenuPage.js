import React from 'react';
import greekSalad from '../assets/images/greek salad.jpg';
import bruchetta from '../assets/images/bruchetta.svg';
import MediterraneanPasta from '../assets/images/Mediterranean Pasta.jpeg';
import GrilledSeaBass from '../assets/images/Grilled Sea Bass.jpeg';
import lemonDessert from '../assets/images/lemon dessert.jpg';
import cheeseCake from '../assets/images/Cheese Cake.jpeg';

function MenuPage() {
  const menuCategories = [
    {
      category: "Starters",
      items: [
        {
          name: "Greek Salad",
          price: "12.99",
          description: "Fresh vegetables, olives, and our house-made feta cheese dressing.",
          image: greekSalad,
          isSpecial: true
        },
        {
          name: "Bruschetta",
          price: "5.99",
          description: "Grilled bread topped with tomatoes, garlic, and fresh basil.",
          image: bruchetta,
          isSpecial: true
        }
      ]
    },
    {
      category: "Main Courses",
      items: [
        {
          name: "Mediterranean Pasta",
          price: "18.99",
          description: "Fresh pasta with Mediterranean vegetables and herbs.",
          image: MediterraneanPasta,
          isSpecial: false
        },
        {
          name: "Grilled Sea Bass",
          price: "24.99",
          description: "Fresh sea bass with lemon herb sauce.",
          image: GrilledSeaBass,
          isSpecial: false
        }
      ]
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Lemon Dessert",
          price: "5.00",
          description: "This comes straight from grandma's recipe book.",
          image: lemonDessert,
          isSpecial: true
        },
        {
          name: "Cheesecake",
          price: "6.99",
          description: "Creamy New York style cheesecake with a buttery graham cracker crust.",
          image: cheeseCake,
          isSpecial: false
        }
      ]
    }
  ];

  return (
    <div className="menu-page">
      <section className="hero menu-hero">
        <h1>Our Menu</h1>
        <p>Experience the taste of Mediterranean cuisine</p>
      </section>

      <div className="menu-content">
        <aside className="menu-nav">
          <nav aria-label="Menu navigation">
            <ul>
              {menuCategories.map(category => (
                <li key={category.category}>
                  <a href={`#${category.category.toLowerCase()}`}>{category.category}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="menu-items">
          {menuCategories.map(category => (
            <section 
              key={category.category} 
              id={category.category.toLowerCase()} 
              className="menu-section"
            >
              <h2>{category.category}</h2>
              <div className="menu-grid">
                {category.items.map(item => (
                  <article key={item.name} className="menu-item">
                    {item.image && (
                      <div className="menu-item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                    )}
                    <div className="item-content">
                      <div className="item-header">
                        <h3>{item.name}</h3>
                        <span className="price">${item.price}</span>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}

export default MenuPage;