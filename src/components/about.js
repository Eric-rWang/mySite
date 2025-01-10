import React, { Component } from 'react';
import Social from './social';
import FadeIn from 'react-fade-in';
import profilePic from "./pictures/headshotnew.png";
import downarrow from "./pictures/downarrow.png";
import backgroundVideo from "./pictures/background.mp4"; // Replace with the path to your video

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

class about extends Component {
    render() {
        return (
            <div className="aboutPage">
                {/* Video Background */}
                <div className="videoBackground">
                    <video autoPlay loop muted playsInline className="backgroundVideo">
                        <source src={backgroundVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="welcomeText">Welcome, I'm Eric Wang</div>
                </div>

                {/* Content Section */}
                <div className="downArrow">
                    <img className="downArrowPic" src={downarrow} style={{ height: 50, width: 50 }} />
                </div>
                <div className="titleAbout">
                    <div className="intro">
                        <FadeInSection>
                            <div className="profile">
                                <img
                                    className="display"
                                    src={profilePic}
                                    alt="Profile"
                                    style={{
                                        width: "250px",
                                        height: "250px",
                                        borderRadius: "50%",
                                    }}
                                />
                            </div>
                            <p className="pagetitle">
                                Hi! <br /><br /> I am a graduate student at the University of Texas at Austin, studying Electrical and Computer Engineering.
                                Outside of school, I enjoy watching movies, casual gaming, exploring cars, savoring coffee, and traveling. One of my biggest passions is working on
                                cars, and I’m excited to share that I have a G80 M3 on order—a dream car I can’t wait to own!
                                <br /><br />I’m also a huge foodie, and living in Austin has been a treat with its incredible culinary scene. With the Michelin Guide now covering Austin,
                                I’ve got even more restaurants to explore. I plan to share some of my most memorable food experiences here on my blog, especially as I find more time
                                to dive into Austin’s vibrant food culture.
                                <br /><br />Another passion of mine is photography, particularly capturing nature during my travels. I love documenting the stunning sights I encounter and
                                look forward to sharing these moments with you. This website will be my space to share updates, stories, and adventures.
                                <br /><br />Thanks for stopping by—stay tuned for more!
                            </p>
                        </FadeInSection>
                    </div>
                </div>
                <div className="footer">
                    <Social />
                </div>
            </div>
        );
    }
}

export default about;
