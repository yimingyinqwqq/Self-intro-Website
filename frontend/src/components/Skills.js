import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import gerig7_mp3 from 'sounds/gerig7.mp3';
import allemande_mp3 from 'sounds/allemande.mp3';

const Skills = (props, scrollRef) => {
  const handClick = () => {
    const x = document.getElementById('gerig7');
    const y = document.getElementById('allemande');
    x.pause();
    y.pause();
  };

  return (
    <div ref={scrollRef} className="skills-section">
      <Carousel interval={null} className="carousel-section" onClick={handClick}>
        
        {/* Slide 1 */}
        <Carousel.Item>
          {/* Wrap slide content in a child div */}
          <div className="carousel-slide-content">
            <h1 className="skills-section-h">Fun Facts About Me</h1>
            <p className="skills-section-p">
              I played the piano and badminton for over ten years
            </p>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div className="carousel-slide-content">
            <p className="skills-section-p">
              Here is my performance on 
              <span className="skills-section-italic"> Gerig lyrical pieces op.38 no.7</span>
            </p>
            <audio id="gerig7" src={gerig7_mp3} controls />
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div className="carousel-slide-content">
            <p className="skills-section-p">
              Here is my performance on 
              <span className="skills-section-italic"> English Suite No.3 Allemande</span>
            </p>
            <audio id="allemande" src={allemande_mp3} controls />
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default React.forwardRef(Skills);