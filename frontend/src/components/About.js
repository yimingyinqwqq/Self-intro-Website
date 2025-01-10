// About.js
import React from 'react';
import Image from 'react-bootstrap/Image';
import selfieImg from 'imgs/IMG_6744 2.jpg'; // Ensure the image path is correct

const About = React.forwardRef((props, ref) => {
    // Data for educational background and contact information
    const educationData = [
        {
            level: "Graduate University",
            name: "Carnegie Mellon University",
            major: "Mobile Application and IoT"
        },
        {
            level: "Undergraduate University",
            name: "University of Illinois at Urbana-Champaign",
            major: "Computer Science"
        }
    ];

    return (
        <div className="about-section" ref={ref}>
            <div className="about-header text-center">
                <Image 
                    className="selfie-img" 
                    src={selfieImg} 
                    roundedCircle
                    alt="Edison Selfie" 
                    fluid
                />
                <h1 className="about-section-h">Hi! I am Edison</h1>
                <p className="about-section-p">A recent graduate from UIUC majoring in Computer Science</p>
                <p className="about-section-p">Currently at CMU studying Mobile Application and IoT</p>
            </div>

            <div className="about-header text-center">
                {/* Education Background */}
                <div className="row mb-3">
                    {educationData.map((edu, index) => (
                        <div key={index} className="col-md-7 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{edu.level}</h5>
                                    <p className="card-text">
                                        <strong>University:</strong> {edu.name}
                                    </p>
                                    <p className="card-text">
                                        <strong>Major:</strong> {edu.major}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default About;