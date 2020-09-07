import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './profile.scss';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

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
                        <input type="text" value={user.name} />
                    </div>
                    <div className="form-item-container">
                        <label> Apellido </label>
                        <input type="text" value={user.name} />
                    </div>
                    <div className="form-item-container">
                        <label> Email </label>
                        <input type="text" value={user.email} />
                    </div>
                    <div className="form-item-container">
                        <label> Modificar contraseña </label>
                        <input type="password" value={user.name} />
                    </div>
                    <div className="save-button-container">
                        <button className="save-button">Guardar cambios</button>
                    </div>
                </form>
            </div>
        )
    );
};

export default Profile;
