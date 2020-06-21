import React from 'react';
import { Link } from 'react-router-dom';

export  function Logo() {
    return (
        <Link to="/">
        <div className="flex align-center">
            <div className="logo"></div>
            <div className="logo-txt">Fylo</div>
        </div>
    </Link>
    )
}
