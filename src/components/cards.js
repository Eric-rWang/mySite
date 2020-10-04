import React from 'react';
import { Button } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import food from './pictures/burger.jpg';
import code from './pictures/coding.jpg';
import picture from './pictures/picture.jpg';

export default function Cards() {
    return (
        <div className="cards">
            <div className="card">
                <div className="overflow">
                    <img src={ food } alt="foodImg" className="cardImg"/>
                </div>
                <div className="cardBodyText">
                    <h4 className="cardTitle">Endless Food</h4>
                    <p className="cardInfo">
                        In 2018 I embarked on a journey to eat at the best restaurants here in Austin. 
                        I've been exploring many unique restaurants downtown Austin near UT campus and have 
                        compiled a list of my go to spots. Follow me as I eat my way through Austin!
                    </p>
                    <Button className="buttoncard">Foodie</Button>{' '}
                </div>
            </div>
            <div className="card">
                <div className="overflow">
                    <img src={ code } alt="CodingImg" className="cardImg"/>
                </div>
                <div className="cardBodyText">
                    <h4 className="cardTitle">Lines of Code</h4>
                    <p className="cardInfo">
                        I started coding in High School first learning Java. Since my introduction into 
                        coding I have learned Python and C++ in College and JavaScript, Html, and CSS 
                        alone in my free time. Follow my GitHub to see some of the projects I've done!
                    </p>
                    <Button className="buttoncard">Coding</Button>{' '}
                </div>
            </div>
            <div className="card">
                <div className="overflow">
                    <img src={ picture } alt="PassionImg" className="cardImg"/>
                </div>
                <div className="cardBodyText">
                    <h4 className="cardTitle">Behind the Lens</h4>
                    <p className="cardInfo">
                        I picked up photography/film-making after getting my hands on my own Sony RX10 IV.
                        Watching cinematics on youtube inspired me to start making films and take photos 
                        to capture special moments throughout my life. View my work here!
                    </p>
                    <Button className="buttoncard">Explore</Button>{' '}
                </div>
            </div>
        </div>
    );
}