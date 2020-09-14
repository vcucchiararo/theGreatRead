import React from 'react';
import { Link } from 'react-router-dom';
import AccordionComponent from './AccordionComponent';
import './detail.scss';
// import addFavoriteBook from './addFavoriteBook';
import { favoriteBook } from '../../actions/userActions';

const BookDetailItem = ({
    book,
    user,
    isAuthenticated,
    submit,
    toggleFavoriteButton
}) => {
    return (
        <div className="container-book">
            <div className="title">
                <h1>{book.title}</h1>
                <p>{book.author}</p>
            </div>
            <div className="container-info-book">
                <div className="container-top">
                    <div className="image-container">
                        <div classname="cover-image">
                            <img width="200" height="300" src={book.image} />
                        </div>
                    </div>
                    <div className="container-ranking">
                        <p className="number-rating">{book.rating}</p>
                    </div>
                    <div className="container-button">
                        {isAuthenticated && (
                            <>
                                {toggleFavoriteButton && (
                                    <div
                                        onClick={(event) => {
                                            event.preventDefault();
                                            submit();
                                        }}
                                    >
                                        <img
                                            className="addFav_icon"
                                            src="https://trello-attachments.s3.amazonaws.com/5f4e04cfbeb95a4c21272eae/512x512/acf8c0e43f29a0a56ffc175fb33ed15e/corazon.png"
                                        />
                                    </div>
                                )}
                                {!toggleFavoriteButton && (
                                    <div
                                        onClick={(event) => {
                                            event.preventDefault();
                                            submit();
                                        }}
                                    >
                                        <img
                                            className="addFav_icon"
                                            src="https://trello-attachments.s3.amazonaws.com/5f4906a1d69abe739ecee02f/5f4e04cfbeb95a4c21272eae/1f9f8fc08c46d03b6b6fdf0b0acd00be/corazon_(1).png"
                                        />
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
                <div className="container-ranking-description">
                    <div className="description-book">
                        <p className="title-description">Resumen</p>
                        <p>{book.description}</p>
                    </div>
                </div>
            </div>
            <AccordionComponent
                genre={book.genre}
                year={book.year}
                editorial={book.editorial}
                isbn={book.isbn}
            />
        </div>
    );
};

export default BookDetailItem;
