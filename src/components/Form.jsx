import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="name-input">
            Nome:
            <input
              data-testid="name-input"
              type="text"
              id="name-input"
              name="name"
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
              name="description"
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
              name="attr1"
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
              name="attr2"
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
              name="attr3"
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
              name="image"
            />
          </label>
        </div>
        <div>
          <label htmlFor="rare-input">
            Raridade:
            <select
              data-testid="rare-input"
              id="rare-input"
              name="rarity"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="trunfo-input">
            <input
              data-testid="trunfo-input"
              type="checkbox"
              name="super"
              id="trunfo-input"
            />
          </label>
        </div>
        <div>
          <button
            data-testid="save-button"
            type="submit"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}
