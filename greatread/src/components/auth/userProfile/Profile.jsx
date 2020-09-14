import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './profile.scss';
import { createUser, loadUser } from '../../../actions/userActions';
import userStore from '../../../stores/userStore';
import LoadingPage from '../../LoadingPage/LoadingPage';

const Profile = (props) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [userLoaded, setUserLoaded] = useState(userStore.getUser());

    useEffect(() => {
        userStore.addChangeListener(onChange);
        if (userLoaded.length === 0) {
            user && loadUser(user.sub);
        }

        return () => userStore.removeChangeListener(onChange);
    }, [userLoaded.length, user]);

    function onChange() {
        setUserLoaded(userStore.getUser());
    }

    if (isAuthenticated)
        createUser({
            userEmail: user.email,
            sub: user.sub,
            userNickname: user.nickname
        });
    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        isAuthenticated && (
            <div className="profile-container">
                <div className="image-container">
                    <img src={user.picture} alt="Imagen de perfil de usuario" />
                </div>

                <div className="nickname-container">
                    <h1 className="nickname-item"> Hola {user.nickname}!</h1>
                </div>
                <div className="favorite-books-container">
                    <div className="pageHeadLine">
                        <h1>Mis libros favoritos</h1>
                    </div>
                    <div className="bookShelves">
                        <div className="bookShelfList">
                            <div className="book">
                                <img
                                    className="bookCover"
                                    src="https://i.pinimg.com/564x/d3/1a/6f/d31a6f22b8d115bc766cfeb284682060.jpg"
                                    alt="Cover libro"
                                    width="200"
                                    height="300"
                                />
                                <div className="book-details">
                                    <p className="bookTitle">
                                        Freedom is space for the spirit
                                    </p>
                                    <p className="bookAuthor">
                                        por Glen Hirshberg
                                    </p>
                                    <p className="bookRating">4</p>
                                    <button className="bookUserShelfAction">
                                        Ir al libro
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Profile;
