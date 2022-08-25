import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    nameFilter: '',
    rareFilter: '',
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
      // previewOn: true,
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
        cardRare: '',
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
    } = this.state;

    return (
      <>
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
              onChange={ this.onInputChange }
            />
            <select
              data-testid="rare-filter"
              id="rare-filter"
              name="rareFilter"
              value={ rareFilter }
              onChange={ this.onInputChange }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </div>
          <div className="deck-container">
            { deckCards
              .filter((e) => e.cardName.match(nameFilter))
              .filter((e) => (rareFilter === 'todas' ? e : e.cardRare === rareFilter))
              .map((e, i) => (
                <>
                  <Card
                    cardName={ e.cardName }
                    cardDescription={ e.cardDescription }
                    cardAttr1={ e.cardAttr1 }
                    cardAttr2={ e.cardAttr2 }
                    cardAttr3={ e.cardAttr3 }
                    cardImage={ e.cardImage }
                    cardRare={ e.cardRare }
                    cardTrunfo={ e.cardTrunfo }
                    key={ `${i + 1}-${e.cardAttr1}-${i}` }
                  />
                  <button
                    data-testid="delete-button"
                    type="button"
                    key={ `${i + 2}-${e.cardAttr1}-${i + 2}` }
                    onClick={ () => this.deletecard(e) }
                  >
                    Excluir
                  </button>
                </>)) }
          </div>
        </div>
      </>
    );
  }
}

export default App; // arthurdebiasicopyright
