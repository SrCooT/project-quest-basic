// Card.js
import React from 'react';
import './card.css'

const Card = ({ children, textTransform, onClick }) => {
    const transformText = () => {
        const cardElements = document.querySelectorAll('.card-clicked');
        cardElements.forEach(cardElement => {
            cardElement.classList.toggle('card-clicked1');
        });
    };

    return (
        <div className='card' style={{ textTransform: textTransform }} onClick={transformText}>
            {children}
        </div>
    );
};

Card.defaultProps = {
    onClick: () => {} 
};

export default Card;




