import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
 class CartButton extends Component {
  render() {
    const cartItemCount = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).length : 0;
    return (
      <div id="shopping-cart" >
        <Link to="/cart">
          <img id="shopping-cart-image" src="https://preview.ibb.co/iHmAaA/shopping-cart-button.jpg" alt="shopping-cart" />
          <div id="hide-img-hover" >
          <span><img id="shopping-cart-image2" src="https://preview.ibb.co/kcjSoV/shopping-cart-button3.jpg" alt="shopping-cart" /></span>
          </div>

          <p className="cart-number">{cartItemCount}</p>
        </Link>
      </div>
    )
  }
}
 const mapStateToProps = (state) => ({
  state
})
 export default connect(mapStateToProps)(CartButton);
