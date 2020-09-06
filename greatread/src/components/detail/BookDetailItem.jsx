import React from 'react';
import { Link } from 'react-router-dom';
import AccordionComponent from './AccordionComponent';
import './detail.scss';

const BookDetailItem = ({
    description,
    title,
    author,
    rating,
    image,
    year,
    isbn,
    editorial,
    genre
}) => {
    return (
        <div className="container-book">
            {/* <img
                className="logo"
                src="https://trello-attachments.s3.amazonaws.com/5f4d74b3457c4e749f4bfea6/847x748/f0abc621274604fc9ce77e7079853efb/GreatRead.png"
            /> */}
            <div className="title">
                <h1>{title}</h1>
                <p>{author}</p>
            </div>
            <div className="container-ranking">
                <p className="number-rating">{rating}</p>
                <div className="button-rating">
                    <button className="button">Muy bueno</button>
                    <button className="button">2810 votos</button>
                </div>
            </div>
            <div className="shadow-cover-image">
                <div classname="cover-image">
                    <img width="200" height="300" src={image} />
                </div>
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
                        className="addBook_icon"
                        src="https://trello-attachments.s3.amazonaws.com/5f4e04cfbeb95a4c21272eae/512x512/ae5e99a44e7fab4d705c10894c4fd5d9/libro_%281%29.png"
                    />
                </Link>
            </div>

            <div className="description-book">
                <p className="title-description">Resumen</p>
                <p>{description}</p>
            </div>
            <AccordionComponent
                genre={genre}
                year={year}
                editorial={editorial}
                isbn={isbn}
            />
        </div>
    );
};

export default BookDetailItem;
