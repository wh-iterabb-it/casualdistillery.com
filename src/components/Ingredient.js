// src/components/Ingredient.js
import React from 'react';

const typeMap = {
  'aromatic': 'aromatics',
  'fermentable': 'fermentables'
};
//

export default class Ingredient extends React.Component {
  render() {
    return (
      <li className="Ingredient">
        <p className="Ingredient-name">
          <a href={this.props.link}>
            {this.props.name}
          </a>
          <span className={`symbol symbol-${this.props.type}`} title={typeMap[this.props.type]}>
            {this.props.type}
          </span>
        </p>
        <p className="Ingredient-description"><span> {this.props.description}</span></p>
      </li>
    );
  }
}
