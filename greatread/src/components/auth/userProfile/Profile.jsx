import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './profile.scss';
import { createUser } from '../../../actions/userActions';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const [userData, setUserData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        newPassword: ''
    });

    function handleSubmit() {
        console.log('user ---->', user);
        const { sub, email } = user;
        const userData = {
            userName,
            userEmail,
            sub,
            email
        };
        createUser(userData);
    }

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div className="profile-container">
                <div className="image-container">
                    <img src={user.picture} alt="Imagen de perfil de usuario" />
                </div>

                <form>
                    <div className="form-item-container">
                        <label> Nombre </label>
                        <input
                            type="text"
                            value={userName}
                            onChange={(event) =>
                                setUserName(event.target.value.trim())
                            }
                        />
                    </div>
                    <div className="form-item-container">
                        <label> Email </label>
                        <input
                            type="email"
                            value={userEmail}
                            onChange={(event) =>
                                setUserEmail(event.target.value.trim())
                            }
                        />
                    </div>

                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            id="genreFiction"
                            name="genreFiction"
                            value="fiction"
                        ></input>
                        <label htmlFor="genreFiction">Fiction</label>
                        <input
                            type="checkbox"
                            id="genreEducation"
                            name="genreEducation"
                            value="education"
                        ></input>
                        <label htmlFor="genreEducation">Education</label>
                        <input
                            type="checkbox"
                            id="genreFantasy"
                            name="genreFantasy"
                            value="fantasy"
                        ></input>
                        <label htmlFor="genreFantasy">Fantasy</label>
                    </div>
                    <div className="save-button-container">
                        <button
                            className="save-button"
                            type="submit"
                            onClick={(event) => {
                                event.preventDefault();
                                handleSubmit(userName, userEmail);
                            }}
                        >
                            Guardar cambios
                        </button>
                    </div>
                </form>
            </div>
        )
    );
};

export default Profile;
