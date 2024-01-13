import React from 'react'
import TestimonialCard from './TestimonialCard'

export const Testimonials = () => {
  return (
    <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard name="Pedro Fernandes" description="The best gyros in town"/>
                <TestimonialCard name="Moises Caicedo" description="After a game I go to Little Lemon to get a delicious dinner"/>
                <TestimonialCard name="Enner Valencia" description="I'recommended to all my teammatess."/>
                
            </section>

            
        </section>
  )
}

export default  Testimonials
