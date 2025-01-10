import React, { Component } from 'react';
import Cards from './cards';
import Social from './social';
import FadeIn from 'react-fade-in';
import backgroundVideo from "./pictures/Japan2023.mp4";
import downarrow from "./pictures/downarrow.png";

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

class photography extends Component {
    render() {
        return (
            <div className="aboutPage">
                <div className="imgPic">
                    <FadeIn>
                        {/* Video Background */}
                        <div className="videoBackground2">
                            <video autoPlay loop muted playsInline className="backgroundVideo">
                                <source src={backgroundVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="welcomeText">The World Is Beautiful</div>
                        </div>
                    </FadeIn>
                </div>
                <br/><br/><br/><br/>
                <div className="downArrow">
                    <img className="downArrowPic" src={downarrow} style={{ height: 50, width: 50 }}/>
                </div>
                <br/>
                <div className="title">
                    <FadeInSection>
                        <p className="pagetitle">
                            Travel
                        </p>
                    </FadeInSection>
                </div>
                <div className="footer">
                    <Social />
                </div>
            </div>
        )
    }
}

export default photography;