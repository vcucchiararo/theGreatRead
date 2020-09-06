import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import BookDetail from './components/detail/BookDetail';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Profile from './components/auth/userProfile/Profile';
import Footer from './components/footer/Footer';

function App() {
    return (
        <>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/book/:bookId" component={BookDetail} />
            <Route path="/auth/profile" exact component={Profile} />
            <Footer />
        </>
    );
}

export default App;
