import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './profile.scss';
import { createUser } from '../../../actions/userActions';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [fiction, setFiction] = useState('');
    const [education, setEducation] = useState('');

    const [userData, setUserData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        newPassword: ''
    });

    function handleSubmit() {
        const { sub, email } = user;
        const userData = {
            userName,
            userEmail,
            sub,
            email,
            fiction,
            education
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
                            value={user.email}
                            onChange={(event) =>
                                setUserEmail(event.target.value.trim())
                            }
                        />
                    </div>

                    <div className="checkbox-container">
                        <label className="label-title">
                            Selecciona tus géneros favoritos
                        </label>
                        <div className="checkbox-box">
                            <label htmlFor="genreFiction">
                                Fiction{' '}
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    id="genreEducation"
                                    name="genreEducation"
                                    value="education"
                                ></input>
                            </label>

                            <label htmlFor="genreFiction">
                                Fiction{' '}
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    id="genreEducation"
                                    name="genreEducation"
                                    value="fiction"
                                ></input>
                            </label>
                            <label htmlFor="genreFiction">
                                Fiction{' '}
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    id="genreEducation"
                                    name="genreEducation"
                                    value="education"
                                ></input>
                            </label>
                            <label htmlFor="genreFiction">
                                Fiction{' '}
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    id="genreEducation"
                                    name="genreEducation"
                                    value="education"
                                ></input>
                            </label>
                            <label htmlFor="genreFiction">
                                Fiction{' '}
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    id="genreEducation"
                                    name="genreEducation"
                                    value="education"
                                ></input>
                            </label>
                            <label htmlFor="genreFiction">
                                Fiction{' '}
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    id="genreEducation"
                                    name="genreEducation"
                                    value="education"
                                ></input>
                            </label>
                            <label htmlFor="genreFiction">
                                Fiction{' '}
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    id="genreEducation"
                                    name="genreEducation"
                                    value="education"
                                ></input>
                            </label>
                            <label htmlFor="genreFiction">
                                Fiction{' '}
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    id="genreEducation"
                                    name="genreEducation"
                                    value="education"
                                ></input>
                            </label>
                            <label htmlFor="genreFiction">
                                Fiction{' '}
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    id="genreEducation"
                                    name="genreEducation"
                                    value="education"
                                ></input>
                            </label>
                            <label htmlFor="genreFiction">
                                Fiction{' '}
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    id="genreEducation"
                                    name="genreEducation"
                                    value="education"
                                ></input>
                            </label>
                        </div>
                    </div>
                    <div className="save-button-container">
                        <button
                            className="save-button"
                            type="submit"
                            onClick={(event) => {
                                event.preventDefault();
                                handleSubmit(
                                    userName,
                                    userEmail,
                                    fiction,
                                    education
                                );
                                console.log(
                                    handleSubmit(
                                        userName,
                                        userEmail,
                                        fiction,
                                        education
                                    )
                                );
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
