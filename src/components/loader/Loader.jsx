// MIT License

// Copyright (c) 2024 Oluwatosin

import './Loader.css';
import Logo from '../../assets/images/My_Logo-2 (2).png';

const Loader = () => {
    return (
        <div className="loader">
            <div className="logo-wrapper">
                <img src={Logo} alt="Logo" className="bouncing-logo" />
            </div>
        </div>
    );
};

export default Loader;