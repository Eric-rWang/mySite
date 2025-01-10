import React, { Component } from 'react';
import Social from './social';
import FadeIn from 'react-fade-in';
import backgroundVideo from "./pictures/fooooood.mp4";


import nongs from "./pictures/food/nongs.jpg";
import phoor from "./pictures/food/phooregon.jpg";
import eem from "./pictures/food/eem.jpg";
import loro from "./pictures/food/loro.jpg";
import kochi from "./pictures/food/kochi.jpg";
import semma from "./pictures/food/semma.jpg";
import phateatery from "./pictures/food/phateatery.jpg";
import lee from "./pictures/food/lee.jpg";
import bluebird from "./pictures/food/bluebird.jpg";

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

const YelpReview = ({ place, review, image }) => (
    <div className="reviewContainer">
        <div className="reviewImage">
            <img src={image} alt={place} className="reviewImg" />
        </div>
        <div className="reviewContent">
            <h3>{place}</h3>
            <p>{review}</p>
        </div>
    </div>
);

class Food extends Component {
    render() {
        const reviews = [
            {
                place: "Nong's Khao Man Gai",
                review: "The OG chicken and rice with extra sauce is a must-try—bold, flavorful, and satisfying. The chicken is juicy, the soup comforting, and the dish feels perfectly balanced. The peanut chicken is good, but the original is unbeatable. Great vibes and a thoughtful self-service tea station complete the experience.",
                image: nongs
            },
            {
                place: "Pho Oregon Restaurant",
                review: "The special pho combo was fantastic! The broth was clean and hearty, packed with flavor and generous portions of meat. It’s the perfect comfort food for a cold day and truly highlights the quality of the ingredients.",
                image: phoor
            },
            {
                place: "Eem",
                review: "The lamb curry was the star with its smoky BBQ-Thai flavor. The fried chicken was crispy and juicy, though I wanted more seasoning punch. The fried rice was decent, but the curries shine here. Quick service, great decor, and a memorable dining experience.",
                image: eem
            },
            {
                place: "Loro Asian Smokehouse & Bar",
                review: "I keep coming back to Loro—it’s that good! The chicken sandwich during happy hour is my go-to, paired with the amazing corn fritters. The zen-like atmosphere makes it even better. Everything on the menu is flavorful and worth trying.",
                image: loro
            },
            {
                place: "Kochi",
                review: "This meal was incredible! The Korean dishes were elevated to perfection, with each course flowing seamlessly into the next. The service was exceptional, and the open kitchen added a special touch. Bonus: extra black truffle! A truly amazing dining experience.",
                image: kochi
            },
            {
                place: "Semma",
                review: "Semma offers complex Indian flavors with tender meats and cooling sauces. The bartenders were fantastic with their recommendations. It’s a tough reservation to get, but if you can, it’s worth it for the elegance and finesse.",
                image: semma
            },
            {
                place: "Phat Eatery",
                review: "The roti was perfectly flaky and buttery, paired with a hearty curry that’s a must-try. The CKT was authentic and flavorful, approved by my Cantonese co-foodie. The braised beef curry was delicate yet packed with flavor—save some roti for dipping! Great service and fast food delivery.",
                image: phateatery
            },
            {
                place: "Lee",
                review: "From watching Mr. Lee cooking on YouTube to dining at his restaurant, it’s been an amazing experience. The Singaporean Slaw is a must-try, but the Shrimp Cheung Fun stole the show with its authentic taste and modern twist. The sweet soy sauce and spicy chilis brought it to a whole new level. Every dish was creative and well executed, and the service was impeccable. A wonderful experience all around!",
                image: lee
            },
            {
                place: "Bluebird",
                review: "We ate here three times during our stay in Banff—it’s that good! The prime roast and steaks are perfectly cooked with woody, beefy flavors, while the breakfast options are fantastic. The dishes are well balanced, with tangy vinaigrettes cutting through the rich mains. Great atmosphere, delicious food, and breathtaking scenery make this spot unforgettable. I’ll be back for sure!",
                image: bluebird
            }
        ];        
        
        

        return (
            <div className="aboutPage">
                {/* Video Background */}
                <div className="imgPic">
                    <FadeIn>
                        <div className="videoBackground2">
                            <video autoPlay loop muted playsInline className="backgroundVideo">
                                <source src={backgroundVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="welcomeText">Man Do I Love Food</div>
                        </div>
                    </FadeIn>
                </div>
                <br /><br /><br /><br />
                <div className="downArrow">
                    <img className="downArrowPic" src={downarrow} style={{ height: 50, width: 50 }} />
                </div>
                <br />
                {/* Google Maps Section */}
                <div className="title">
                    <FadeInSection>
                        <h2 className="pagetitle">Places I've Eaten</h2>
                        <div className="mapContainer">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14744.333225619712!2d-97.81776095!3d30.443266400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1733205593825!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Food Map"
                            ></iframe>
                        </div>
                    </FadeInSection>
                </div>
                <br />
                {/* Yelp Reviews Section */}
                <div className="reviewsSection">
                    <h2 className="pagetitle">My Food Blog</h2>
                    <div className="reviewsContainer">
                        {reviews.map((review, index) => (
                            <YelpReview
                                key={index}
                                place={review.place}
                                review={review.review}
                                image={review.image}
                            />
                        ))}
                    </div>
                </div>
                <div className="footer">
                    <Social />
                </div>
            </div>
        );
    }
}

export default Food;
