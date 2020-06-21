import React from 'react';
import introImg from '../styles/imgs/illustration-intro.png';



export function Intro() {
    return (
        <section className="intro flex column align-center">
            <div className="img-cont"> <img src={introImg} alt="intro" /></div>
            <p className="main-txt">All your files in one secure location, accessible anywhere.</p>
            <p className="secondary-txt">Fylo stores all your most important files in one
            secure location. Access them wherever you need, share and collaborate with
             friends family, and co-workers.</p>
            <button className="cta-btn">Get started</button>
        </section>
    )
}
