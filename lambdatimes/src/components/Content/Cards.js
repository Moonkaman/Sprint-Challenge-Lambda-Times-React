import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card, index) => <Card card={card} key={card.author+index} />)}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  }))
}
// Make sure you include prop types for all of your incoming props

export default Cards;