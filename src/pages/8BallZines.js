import React from 'react';
import vCollage1 from '../img/collage1.png'
import vCollage2 from '../img/collage2.png'
import vCollage3 from '../img/collage3.png'
import chinatown from '../img/chinatown.png'

export default function EightBallZines() {

    return (
        <div className="eight-ball-zines case-study">
            <div className="row row-1">
                <div className="left">
                    <h1>8 Ball Zines</h1>
                </div>
                <div className="right">
                <div className="summary">
                        <div className="overview">
                            <h3>Overview</h3>
                            <p>A collection of collages I created for 8-Ball zine fairs throughout 2023, featuring volcanoes from the Philippines and random saunters around Manhattan's Chinatown.</p>
                        </div>
                        <div className="tools">
                            <h3>Tools</h3>
                            <p>Adobe Suite, Python</p>
                        </div>
                        <div className="timeline">
                            <h3>Timeline</h3>
                            <p>Spring 2023</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row row-2">
                <div className="left">
                    <h2>Kolahe ng bulkan</h2>
                    <p className="first-p last-p">Featuring farm life and volcanos throughout the Philippines, including Mt. Pinatubo, Mayon, Taal, Kanlaon. Printed out in a zine project with friends, with a playful theme focusing on the Great Flood, postdiluvianism, chaos, creation, renewal.</p>
                </div>
            </div>

            <div className="row-3">
                <div className="img-label-container">
                    <img src={vCollage1} alt="seans-volcano-koleksyon" loading="lazy"/>
                    <p className="img-label">Sean's Volcano Koleksyon</p>
                </div>
                <div className="img-label-container">
                    <img src={vCollage2} alt="harvesting-my-cloud-of-dust" loading="lazy"/>
                    <p className="img-label">Harvesting my cloud of dust</p>
                </div>
                <div className="img-label-container">
                    <img src={vCollage3} alt="touch-the-mountains-so-that-they-smoke" loading="lazy"/>
                    <p className="img-label">Touch the Mountains so that they smoke</p>
                </div>
            </div>

            <div className="row row-4">
                <div className="left">
                    <h2>Wu's Wonton King</h2>
                    <p className="first-p last-p">A spread I did for a zine featuring 8-Ball's favorite spots in Chinatown. I picked one of my favorite Chinese restaurants, Wu's Wonton King. Including pictures from my birthday night with close friends, the receipt from that night, and the 2 fish from their menu.</p>
                </div>
            </div>

            <div className="row-5">
                <div className="img-label-container">
                    <img src={chinatown} alt="chinatown" loading="lazy"/>
                    <p className="img-label">Sean's bday bash in Chinatown</p>
                </div>
            </div>
            



            {/* <img src={vCollage1} alt="volcano-collage-1" />
            <img src={vCollage2} alt="volcano-collage-2" />
            <img src={vCollage3} alt="volcano-collage-3" />
            <img src={chinatown} alt="chinatown" /> */}
        </div>
    )
}