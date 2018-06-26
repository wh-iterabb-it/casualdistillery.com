// src/components/ProductPage.js
import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import ProductMenu from './ProductMenu';
import Ingredient from './Ingredient';
import products from '../data/products';

export default class ProductPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const product = products.filter((product) => product.id === id)[0];
    if (!product) {
      return <NotFoundPage/>;
    }
    if(typeof document !== 'undefined') {
      // React.render(<MainWrapper />, document.getElementById("root"));
      document.title = `Casual Distillery - ${product.name}`;
    }
    const headerStyle = { backgroundImage: `url(/img/${product.cover})` };
    return (
      <div className="product-full">
        <div className="header-container">
          <h1 className="title">
            {product.name}
          </h1>
        </div>
        <ProductMenu products={products}/>
        <div className="product">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/assets/media/img/${product.image}`} />
            <h2 className="name">{product.name}</h2>
          </div>
          <section className="description">
            {product.description}
          </section>
          <section className="ingredients">
            <p>Contains <strong>{product.ingredients.length}</strong> ingredients:</p>
            <ul>{
              product.ingredients.map((ingredient, i) => <Ingredient key={i} {...ingredient}/>)
            }</ul>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
