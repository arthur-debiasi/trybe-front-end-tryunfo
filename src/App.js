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
    isSaveButtonDisabled: true,
    deckCards: [],
  };

  onInputChange = ({ target }) => {
    const { name, value /* {type} */ } = target;
    // const value = type === 'checkbox' ? target.checked : target.value;
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
        // hasTrunfo: cardInfo.cardTrunfo,
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
    } = this.state;

    return (
      <>
        <h1>Tryunfo</h1>
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
        { deckCards.map((e, i) => (
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
      </>
    );
  }
}

export default App; // arthurdebiasicopyright
