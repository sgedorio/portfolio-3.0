import React from 'react';
import spelunk from "../img/spelunk.png";
// import Mockup from '../components/Mockup';
// import test from '../img/test.png';
// import vidTest from '../img/vidTest.mp4'


export default function About() {
    return (
        <div className="about">
            <div className="row row-1">
                <div className="left">
                    <div className="img-label-container">
                        <img className="round-img" src={spelunk} alt="Sean spelunking" />
                        <p className="img-label last-p--0">Spelunking in Missouri, 2023</p>
                    </div>
                </div>
                <div className="right">
                    <h2>I’m Sean, an interface designer and developer. I have a knack for solving problems & elevating a product's visual and interactive details.</h2>
                    <div className="section">
                        <div className="title-divider">
                            <h1>Background</h1>
                            <div className="divider"></div>
                        </div>
                        <div className="section-info">
                            <div className="section-info--item">
                                <h3>Education</h3>
                                <div className="section-info--item--content">
                                    <p className="first-p--0">I graduated with a <span className="bold-reg">B.S. in Computer Science</span> from <span className="bold-reg">Georgia Tech</span> with a concentration in Human-Computer Interaction.</p>
                                    <p>Working with engineers and streamlining the design-to-dev handoff is my specialty.</p>
                                    <p>In another world, I would probably be working at a chemical plant or doing research on renewable energy. I completed 3 years of a chemical engineering degree before discovering human-computer interaction and UX design. These fields fuse my love for visual beauty, science, and complex systems.</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-info">
                            <div className="section-info--item">
                                <h3>Design origins</h3>
                                <div className="section-info--item--content">
                                    <p className="first-p--0">My passion for design technically started when I was 8 years old.</p>
                                    <p>After immigrating to the States from <a href="https://www.google.com/maps/@6.3789507,124.7512806,3a,75y,209.1h,93.01t/data=!3m6!1e1!3m4!1sK0zNRLfVIHck0ecwh_oT2A!2e0!7i16384!8i8192?entry=ttu">South Cotabato</a>, I practiced English by immersing myself in online text-based roleplaying forums surrounding my favorite childhood books and anime shows. These forums were heavy on <a href="https://www.reddit.com/r/nostalgia/comments/tend5n/forum_signatures/">“siggies”</a>—graphics appended at the bottom of each user’s post.</p>
                                    <p>I befriended amateur graphic designers through niche MSN Messenger circles who taught me how to bootleg Adobe Photoshop CS2. By age 10, I ended up running prolific siggy shops and publishing Photoshop tutorials of my own.</p>
                                </div>
                            </div>
                        </div>

                        <div className="section-info">
                            <div className="section-info--item">
                                <h3>Hobbies</h3>
                                <div className="section-info--item--content">
                                    <p className="first-p--0">In my free time, I like to garden, watch films, go to shows, and try new recipes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}