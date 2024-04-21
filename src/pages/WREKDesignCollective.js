import React from 'react';
import cover from "../img/wdc/cover.png";
import collegeRadio1 from "../img/wdc/collegeRadio1.png"
import collegeRadio2 from "../img/wdc/collegeRadio2.png"
import specialty1 from "../img/wdc/specialty1.png"
import specialty2 from "../img/wdc/specialty2.png"
import specialty3 from "../img/wdc/specialty3.png"
import specialty4 from "../img/wdc/specialty4.png"
import specialty5 from "../img/wdc/specialty5.png"
import specialty6 from "../img/wdc/specialty6.png"
import specialty7 from "../img/wdc/specialty7.png"
import specialty8 from "../img/wdc/specialty8.png"
import wrektacular2019vid from "../img/wdc/wrektacular2019vid.mp4"
import wrektacular2019dance from "../img/wdc/wrektacular2019_dance.mp4"
import wrektacular2019Green from "../img/wdc/wrektacular2019_green.png"
import wrektacular2019Blue from "../img/wdc/wrektacular2019_blue.png"
import wrektacular2019branding1 from "../img/wdc/wrektacular2019_branding1.png"
import wrektacular2019branding2 from "../img/wdc/wrektacular2019_branding2.png"
import wrektacular2019branding3 from "../img/wdc/wrektacular2019_branding3.png"
import wrektacular2019branding4 from "../img/wdc/wrektacular2019_branding4.png"
import wrektacular2019shirts from "../img/wdc/wrektacular2019_shirts.jpeg"
import pip1 from "../img/wdc/pip1.jpeg"
import pip2 from "../img/wdc/pip2.jpeg"
import pip3 from "../img/wdc/pip3.jpeg"
import pip4 from "../img/wdc/pip4.png"
import fifty1 from "../img/wdc/fifty1.jpeg"
import fifty2 from "../img/wdc/fifty2.jpeg"
import fifty3 from "../img/wdc/fifty3.jpeg"
import fifty4 from "../img/wdc/fifty4.jpeg"
import fifty5 from "../img/wdc/fifty5.png"
import fifty6 from "../img/wdc/fifty6.png"
import fifty7 from "../img/wdc/fifty7.png"
import fifty8 from "../img/wdc/fifty8.png"
import fifty9 from "../img/wdc/fifty9.png"
// import sp1 from "../img/wdc/screenprint1.png"
import sp2 from "../img/wdc/screenprint2.png"
import sp3 from "../img/wdc/screenprint3.png"
import sp4 from "../img/wdc/screenprint4.png"
import sp5 from "../img/wdc/screenprint5.png"
import misc1 from "../img/tshirtfall2018-transparent.png"
import misc2 from "../img/wdc/misc2.mp4"
import misc3 from "../img/wdc/misc3.png"
import misc4 from "../img/wdc/misc4.jpeg"

