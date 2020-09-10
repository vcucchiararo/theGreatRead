import React, { useState, useEffect } from 'react';
import './home.scss';
import { loadBookList } from '../../actions/listActions';
import listStore from '../../stores/listStore';
import BookListItem from './BookListItem';
import Carousel from 'react-material-ui-carousel';
import LoadingPage from '../LoadingPage/LoadingPage';
import Slider from './slider/Slider';

function Home(props) {
    return <Slider />;

    //     const [bookList, setBookList] = useState(listStore.getBookList());
    //     useEffect(() => {
    //         listStore.addChangeListener(onChange);
    //         if (bookList.length === 0) loadBookList();
    //         return () => listStore.removeChangeListener(onChange);
    //     }, [bookList.length]);

    //     function onChange() {
    //         setBookList(listStore.getBookList());
    //     }

    //     return (
    //         <>
    //             {bookList.length <= 0 && <LoadingPage />}
    //             {bookList.length > 0 && (
    //                 <Carousel>
    //                     {bookList &&
    //                         bookList.map((element) => (
    //                             <BookListItem
    //                                 key={element.id}
    //                                 id={element.id}
    //                                 title={element.title}
    //                                 cover={element.image}
    //                                 rating={element.averageRating}
    //                                 author={element.author}
    //                             />
    //                         ))}
    //                 </Carousel>
    //             )}
    //         </>
    //     );
}

export default Home;
