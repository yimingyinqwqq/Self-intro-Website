import React, { Component } from 'react';

const About = (props, scrollRef) => {
    return (
        <div ref={scrollRef} className='about-section'>
            <h1 className='about-section-h'> Hi! I am Edison </h1>
            <p className='about-section-p'> A junior at UIUC majored in Computer Science </p>
        </div>
    );
}

export default React.forwardRef(About);
