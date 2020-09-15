// import React, { useState, useEffect } from 'react';
// import { loadBookList } from '../../../actions/listActions';
// import { genreBooksSearch } from '../../../actions/homeActions';
// import homeStore from '../../../stores/homeStore';
// import SliderItem from './SliderItem';
// import LoadingPage from '../../LoadingPage/LoadingPage';
// import './slider.scss';

// function Slider(props) {
//     const [actionBooksList, setActionBooksList] = useState();
//     const [suspenseBookList, setSuspenseBookList] = useState();
//     const [fantasyBookList, setFantasyBookList] = useState();

//     async function fetchData(query) {
//         const response = await genreBooksSearch(query);
//         return response;
//     }

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
//             <div className="slider__text">
//                 <p className="slider__title">{props.title}</p>
//             </div>
//             {bookList.length <= 0 && <LoadingPage />}
//             {bookList.length > 0 && (
//                 <section className="slider-container">
//                     {bookList &&
//                         bookList.map((element) => (
//                             <SliderItem
//                                 key={element.id}
//                                 id={element.id}
//                                 title={element.title}
//                                 cover={element.image}
//                                 rating={element.averageRating}
//                                 author={element.author}
//                             />
//                         ))}
//                 </section>
//             )}
//         </>
//     );
// }

// export default Slider;
