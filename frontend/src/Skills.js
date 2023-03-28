import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import gerig7_mp3 from './sounds/gerig7.mp3'
import allemande_mp3 from "./sounds/allemande.mp3"

const Skills = (props, scrollRef) => {
    const handClick = () => {
        let x = document.getElementById("gerig7");
        let y = document.getElementById("allemande");
        x.pause();
        y.pause();
    }

    return (
        <div ref={scrollRef} className='skills-section'>
            <Carousel interval={null} className='carousel-section' onClick={handClick}>
                <Carousel.Item style={{marginTop: '20%'}}>
                    <h1 className='skills-section-h'> Fun Facts About Me </h1>
                    <p className='skills-section-p'> I played the piano and badminton for over ten years </p>
                </Carousel.Item>

                <Carousel.Item style={{marginTop: '20%'}}>
                    <p className='skills-section-p'> Here is my performance on <span className='skills-section-italic'> Gerig lyrical pieces op.38 no.7 </span></p>
                    <br /><br /><br /><br />
                    <audio
                        id="gerig7"
                        src={gerig7_mp3}
                        controls
                    />
                </Carousel.Item>

                <Carousel.Item style={{marginTop: '20%'}}>
                    <p className='skills-section-p'> Here is my performance on <span className='skills-section-italic'> English Suite No.3 Allemande </span></p>
                    <br /><br /><br /><br />
                    <audio
                        id="allemande"
                        src={allemande_mp3}
                        controls
                    />
                </Carousel.Item>
            </Carousel>
        </div>


    );
}

export default React.forwardRef(Skills);