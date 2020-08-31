import React from 'react';
import { Link } from 'react-router-dom';
import AccordionComponent from './AccordionComponent';

const BookDetailItem = ({ description, title, author, rating, image }) => {
    return (
        <>
            <div>
                <h1>{title}</h1>
                <p>{author}</p>
                <Link>Agregar como favorito</Link>
                <Link>Quiero leer</Link>
                <img src={image} />
                <p>{rating}</p>
                <button>Muy bueno</button>
                <button>2810 votos</button>
                <p>{description}</p>
            </div>
            <AccordionComponent />
        </>
    );
};

export default BookDetailItem;
