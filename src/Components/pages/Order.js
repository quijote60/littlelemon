import React from 'react'
import test1 from '../../assets/food3.jpeg'

export const Order = () => {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={test1}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Order Online</h1>
      </div>
    </header>
  )
}
