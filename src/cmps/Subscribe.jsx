import React from 'react';

export function Subscribe() {
    return (
        <section className="subscribe">
            <p className="title">Get early access today</p>
            <p className="instructions">It only takes a minute to
            sign up and our free starter tier is extremely generous.
            If you have any questions, our support team would be happy to help you.</p>
            <div className="subscribe-form">
                <input placeholder="email@example.com" className="email-input" type="email" name="email" />
                <button className="submit-btn">Get Started For Free</button>
            </div>
        </section>
    )
}
