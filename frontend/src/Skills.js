import React, { Component } from 'react';

const Skills = (props, scrollRef) => {
    return (
        <div ref={scrollRef} className='skills-section'>
            <h1 className='skills-section-h'> Fun Facts About Me </h1>
            <p className='skills-section-p'> I played the piano and badminton for over ten years </p>
        </div>
    );
}

export default React.forwardRef(Skills);