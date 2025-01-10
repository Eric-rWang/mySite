import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import food from './pictures/burger.jpg';
import code from './pictures/coding.jpg';
import picture from './pictures/photography.JPG';

export default function Cards() {
    const history = useHistory();

    return (
        <div className="cards">
            <div className="card">
                <div className="overflow">
                    <img src={food} alt="foodImg" className="cardImg" />
                </div>
                <div className="cardBodyText">
                    <h4 className="cardTitle">Endless Food</h4>
                    <p className="cardInfo">
                        Since 2018, I’ve been eating my way through Austin, proudly earning Yelp Elite status—which basically
                        means I’m really good at food. Follow along for food updates, cooking adventures, and all the latest
                        on Austin’s tastiest spots!
                    </p>
                    <Button className="buttoncard" onClick={() => history.push('/food')}>Foodie</Button>
                </div>
            </div>
            <div className="card">
                <div className="overflow">
                    <img src={code} alt="CodingImg" className="cardImg" />
                </div>
                <div className="cardBodyText">
                    <h4 className="cardTitle">Lines of Code</h4>
                    <p className="cardInfo">
                        I started coding in high school with Java (the gateway bug). Since then, I’ve picked up Python, C++,
                        and taught myself JavaScript, HTML, and CSS for fun. Check out my GitHub for projects—and maybe some
                        working code!
                    </p>
                    <Button className="buttoncard" onClick={() => history.push('/coding')}>Coding</Button>
                </div>
            </div>
            <div className="card">
                <div className="overflow">
                    <img src={picture} alt="PassionImg" className="cardImg" />
                </div>
                <div className="cardBodyText">
                    <h4 className="cardTitle">Behind the Lens</h4>
                    <p className="cardInfo">
                        Getting my hands on a Sony RX10 IV sparked my love for photography and filmmaking. I enjoy capturing
                        life’s adventures through photos and videos. Check out my work and join me in reliving these special
                        moments!
                    </p>
                    <Button className="buttoncard" onClick={() => history.push('/photography')}>Explore</Button>
                </div>
            </div>
        </div>
    );
}
