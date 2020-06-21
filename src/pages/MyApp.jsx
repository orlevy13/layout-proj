import React, { Component } from 'react';
import { Intro } from '../cmps/Intro';
import { Features } from '../cmps/Features';
import { MoreInfo } from '../cmps/MoreInfo';
import { Testimonials } from '../cmps/Testimonials';
import { Footer } from '../cmps/Footer';
import curvedImg from '../styles/imgs/bg-curvy-desktop.svg';



export class MyApp extends Component {
    render() {
        return (
            <main className="main-app">
                <Intro />
                <img className="curved-img" src={curvedImg} alt="background" />
                <Features />
                <MoreInfo />
                <Testimonials />
                <Footer />
            </main>
        )
    }
}
