import React from 'react';
import illus from '../styles/imgs/illustration-stay-productive.png';
import arrow from '../styles/imgs/icon-arrow.svg';

export function MoreInfo() {
    return (
        <section className="more-info container flex align-center justify-center">
            <div className="img-cont">
                <img src={illus} alt="workplace" />
            </div>
            <div className="content">
                <p className="main-txt">Stay productive,<br /> wherever you are</p>
                <p className="secondary-txt">Never let location be an issue when
                accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p className="secondary-txt bottom">Securely share files and folders with friends,
                family and colleagues for live collaboration. No email attachments required.</p>
                <div className="cta-link flex align-center">
                    <span>See how Fylo works</span>
                    <img className="icon" src={arrow} alt="icon" />
                </div>
            </div>
        </section>
    )
}
