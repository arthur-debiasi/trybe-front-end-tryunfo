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
      <>
        <div>
          <h1 data-testid="name-card">
            Carta
            { cardName }
          </h1>
        </div>
        <div>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
        </div>
        <div>
          <p data-testid="description-card">
            Descrição
            { cardDescription }
          </p>
        </div>
        <div>
          <p data-testid="attr1-card">
            Skill 1
            { cardAttr1 }
          </p>
        </div>
        <div>
          <p data-testid="attr2-card">
            Skill 2
            { cardAttr2 }
          </p>
        </div>
        <div>
          <p data-testid="attr3-card">
            Skill 3
            { cardAttr3 }
          </p>
        </div>
        <div>
          <p data-testid="rare-card">
            Raridade
            { cardRare }
          </p>
        </div>
        <div>
          <p>
            Essa carta é
          </p>
          { cardTrunfo ? <TrunfoText /> : <p>de outro tipo...</p>}
        </div>
      </>
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
