import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './profile.scss';
import { createUser, loadUser } from '../../../actions/userActions';
import userStore from '../../../stores/userStore';
import LoadingPage from '../../LoadingPage/LoadingPage';

const Profile = (props) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [userLoaded, setUserLoaded] = useState(userStore.getUser());
    console.log('uuuuuuuuuuuuseeeeeeeerrrrrrrrrrPROFILE', user);
    console.log('uuuuuuuuuuuuseeeeeeeerrrrrrrrrrPROFILE', userLoaded);
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
            </div>
        )
    );
};

export default Profile;
