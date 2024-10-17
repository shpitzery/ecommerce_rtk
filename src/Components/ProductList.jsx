import React from 'react';
import './ProductList.css'; 

const ProductList = () => {

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map(product => ( //products.map(...) is a JavaScript expression, and in JSX, we can’t write JavaScript code directly without using {}. The curly braces tell React to interpret the contents as JavaScript rather than plain text or HTML.
          <li key={product.id} className='product-list-item'> {/* The key prop allows React to efficiently update and re-render only the items that have changed */}
          <span>{product.name} - ${product.price}</span> {/* The <span> tag is used simply to wrap the product information for styling and structure purposes */}
          <button>
            Add to Cart
          </button>
          </li>
        ))}
     
      </ul>
    </div>
  );
};

export default ProductList;
