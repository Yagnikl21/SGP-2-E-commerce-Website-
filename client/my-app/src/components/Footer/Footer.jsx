import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='Footer'>
      <div className="top">
        <div className="item">
          <h1>Catagories</h1>
          <span>Wemen</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>Links</span>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About us</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, itaque. Sapiente 
            cupiditate perspiciatis, quidem expedita inventore, voluptas illo tempora dicta ratione ex, 
            ipsam natus facere pariatur rerum maiores? Eaque, aliquam.
          </span>
        </div>
        <div className="item">
        <h1>Contact us</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, itaque. Sapiente 
            cupiditate perspiciatis, quidem expedita inventore, voluptas illo tempora dicta ratione ex, 
            ipsam natus facere pariatur rerum maiores? Eaque, aliquam.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Store</span>
          <span className="copyright">© Copyright 2023.All Right Reserved</span>
        </div>
        <div className="right">
          <img  src="./images/payment.png" className='img'  />
        </div>
      </div>
    </div>
  )
}

export default Footer