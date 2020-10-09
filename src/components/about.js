import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import Social from './social';
import FadeIn from 'react-fade-in';
import profilePic from "./pictures/headshotnobg.png";
import background from "./pictures/background.jpg";
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
  

class about extends Component {
    render() {
        return (
            <div className="aboutPage">
                <div className="imgPic">
                    <FadeIn>
                        <Parallax bgImage={ background } strength={500}>
                            <div style={{ height: 500 }}>
                                <div className="welcomeText" >hi! i'm eric wang</div>
                            </div>
                        </Parallax>
                    </FadeIn>
                </div>
                <div className="downArrow">
                    <img className="downArrowPic" src={downarrow} style={{ height: 50, width: 50 }}/>
                </div>
                <div className="titleAbout">
                    <div className="profile">
                        <img className="display" src={profilePic} style={{width: "250px", height: "250px", borderRadius: 400/2}}/>
                    </div>
                    <div className="intro">
                        <FadeInSection>
                            <p className="pagetitle" >Hi! <br /><br /> I am a sophomore at the University of 
                            Texas at Austin studying Computational Engineering. I enjoy watching movies, casual 
                            gaming, cars, coffee and recently started biking. In addition to school, I am taking
                            real estate courses in hopes of getting my license before this year ends. I love food, and living 
                            in Austin has made it so easy to find delicious food. I might post some of my 
                            most memorable food visits here in Austin in my blog and explore more once quarantine is over. Besides being a huge foodie, I enjoy 
                            taking pictures of nature, finding neat spots to take pictures at while biking around Austin.
                            <br /> <br />
                            In the future I hope to work in either the car or areospace industry, helping develop
                            technology that'll benefit everyone's travel experience. I look forward to keeping this website up to date with new and exciting life 
                            updates. Thanks for stopping by!</p>
                        </FadeInSection>
                    </div>
                </div>
                <div className="footer">
                    <Social />
                </div>
            </div>
        )
    }
}

export default about;