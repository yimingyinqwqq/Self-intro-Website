import React from 'react';
import Image from 'react-bootstrap/Image'

const About = (props, scrollRef) => {
    return (
        <div ref={scrollRef} className='about-section'>
            <Image className="selfie-img" src={require("./imgs/selfie.jpg")} roundedCircle/>
            <h1 className='about-section-h'> Hi! I am Edison </h1>
            <p className='about-section-p'> A junior at UIUC majored in Computer Science </p>
        </div>
    );
}

export default React.forwardRef(About);
