// src/components/ProductPreview.js
import React from 'react';
import { Link } from 'react-router';

export default class ProductPreview extends React.Component {
  render() {
    return (
      <Link to={`/product/${this.props.id}`}>
        <div className="product-preview">
          <img src={`assets/media/img/${this.props.image}`} alt={this.props.name} />
          <h2 className="name">{this.props.name}</h2>
        </div>
      </Link>
    );
  }
}
