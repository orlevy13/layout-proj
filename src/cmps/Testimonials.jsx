import React from 'react';
import { Subscribe } from './Subscribe';
import satishPatel from '../styles/imgs/profile-1.jpg';
import bruce from '../styles/imgs/profile-2.jpg';
import iva from '../styles/imgs/profile-3.jpg';
import quotes from '../styles/imgs/bg-quotes.png';

export function Testimonials() {
    return (
        <section className="testimonials justify-center container flex">
            <article className="testimony">
                <img className="quotes" src={quotes} alt="quotes icon" />
                <div className="dummy-div">
                    <p className="main-txt">Fylo has improved our team productivity
                    by an order of magnitude. Since making the switch our team has
                 become a well-oiled collaboration machine.</p>
                    <div className="person-profile flex align-center">
                        <img src={satishPatel} alt="profile" />
                        <div>
                            <p className="name">Satish Patel</p>
                            <p className="role">Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className="testimony">
                <p className="main-txt">Fylo has improved our team productivity by
                an order of magnitude. Since making the switch our team has become
                  a well-oiled collaboration machine.</p>
                <div className="person-profile flex align-center">
                    <img src={bruce} alt="profile" />
                    <div>
                        <p className="name">Bruce McKenzie</p>
                        <p className="role">Founder & CEO, Hubble</p>
                    </div>
                </div>
            </article>
            <article className="testimony">
                <p className="main-txt">Fylo has improved our team productivity by an
                order of magnitude. Since making the switch our team has become a
                 well-oiled collaboration machine.</p>
                <div className="person-profile flex align-center">
                    <img src={iva} alt="profile" />
                    <div>
                        <p className="name">Iva Boyd</p>
                        <p className="role">Founder & CEO, Huggle</p>
                    </div>
                </div>
            </article>
            <Subscribe />
        </section>
    )
}
