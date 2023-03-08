import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <div>
          <label htmlFor="name-input">
            Nome:
            <input
              data-testid="name-input"
              type="text"
              id="name-input"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="description-text-area">
            Descrição:
            <textarea
              data-testid="description-input"
              type="text-area"
              id="description-text-area"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr1-input">
            Skill 1:
            <input
              data-testid="attr1-input"
              type="number"
              id="attr1-input"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr2-input">
            Skill 2:
            <input
              data-testid="attr2-input"
              type="number"
              id="attr2-input"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr3-input">
            Skill 3:
            <input
              data-testid="attr3-input"
              type="number"
              id="attr3-input"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="image-input">
            Imagem:
            <input
              data-testid="image-input"
              type="text"
              id="image-input"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="rare-input">
            Raridade:
            <select
              data-testid="rare-input"
              id="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="trunfo-input">
            É Super Trunfo?
            {!hasTrunfo ? (<input
              data-testid="trunfo-input"
              type="checkbox"
              name="cardTrunfo"
              id="trunfo-input"
              checked={ cardTrunfo === true }
              onChange={ onInputChange }
            />) : (<p>Você já tem um Super Trunfo em seu baralho</p>)}
          </label>
        </div>
        <div>
          <button
            data-testid="save-button"
            type="reset"
            name="saveButton"
            className="btn btn-primary"
            disabled={ isSaveButtonDisabled }
            onClick={ () => onSaveButtonClick({
              cardName,
              cardDescription,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardImage,
              cardRare,
              cardTrunfo,
            }) }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
