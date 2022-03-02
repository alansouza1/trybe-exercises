import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className='pokemon-card'>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt={ `${name} sprite` }/>
      </div>
    )
  };
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.exact({
        value: PropTypes.number,
        measurementUnit: PropTypes.string
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
