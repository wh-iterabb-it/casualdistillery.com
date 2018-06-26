// src/components/AboutPage.js
import React from 'react';
import { Link } from 'react-router';
import about from '../data/about';

export default class AboutPage extends React.Component {
  render() {
    return (
      <div className="about-container">
        <h1>{about.name}</h1>
        <p>{about.description}</p>
        <div className="navigateBack">
          <Link to="/">« Back</Link>
        </div>
      </div>
    );
  }
}
