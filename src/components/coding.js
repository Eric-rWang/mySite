import React, { Component } from 'react';
import Social from './social';
import FadeIn from 'react-fade-in';
import backgroundVideo from "./pictures/typing.mp4";
import downarrow from "./pictures/downarrow.png";
import project1Image from "./pictures/projects/project1.jpg";
import project2Image from "./pictures/projects/project2.jpg";
import project3Image from "./pictures/projects/project3.jpg";

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

const ProjectHighlight = ({ title, description, image, link }) => (
    <div className="projectHighlight">
        <div className="projectImage">
            <img src={image} alt={title} />
        </div>
        <div className="projectContent">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="projectLink">
                View Project
            </a>
        </div>
    </div>
);

class Coding extends Component {
    render() {
        const projects = [
            {
                title: "The Brooklyn-Project",
                description: "Designed and validated an RC plane wing using OpenFOAM and wind tunnel testing. Implemented ROS for remote and autonomous flight control, enabling real-time adjustments. Developed a vision system with Raspberry Pi and OpenCV for target detection, optimizing drop zone targeting using a modified Dijkstra algorithm.",
                image: project1Image,
                link: "https://github.com/brooklyn-project"
            },
            {
                title: "Fully Vaccinated People In The United States",
                description: "Developed a web app utilizing data from 'Our World In Data' to track the number of fully vaccinated people in the United States since January 14, 2021. The app highlights vaccination trends and aims to inform users about the importance of maintaining vaccination momentum to prevent future outbreaks.",
                image: project2Image,
                link: "https://github.com/Eric-rWang/covid-vaccine"
            },
            {
                title: "Are You OD Flaky?",
                description: "Built a tool using CodeBERT to detect and fix order-dependent flaky tests in Python code. This project leverages machine learning to identify flaky tests, suggest fixes, and improve the stability of test suites, ensuring more reliable testing processes. Using pre-trained and fine-tuned LLMS for automatic OD flaky test detection and repair.",
                image: project3Image,
                link: "https://github.com/Eric-rWang/are_you_OD_Flaky"
            }
        ];
        

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
                            <div className="welcomeText">Let's Code</div>
                        </div>
                    </FadeIn>
                </div>
                <br /><br /><br /><br />
                <div className="downArrow">
                    <img className="downArrowPic" src={downarrow} style={{ height: 50, width: 50 }} />
                </div>
                <br />
                {/* Highlighted Projects Section */}
                <div className="title">
                    <FadeInSection>
                        <h2 className="pagetitle">Highlighted Projects</h2>
                        <div className="projectsContainer">
                            {projects.map((project, index) => (
                                <ProjectHighlight
                                    key={index}
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    link={project.link}
                                />
                            ))}
                        </div>
                    </FadeInSection>
                </div>
                <div className="footer">
                    <Social />
                </div>
            </div>
        );
    }
}

export default Coding;
