import React, { useState } from 'react';
import './ProductList.css'; 
import { useDispatch } from 'react-redux';
import { addItemsToCart } from './CartSlice';// used to get the reducer function detail to dispatch which product is added to the cart to store.js

const ProductList = () => {
  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];
  const dispatch = useDispatch();
  const [disabledProducts , setDisabledProducts] = useState([]) // state to store disabled products

  const handleAddToCart = product => {
    dispatch(addItemsToCart(product));// sends an action to the Redux store to add a product to the cart.
    setDisabledProducts([...disabledProducts , product.id]) // Mark the product as disabled
  }

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map(product => ( //products.map(...) is a JavaScript expression, and in JSX, we can’t write JavaScript code directly without using {}. The curly braces tell React to interpret the contents as JavaScript rather than plain text or HTML.
          <li key={product.id} className='product-list-item'> {/* The key prop allows React to efficiently update and re-render only the items that have changed */}
          <span>{product.name} - ${product.price}</span> {/* The <span> tag is used simply to wrap the product information for styling and structure purposes */}
          <button
          /**
           * @param {${}}: used to evaluate a JavaScript expression.
           * @param {disabledProducts.includes(product.id) ? 'disabled' : ''} : 
           * a ternary operator that checks if product.id is included in the disabledProducts array:
           * If true (the product is disabled), the class 'disabled' is added to the button.
           * If false (the product is not disabled), an empty string '' is added, which does nothing.
           * The result is that the button will have both add-to-cart-btn and disabled classes if the product is disabled, and only add-to-cart-btn if it’s not disabled.
          */
          className={`add-to-cart-btn ${disabledProducts.includes(product.id) ? 'disabled' : ''}`}
          onClick={() => handleAddToCart(product)}
          disabled={disabledProducts.includes(product.id)}> {/* Disable button if product is in disabledProducts */} 
          Add to Cart
          </button>
          </li>
        ))}
     
      </ul>
    </div>
  );
};

export default ProductList;
