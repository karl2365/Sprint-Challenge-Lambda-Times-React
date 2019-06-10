import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  .card {
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: none;
    flex-direction: column;
    background-color: #fff;
    width: 380px;
    margin-bottom: 16px;
    padding: 24px;
  }
  .headline {
    font-size: 25px;
    font-family: Didot, serif;
  }
  .author {
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
    span {
      padding-left: 10px;
      font-size: 12px;
      letter-spacing: 1px;
      font-weight: bold;
    }
  }
  .img-container {
    padding-right: 10px;
    border-right: 1px solid lightgrey;
    height: 40px;
    img{
      width: 40px;
    }
  }
`;

const Cards = props => {
  return (
    <Container>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
         {props.cards.map(card => (
              <Card card={card}></Card>   
            ))}
    </Container>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  
  cards: PropTypes.arrayOf(
    PropTypes.shape({
    author: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string,
    tab: PropTypes.string
    
  }))
}

export default Cards;