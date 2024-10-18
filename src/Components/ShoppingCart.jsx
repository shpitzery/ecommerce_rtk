import React from 'react';
import './ShoppingCart.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decreaseItemQauntity, increaseItemQauntity, removeItemFromCart } from './CartSlice';

const ShoppingCart = () => {
  const dispatch = useDispatch();// A hook that returns the dispatch function that allows you to send actions to the Redux store, which will then be handled by reducers to update the state.
  const cartItems = useSelector(state => state.cart.cartItems);// retrieve the array of items from the Redux store's state.

  /**
   * @param {cartItems.reduce()}: A method that iterates over each item in the cartItems array and accumulates the total price).
   * @param total: This is the running total of the prices as the reduce function iterates over each item.
   * @param item: This is the current item being processed in the cartItems array.
   * @param {0}: The initial value for total.
   */
  const totalAmount = cartItems.reduce((total , item) => total + item.price * item.quantity , 0);

  const handleRemoveItem = itemId => {
    dispatch(removeItemFromCart(itemId));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleIncreaseQuantity = itemId => {
    dispatch(increaseItemQauntity(itemId));
  };
  const handleDecreaseQuantity = itemId => {
    dispatch(decreaseItemQauntity(itemId));
  };

  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map(item => (
          <li key={item.id} className='cart-item'>
            <span>{item.name} - {item.price}$</span>
            <div className='quantity-controls'>
              <button className='quantity-control-btn' onClick={() => handleDecreaseQuantity(item.id)}> - </button>
              <span>{item.quantity}</span>
              <button className='quantity-control-btn' onClick={() => handleIncreaseQuantity(item.id)}> + </button>
            </div>
            <button className='remove-item-btn' onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
    </div>
    <div>{totalAmount ? <div>The total amount is: {totalAmount}</div> : ''}</div>
    </>
  );
};

export default ShoppingCart;
