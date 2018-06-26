// src/components/IndexPage.js
import React from 'react';
import ProductPreview from './ProductPreview';
import products from '../data/products';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="header-container">
          <h1 className="title">
            Casual Distillery
          </h1>
          <h3 className="subtitle">occasional excellence</h3>

        </div>
        <div className="products-selector">
          {products.map(productData => <ProductPreview key={productData.id} {...productData} />)}
        </div>
      </div>
    );
  }
}
