import React from 'react';
import { Link } from 'react-router-dom';
import AccordionComponent from './AccordionComponent';
import './detail.scss';

const BookDetailItem = ({ description, title, author, rating, image }) => {
    return (
        <div className="container-book">
            <img
                className="logo"
                src="https://trello-attachments.s3.amazonaws.com/5f4d74b3457c4e749f4bfea6/847x748/f0abc621274604fc9ce77e7079853efb/GreatRead.png"
            />
            <div className="title">
                <h1>{title}</h1>
                <p>{author}</p>
            </div>

            <div className="container-button">
                <Link>
                    <img
                        className="addFav_icon"
                        src="https://trello-attachments.s3.amazonaws.com/5f4e04cfbeb95a4c21272eae/512x512/acf8c0e43f29a0a56ffc175fb33ed15e/corazon.png"
                    />
                </Link>
                <Link>
                    <img
                        className="addFav_icon"
                        src="https://trello-attachments.s3.amazonaws.com/5f4906a1d69abe739ecee02f/5f4e04cfbeb95a4c21272eae/11382dd01b58f8a80d4bb800ed016201/libro.png"
                    />
                </Link>
            </div>
            <div className="shadow-cover-image">
                <div classname="cover-image">
                    <img src={image} />
                </div>
            </div>

            <div className="container-ranking">
                <p className="number-rating">{rating}</p>
                <div className="button-rating">
                    <button className="button">Muy bueno</button>
                    <button className="button">2810 votos</button>
                </div>
            </div>
            <div className="description-book">
                <p className="title-description">Resumen</p>
                <p>{description}</p>
            </div>
            <AccordionComponent />
        </div>
    );
};

export default BookDetailItem;
