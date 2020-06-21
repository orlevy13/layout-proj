import React from 'react';
import { Logo } from './Logo';

export function Header() {
    return (
        <header className="main-header container flex align-center space-between">
            <Logo />
            <ul className="main-nav flex clean-list">
                <li className="link flex align-center">Features</li>
                <li className="link flex align-center">Teams</li>
                <li className="link flex align-center">Sign In</li>
            </ul>
        </header>
    )
}
