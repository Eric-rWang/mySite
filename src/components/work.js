import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import Cards from './cards';
import Social from './social';
import FadeIn from 'react-fade-in';
import background from "./pictures/background2.jpg";
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

class work extends Component {
    render() {
        return (
            <div className="aboutPage">
                <div className="imgPic">
                    <FadeIn>
                        <Parallax bgImage={ background } strength={500}>
                            <div style={{ height: 500 }}>
                                <div className="welcomeText" >what i like to do</div>
                            </div>
                        </Parallax>
                    </FadeIn>
                </div>
                <div className="downArrow">
                    <img className="downArrowPic" src={downarrow} style={{ height: 50, width: 50 }}/>
                </div>
                <div className="title">
                    <FadeInSection>
                        <Cards />
                    </FadeInSection>
                </div>
                <div className="footer">
                    <Social />
                </div>
            </div>
        )
    }
}

export default work;