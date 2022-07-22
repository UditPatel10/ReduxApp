import React from "react";
import {Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  
  const renderProduct = products.map((product) => {
    const {id, title, image, price, category} = product;
    return (
      <div className="four wide column" key={id}>
          <Link to={`/product/${id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
                <img src={image} alt={title} width='30px' height='30px'/>
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      {renderProduct}
    </>
  );
};

export default ProductComponent;
