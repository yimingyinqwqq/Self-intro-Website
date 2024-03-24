import React from 'react';
import Image from 'react-bootstrap/Image'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, MoveOut, Sticky } from "react-scroll-motion";

const About = () => {
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <div className='about-section'>
            <ScrollContainer style={{marginTop: "-10%"}}>
                <ScrollPage>
                    <Animator animation={MoveOut(0, -100)}>
                        <Image className="selfie-img" src={require("./imgs/IMG_6744 2.jpg")} roundedCircle/>
                        <h1 className='about-section-h'> Hi! I am Edison </h1>
                        <p className='about-section-p'> A recent graduate from UIUC majored in Computer Science </p>
                        <p className='about-section-p'> Now at CMU studying Mobile Application and IoT </p>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={FadeUp}>
                        <p className='about-section-p'> Graduate University: <p className='about-section-text'> Carnegie Mellon University </p></p>
                        <p className='about-section-p'> Major: <p className='about-section-text'> Mobile Application and IoT </p></p>
                        <br/><br/>
                        <p className='about-section-p'> Undergraduate University: <p className='about-section-text'> University of Illinois at Urbana-Champaign </p></p>
                        <p className='about-section-p'> Major: <p className='about-section-text'> Computer Science </p></p>
                        <br/><br/>
                        <p className='about-section-p'> GitHub: <p className='about-section-text'> yimingyinqwqq </p></p>
                        <p className='about-section-p'> Email: <p className='about-section-text'> yimingyi@andrew.cmu.edu </p></p>
                    </Animator>
                </ScrollPage>

            </ScrollContainer>
        </div>
    );
}

export default React.forwardRef(About);
