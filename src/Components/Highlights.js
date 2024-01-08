import React from 'react'
import MenuCard from './MenuCard'
import greekSalad from '../assets/greek_salad.jpg'
import Bruschetta from '../assets/bruschetta.jpeg';
import LemonDessert from '../assets/lemon_dessert.jpg';

const Highlights = () => {
  return (
    <section className="specials">
    <article className="specials-topbar">
        <h1>This weeks specials</h1>
        <a className="action-button" href={require('../assets/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
    </article>

    <section className="specials-cards">
        <MenuCard image={greekSalad} name="Greek Salad" price="$14.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
         Dressed with salt, hot pepper, and olive oil."/>
        <MenuCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
         salt and olive oil."/>
        <MenuCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
         and lemon zest."/>
    </section>

    
</section>
  )
}

export default Highlights
