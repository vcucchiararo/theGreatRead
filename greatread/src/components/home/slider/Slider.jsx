import React, { useState, useEffect } from 'react';
import { loadBookList } from '../../../actions/listActions';
import listStore from '../../../stores/listStore';
import SliderItem from './SliderItem';
import LoadingPage from '../../LoadingPage/LoadingPage';
import './slider.scss';
import { Link } from 'react-router-dom';

function Slider(props) {
    const [bookList, setBookList] = useState(listStore.getBookList());

    useEffect(() => {
        listStore.addChangeListener(onChange);
        if (bookList.length === 0) loadBookList();
        return () => listStore.removeChangeListener(onChange);
    }, [bookList.length]);

    function onChange() {
        setBookList(listStore.getBookList());
    }

    return (
        <>
            <div className="slider__text">
                <p className="slider__title">{props.title}</p>
            </div>
            {bookList.length <= 0 && <LoadingPage />}
            {bookList.length > 0 && (
                <section className="slider-container">
                    {bookList &&
                        bookList.map((element) => (
                            <SliderItem
                                key={element.id}
                                id={element.id}
                                title={element.title}
                                cover={element.image}
                                rating={element.averageRating}
                                author={element.author}
                            />
                        ))}
                </section>
            )}
        </>
    );
}

export default Slider;
