import React from 'react';
import '../assets/styles/components/Header.scss'

/* IMG */
import ImgLogo from '../assets/static/logo-platzi-video-BW2.png';
import ImgUser from '../assets/static/user-icon.png';

const Header = () => (
    <header className="header">
        <img className="header__img" src={ImgLogo} alt="Platzi Video"/>
            <div className="header__menu">
                <div className="header__menu--profile">
                <img src={ImgUser} alt="" />
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="/">Cuenta</a></li>
                    <li><a href="/">Cerrar Sesión</a></li>
                </ul>
            </div>
    </header>
);

export default Header;