// src/components/ProductMenu.js
import React from 'react';
import { Link } from 'react-router';

export default class ProductMenu extends React.Component {
  render() {
    return (
      <nav className="product-menu">
        {this.props.products.map(menuProduct => {
          return <Link key={menuProduct.id} to={`/product/${menuProduct.id}`} activeClassName="active">
            {menuProduct.name}
          </Link>;
        })}
      </nav>
    );
  }
}
