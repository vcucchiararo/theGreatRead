import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import BookDetail from './components/detail/BookDetail';
import Home from './components/home/Home';
import Profile from './components/auth/userProfile/Profile';

function App() {
    return (
        <>
            <Route path="/" exact component={Home} />
            <Route path="/book/:bookId" component={BookDetail} />
            <Route path="/auth/profile" exact component={Profile} />
        </>
    );
}

export default App;
