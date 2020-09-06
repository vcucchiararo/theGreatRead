import React, { useState, useEffect } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
// import { logout } from '../auth/logout/Logout';

// import LogoutButton from '../auth/logout/Logout';
import Login from '../auth/login/Login';

function Header() {
    const [search, setSearch] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.pathname = '/finder' + search;
    };

    return (
        <header className="header-container">
            <div className="header">
                <Link className="header-logo" to="/">
                    <img
                        width="100%"
                        height="100%"
                        src="https://trello-attachments.s3.amazonaws.com/5f4d74b3457c4e749f4bfea6/847x748/f0abc621274604fc9ce77e7079853efb/GreatRead.png"
                    />
                </Link>

                <form className="header-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={search}
                        className="header-form__search"
                        placeholder="Título, autor o género..."
                        onChange={(event) => setSearch(event.target.value)}
                    ></input>
                    <select class="select-css">
                        <option className="option">Título</option>
                        <option className="option">Autor</option>
                        <option className="option">Género</option>
                    </select>
                </form>
                <div className="header-login">
                    {/* <Link
                        className="header-login__profile-button"
                        to="/auth/profile"
                    >
                        Perfil
                    </Link> */}
                    <p className="text-login">¿Ya tienes cuenta?</p>
                    <div className="header-login__button">
                        <Login />
                    </div>
                    {/* <LogoutButton /> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
