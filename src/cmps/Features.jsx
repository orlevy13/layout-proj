import React from 'react';
import accessAnywhere from '../styles/imgs/icon-access-anywhere.svg';
import security from '../styles/imgs/icon-security.svg';
import collab from '../styles/imgs/icon-collaboration.svg';
import anyFile from '../styles/imgs/icon-any-file.svg';

export function Features() {
    return (
        <section className="features flex column align-center">
            <div className="features-cont flex space-around">
                <article className="feature flex column align-center">
                    <div className="access img-cont">
                        <img src={accessAnywhere} alt="icon" />
                    </div>
                    <p className="main-txt">Access your files, anywhere</p>
                    <p className="secondary-txt">The ability to use a smartphone,
                    tablet, or computer to access your account means your files follow
                     you everywhere.</p>
                </article>
                <article className="feature flex column align-center">
                    <div className="img-cont">
                        <img src={security} alt="icon" />
                    </div>
                    <p className="main-txt">Security you can trust</p>
                    <p className="secondary-txt">2-factor authentication and user-controlled
                    encryption are just a couple of the security features we allow to
                     help secure your files.</p>
                </article>

            </div>
            <div className="features-cont flex space-around">
                <article className="feature flex column align-center">
                    <div className="img-cont">
                        <img src={collab} alt="icon" />
                    </div>
                    <p className="main-txt">Real-time collaboration</p>
                    <p className="secondary-txt">Securely share files and folders with friends,
                     family and colleagues for live collaboration. No email attachments required.</p>
                </article>
                <article className="feature flex column align-center">
                    <div className="img-cont">
                        <img src={anyFile} alt="icon" />
                    </div>
                    <p className="main-txt">Store any type of file</p>
                    <p className="secondary-txt">Whether you're sharing holidays photos or work
                    documents, Fylo has you covered allowing for all file types to be securely
                     stored and shared.</p>
                </article>

            </div>
        </section>
    )
}
