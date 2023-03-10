import React from 'react';
import uuid from 'react-uuid'; // O Aluno Anderson Nunes T24B me indicou o uuid para lidar com as keys :rocket:
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    nameFilter: '',
    rareFilter: 'todas',
    trunfoFilter: false,
    isSaveButtonDisabled: true,
    deckCards: [],
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.checked ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = this.state;
      const maxAttributesValid = 210;
      const maxAttribute = 90;
      const minAttribute = 0;
      const AttributesSum = +cardAttr1 + +cardAttr2 + +cardAttr3;

      if (cardName
        && cardDescription
        && cardImage
        && cardAttr1 <= maxAttribute
        && cardAttr2 <= maxAttribute
        && cardAttr3 <= maxAttribute
        && cardAttr1 >= minAttribute
        && cardAttr2 >= minAttribute
        && cardAttr3 >= minAttribute
        && (AttributesSum <= maxAttributesValid)
      ) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };

  onSaveButtonClick = (cardInfo) => {
    this.setState((prevState) => ({
      deckCards: [...prevState.deckCards, cardInfo],
    }), () => {
      const { deckCards } = this.state;
      const hasIt = deckCards.some((c) => c.cardTrunfo);
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        hasTrunfo: hasIt,
        isSaveButtonDisabled: true,
      });
    });
  };

  deletecard = (cardInfo) => {
    this.setState(((prevState) => ({
      hasTrunfo: !cardInfo.cardTrunfo,
      deckCards: [...prevState.deckCards
        .filter((e) => e !== cardInfo)],
    })));
  };

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
      deckCards,
      nameFilter,
      rareFilter,
      trunfoFilter,
    } = this.state;

    return (

      <main>
        <h1>Tryunfo</h1>
        <div className="form-card-preview-container">
          <span className="form-container">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </span>
          <span className="card-preview">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </span>
        </div>
        <div className="deck-container">
          <div className="filters-container">
            <input
              type="text"
              data-testid="name-filter"
              name="nameFilter"
              value={ nameFilter }
              disabled={ trunfoFilter }
              onChange={ this.onInputChange }
            />
            <select
              data-testid="rare-filter"
              id="rare-filter"
              name="rareFilter"
              value={ rareFilter }
              disabled={ trunfoFilter }
              onChange={ this.onInputChange }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
            <input
              type="checkbox"
              data-testid="trunfo-filter"
              name="trunfoFilter"
              id="trunfo-filter"
              checked={ trunfoFilter === true }
              onChange={ this.onInputChange }
            />
          </div>
          <div className="  ">
            {deckCards
              .filter((e) => {
                if (trunfoFilter === true) {
                  return e.cardTrunfo === true;
                }
                if (rareFilter === 'todas') {
                  return e.cardName.match(nameFilter);
                }
                return e.cardName.match(nameFilter) && e.cardRare === rareFilter; // O aluno Victor Mendes da turma 24 tribo B me ajudou a refatorar meu filtro de raridade e a resolver todos os bugs :rocket:
              })
              .map((e) => (
                <div key={ uuid() }>
                  <Card
                    cardName={ e.cardName }
                    cardDescription={ e.cardDescription }
                    cardAttr1={ e.cardAttr1 }
                    cardAttr2={ e.cardAttr2 }
                    cardAttr3={ e.cardAttr3 }
                    cardImage={ e.cardImage }
                    cardRare={ e.cardRare }
                    cardTrunfo={ e.cardTrunfo }
                  />
                  <button
                    data-testid="delete-button"
                    type="button"
                    onClick={ () => this.deletecard(e) }
                  >
                    Excluir
                  </button>
                </div>))}
          </div>
        </div>
      </main>

    );
  }
}

export default App; // arthurdebiasicopyright