export default function WREKDesignCollective() {

    return (
        <div className="wdc case-study">
            <div className="row row-1">
                <div className="left">
                    {/* <h1>WREK Design Collective</h1> */}
                    {/* <h2>Members meet on a weekly basis to teach other new skills & share unconventional yet refreshing inspirations.</h2> */}
                    {/* <h2>An eclectic space for hands-on design learning and experimentation</h2> */}
                    <h2>WREK Design Collective is a space I created inside WREK Atlanta 91.1FM as the station's Publicity Director & Design Leader to experiment on print and design.<br/><br/>From self-taught screen printing to zine-making to creative coding, meshing raw DIY ethics with modern software to create wacky works was our goal.</h2>
                </div>
                <div className="right">
                    <img className="round-img" src={cover} alt="cover" />
                    <div className="title-divider">
                            <h1>Building a creative, eclectic space for hands-on design learning and experimentation</h1>
                            <div className="divider"></div>
                    </div>
                    <div className="summary">
                        {/* <div className="overview">
                            <h3>Overview</h3>
                            <p>WREK Design Collective is a space I created inside WREK Atlanta 91.1FM as the station's Publicity Director & Design Leader to experiment on print and design. From self-taught screen printing to zine-making to creative coding, meshing raw DIY ethics with modern software to create wacky works was our goal.</p>
                        </div> */}
                        <div className="contributions">
                            <h3>Contributions</h3>
                            <div className="copy">
                                <p>Aside from the group screen printing activity I facilitated and the short clip of the coding workshop run by another member, I designed every media asset shown on this page.</p>
                            </div>
                        </div>
                        <div className="tools">
                            <h3>Tools</h3>
                            <p>Adobe Suite</p>
                        </div>
                        <div className="timeline">
                            <h3>Timeline</h3>
                            <p>2018 - 2019</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row row-2">
                <div className="left">
                    <h2>College Radio Day</h2>
                    <p className="first-p">Posters I made for the 2018 College Radio Day. Printed out for our annual tabling event. Collective members were tasked with creating at least one promotional material for the event.</p>
                </div>
                <div className="right">
                    <img src={collegeRadio1} alt="collegeRadio1" />
                    <img src={collegeRadio2} alt="collegeRadio2" />
                </div>
            </div>

            <div className="row row-3">
                <div className="left">
                    <h2>Specialty Show Promos</h2>
                    <p className="first-p">Instagram promos I made for some of our station's staff picks & genre-specific shows. Shows were put on an advertising queue and collective members were tasked with making promotional content for assigned shows.</p>
                </div>
                <div className="right">
                    <div className="column-grid--2">
                        <img src={specialty1} alt="specialty1" />
                        <img src={specialty2} alt="specialty2" />
                        <img src={specialty3} alt="specialty3" />
                        <img src={specialty4} alt="specialty4" />
                        <img src={specialty5} alt="specialty5" />
                        <img src={specialty6} alt="specialty6" />
                        <img src={specialty7} alt="specialty7" />
                        <img src={specialty8} alt="specialty8" />
                    </div>
                </div>
            </div>
            <div className="row row-4">
                <div className="left">
                    <h2>WREKtacular 2019</h2>
                    <p className="first-p">Promotional posters, videos, and screen printed t-shirts I created for our annual station-run concert. Printed out and plastered across several Atlanta shops & venues.</p>
                    <p>T-shirts provided by our partnership with local Atlanta thrift store <a href="https://www.lnfy.org/">Lost-n-Found Youth</a> who ran a pop-up during our event.</p>
                </div>
                <div className="right">
                    <video src={wrektacular2019vid} autoPlay loop muted playsinline/>
                    <a href="https://www.youtube.com/watch?v=HHom-IMcxvw"><video src={wrektacular2019dance} autoPlay loop muted playsinline/></a>
                    <img src={wrektacular2019Green} alt="wrektacular2019-green" />
                    <img src={wrektacular2019Blue} alt="wrektacular2019-blue" />
                    <div className="column-grid--2">
                        <img src={wrektacular2019branding1} alt="wrektacular2019-branding1" />
                        <img src={wrektacular2019branding2} alt="wrektacular2019-branding2" />
                        <img src={wrektacular2019branding3} alt="wrektacular2019-branding3" />
                        <img src={wrektacular2019branding4} alt="wrektacular2019-branding4" />
                    </div>
                    <img src={wrektacular2019shirts} alt="wrektacular2019-shirts" />
                </div>
            </div>
            <div className="row row-5">
                <div className="left">
                    <h2>Power in Print Zine</h2>
                    <p className="first-p">Cover & 2 spreads I made for a 30-page zine project I headed and organized. 3rd spread curated by my friend Yasmine. Each collective member contributed 1 spread to the zine. We printed 150+ copies and binded each copy by hand. The cover features a pair of jeans we screen printed WREK logos onto.</p>
                    <p>Passed out for free at our annual station-run concert.</p>
                </div>
                <div className="right">
                    <img src={pip1} alt="pip1" />
                    <img src={pip2} alt="pip2" />
                    <img src={pip3} alt="pip3" />
                    <img src={pip4} alt="pip4" />
                </div>
            </div>
            <div className="row row-6">
                <div className="left">
                    <h2>50th Anniversary Zine & Art Exhibit</h2>
                    <p className="first-p">4 spreads for a 20-page zine celebrating the station's 50th anniversary. All spreads done by me. All copies binded by hand.</p> 
                    <p>Passed out for free at our 50th anniversary 2-day music festival.</p> 
                    <p>In addition, I curated & installed an art exhibit for the festival celebrating some of my favorite artists from the local Atlanta community.</p>
                </div>
                <div className="right">
                    <img src={fifty1} alt="fifty1" />
                    <img src={fifty2} alt="fifty2" />
                    <img src={fifty3} alt="fifty3" />
                    <img src={fifty4} alt="fifty4" />
                    <img src={fifty5} alt="fifty5" />
                    <div className="column-grid--2">
                        <img src={fifty6} alt="fifty6" />
                        <img src={fifty7} alt="fifty7" />
                        <img src={fifty8} alt="fifty8" />
                        <img src={fifty9} alt="fifty9" />
                    </div>
                </div>
            </div>
            <div className="row row-7">
                <div className="left">
                    <h2>Screen Printing Workshops</h2>
                    <p className="first-p">I headed and organized screenprinting workshops/socials for collective members. We had no prior experience & self-taught ourselves through YouTube tutorials.</p>
                </div>
                <div className="right">
                    <img src={sp2} alt="sp2" />
                    <img src={sp3} alt="sp3" />
                    <img src={sp4} alt="sp4" />
                    <img src={sp5} alt="sp5" />
                </div>
            </div>
            <div className="row row-8">
                <div className="left">
                    <h2>Miscellaneous</h2>
                    <p className="first-p">Random t-shirt designs, show-and-tell sessions, show promos</p>
                </div>
                <div className="right">
                    <img src={misc1} alt="misc1" />
                    <video src={misc2} autoPlay loop muted playsinline/>
                    <img src={misc3} alt="misc3" />
                    <img src={misc4} alt="misc4" />
                </div>
            </div>

        </div>
    )
}