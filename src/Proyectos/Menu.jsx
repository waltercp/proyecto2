import React from 'react';
import './menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <img src="logo.png" alt="" />

            <div className='menu__Content'>
                <div><i className='bx bx-home'></i>Inicio</div>
                <div><i className='bx bx-search'></i>Busqueda</div>
                <div><i className='bx bx-map-alt'></i>Explorar</div>
                <div><i className='bx bxs-videos'></i>Reels</div>
                <div><i className='bx bx-message-rounded-dots'></i>Mensaje</div>
                <div><i className='bx bx-heart'></i>Notificaciones</div>
                <div><i className='bx bx-add-to-queue'></i>Crear</div>
                <div><i className='bx bxs-user-pin'></i>Perfil</div>
            </div>
        </div>
    );
}

export default Menu;
