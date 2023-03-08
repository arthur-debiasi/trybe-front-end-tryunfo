import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TrunfoText from './TrunfoText';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="card" style={ { width: '20rem' } }>
        <div>
          <img
            className="card-img-top"
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
        </div>
        <div className="card-body">
          <h5 data-testid="name-card" className="card-title" placeholder="Carta">
            { cardName }
          </h5>
          <p data-testid="description-card" className="card-text">
            { cardDescription }
          </p>
          <div>
            <span>Ataque: </span>
            <span data-testid="attr1-card" className="card-text">
              { cardAttr1 }
            </span>
          </div>
          <div>
            <span>Defesa: </span>
            <span data-testid="attr2-card" className="card-text">
              { cardAttr2 }
            </span>
          </div>
          <div>
            <span>Inteligência: </span>
            <span data-testid="attr3-card" className="card-text">
              { cardAttr3 }
            </span>
          </div>
          <div>
            <span>Tipo: </span>
            <span data-testid="rare-card" className="card-text">
              { cardRare }
            </span>
          </div>
          <p className="card-text">
            { cardTrunfo === true && <TrunfoText /> }
          </p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;
