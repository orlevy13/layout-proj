import React from 'react';
import { Logo } from './Logo';
import FB from '../styles/imgs/facebook.png';
import twitter from '../styles/imgs/twitter.png';
import insta from '../styles/imgs/insta.png';

export function Footer() {
    return (
        <footer className="main-footer">
            <Logo />
            <section className="footer-content flex">
                <div className="address-cont flex">
                    <div className="icon"></div>
                    <p className="address">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua
                </p>
                </div>
                <div className="contact-details">
                    <div className="phone-cont flex align-center">
                        <div className="icon"></div>
                        <p className="phone">+1-543-123-4567</p>
                    </div>
                    <div className="email-cont flex align-center">
                        <div className="icon"></div>
                        <div className="email">example@fylo.com</div>
                    </div>
                </div>
                <ul className="footer-nav main clean-list">
                    <li>About Us</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Blog</li>
                </ul>
                <ul className="footer-nav clean-list">
                    <li>Contact Us</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                </ul>
                <div className="social-links flex">
                    <div className="fb-link flex align-center justify-center">
                        <span><img src={FB} alt="facebook" /></span></div>
                    <div className="twitter-link flex align-center justify-center">
                        <span><img src={twitter} alt="twitter" /></span> </div>
                    <div className="insta-link flex align-center justify-center">
                        <span><img src={insta} alt="instagram" /></span></div>
                </div>
            </section>
        </footer>
    )
}
