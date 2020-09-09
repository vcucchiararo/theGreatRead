import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import BookDetail from './components/detail/BookDetail';
import Header from './components/header/Header';
// import Home from './components/home/Home';
import Profile from './components/auth/userProfile/Profile';
import Footer from './components/footer/Footer';
import Finder from './components/finder/Finder';
import Slider from './components/home/slider/Slider';

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Slider} />
                <Route path="/book/:bookId" component={BookDetail} />
                <Route path="/auth/profile" component={Profile} />
                <Route path="/finder" component={Finder} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
