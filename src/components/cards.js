import React from 'react';
import { Parallax } from 'react-parallax';
import food from './pictures/burger.jpg';
import code from './pictures/coding.jpg';
import picture from './pictures/picture.jpg';


const Cards = props =>{
    return (
        <div className="cards">
            <div className="card">
                <div className="overflow">
                    <img src={ food } alt="foodImg" className="cardImg"/>
                </div>
                <div className="cardBodyText">
                    <h4 className="cardTitle">Endless Food</h4>
                    <p className="cardInfo">
                        Living in Austin has be a blessing. There is so much diversity in the types
                        of food you can find here whether it be Tex-Mex all the way to amazing Asian
                        cuisines. 
                    </p>
                    <a href="#" className="btn">Food Blog</a>
                </div>
            </div>
            <div className="card">
                <div className="overflow">
                    <img src={ code } alt="CodingImg" className="cardImg"/>
                </div>
                <div className="cardBodyText">
                    <h4 className="cardTitle">Lines of Code</h4>
                    <p className="cardInfo">
                        
                    </p>
                    <a href="#" className="btn">My Code</a>
                </div>
            </div>
            <div className="card">
                <div className="overflow">
                    <img src={ picture } alt="PassionImg" className="cardImg"/>
                </div>
                <div className="cardBodyText">
                    <h4 className="cardTitle">Behind the Lens</h4>
                    <p className="cardInfo">
                         
                    </p>
                    <a href="#" className="btn">Explore</a>
                </div>
            </div>
        </div>
    );
}

export default Cards;