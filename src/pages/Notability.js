import React, { useState, useEffect } from 'react';
import { isSafari } from 'react-device-detect';
import IPad from '../components/IPad';
import coverMock1 from '../img/notability/row0_1.png';
import coverMock2 from '../img/notability/row0_2.png';
import coverMock3 from '../img/notability/row0_3.png';
import coverTexture from "../img/notability/row0_texture.png";
import notabilityUI from "../img/notability/notabilityUI.png";
import designProcess from "../img/notability/designProcess.png";
import usabilityNotes from "../img/notability/usabilityNotes.png"
import competitorAnalysis from "../img/notability/competitorAnalysis.png"
import discord from "../img/notability/discord.png"
import yt1 from "../img/notability/youtube1.png"
import yt2 from "../img/notability/youtube2.png"
import yt3 from "../img/notability/youtube3.png"
import yt4 from "../img/notability/youtube4.png"
import customerJourney from "../img/notability/customerjourney.png"
import challengeStatement from "../img/notability/challengeStatement.png"
import exhaustiveSolutions from "../img/notability/exhaustiveSolutions.png"
import impactEffortMatrix from "../img/notability/impactEffortMatrix.png"
import prototype1 from "../img/notability/notabilityProto1.mp4"
import prototype2 from "../img/notability/notabilityProto2.mp4"
import prototype3 from "../img/notability2-6.mp4"
import featureExp1 from "../img/notability/featureExp1.png"
import featureExp2 from "../img/notability/featureExp2.png"
import featureExp3 from "../img/notability/featureExp3.png"

export default function Notability() {
    const [imgLoaded, setImgsLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading delay
        const timeout = setTimeout(() => {
          setImgsLoaded(true);
        }, 600);
    
        // Clear the timeout to avoid memory leaks
        return () => clearTimeout(timeout);
      }, []);

    return (
        <div className={isSafari ? 'notability case-study safari' : 'notability case-study'}>
            <div className="row-0--container">
                <div className={imgLoaded ? "row-0 row-0--loaded" : "row-0"}>
                    <img className="three" src={coverMock3} alt="cover3" />
                    <img className="two" src={coverMock2} alt="cover2" />
                    <img className="one" src={coverMock1} alt="cover1" />
                </div>
                <img className={imgLoaded ? "texture--loaded texture" : "texture"} src={coverTexture} alt="texture" />
            </div>

            <div className="row row-0-text">
                <div className="left">
                    <h2>Successful students using Notability may spend hours cross-referencing notes with lecture recordings to ensure they’ve covered all learning material.<br/><br/>Gamified features and LLM solutions can establish note reviews as a fun routine and cut time spent identifying discrepancies.</h2>

                </div>
                <div className="right">
                    <div className="title-divider">
                        <h1>Unleashing Notability’s power to save students time & maximize recall when reviewing notes</h1>
                        <div className="divider"></div>
                    </div>
                    <div className="summary">
                        <div className="contributions">
                            <h3>Contributions</h3>
                            <div className="copy">
                                <p>This was a design challenge assigned to me by Notability’s Director of Design. I conducted the research and designed all the solutions and prototypes shown on this page.</p>
                            </div>
                        </div>
                        <div className="tools">
                            <h3>Tools</h3>
                            <p>Figma<br/>FigJam</p>
                        </div>
                        <div className="timeline">
                            <h3>Timeline</h3>
                            <p>February 2024</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row row-2">
                <div className="left">
                    <h2><a href="https://notability.com/">Notability</a> is the best-selling note-taking app in the App Store.</h2>
                    <p className="first-p">Founded in 2010, Notability’s user base has amassed over 5 million users in 53 countries in just the K-12 space alone, with additional usage by millions of college students worldwide.</p>
                    <p>Key to its success are core features such as lifelike pencil and ink marking tools, audio capture capabilities, handwriting recognition, and seamless audio transcription.</p>
                    <p>Notability’s main competitor is <a href="https://www.goodnotes.com/">GoodNotes</a> in the note-taking software space.</p>
                    <p>Since both products have been rapidly evolving and improving their respective functionalities and user experience in recent years, it’s crucial to design new innovative features that address existing pain points and create unique differentiation.</p>
                </div>
                <div className="right">
                    <img className="round-img" src={notabilityUI} alt="notabilityUI" loading="eager"/>
                </div>
            </div>

            <div className="row row-3">
                <div className="left">
                    <h2>Design Process</h2>
                </div>
                <div className="right">
                    <p className="first-p--0">Great Product teams dedicate a lot of time focusing on product discovery instead of just going straight to solutions. I spent a lot of time understanding how Notability works, pinpointing its unique features, and unraveling the pain points users might face while using the product.</p>
                    <p className="last-p--48">Identifying potential problem spaces and questioning why solving these specific problems are relevant to user and business needs ensures that you’re building the right thing and minimizes design debt.</p>
                </div>
            </div>

            <div className="img-label-container row-4">
                <img className="round-img" src={designProcess} alt="design-process" loading="eager"/>
            </div>
 
            <div className="row row-5">
                <div className="left">
                    <h2>Understanding the product’s main value proposition, core features, and target audience</h2>
                    <p className="first-p">An overview of Notability’s website, blog, and App Store description quickly uncovered key points in the value it delivers to its users:</p>
                    <ul>
                        <li>Product slogans such as “Unleash your ideas,  your way” & “A simple, powerful toolset for every thought” evokes the idea of an incredibly flexible tool that can be used by a wide range of users</li>
                        <li>User testimonies range from educational to creative fields</li>
                        <li>Paid version of the product (Notability Plus) offers a lot more useful features e.g. audio transcription & math conversion</li>
                    </ul>
                    <p className="last-p">I also took time immersing myself within Notability environment and figuring out how all the features work from the perspective of a new user, documenting what I found intuitive and what I found difficult to understand.</p>
                    <div className="img-label-container">
                        <img className="round-img" src={usabilityNotes} alt="usability-notes" loading="eager"/>
                        <p className="img-label">A screenshot of some of my initial usability impressions of the app, documented inside Notability itself.</p>
                    </div>
                </div>

                <div className="right">
                    <h2>Analyzing what makes Notability unique & where it falls short compared to its competitors</h2>
                    <p className="first-p last-p">A quick analysis was conducted to identify feature gaps in Notability and its main competitor, while also gathering inspiration for potential features that could be integrated or enhanced within Notability itself.</p>
                    <div className="img-label-container">
                        <img className="round-img" src={competitorAnalysis} alt="competitor-analysis" loading="eager"/>
                        <p className="img-label">Feature analysis between Notability and its main competitor GoodNotes. $ indicates that the feature is only avaialable through a paid subscription of the app.</p>
                    </div>
                </div>
            </div>

            <div className="row row-6">
                <div className="left">
                    <h2>Examining user feedback through App Store reviews</h2>
                    <p className="first-p">Although App Store reviews don’t often paint the full picture and can be biased towards users who have extremely positive or negative experiences with the product, it’s a low-cost method that offers potential pain point insights from a large sample size (40K+ reviews in Notability’s case).</p>
                    <p>Most of the problems aired out from the previous 6 months focused mainly on the app’s recent redesign which came with bugs on the engineering end and a few users struggling to adapt to the notable change.</p>
                    <p>I was still able to collect some user problems that had potential design opportunities, which I transformed into “How might we” challenge statements:</p>
                    <ul>
                        <li className="bold-reg">How might we enhance organization and visual representation (e.g. tables, grids) within Notability?</li>
                        <li className="bold-reg first-p--16">How might we evolve Notability's export functionalities to better serve diverse user needs and preferences?</li>
                    </ul>
                </div>

                <div className="right">
                    <h2>Assessing users’ most sought-out features through Notability’s community Discord server</h2>
                    <p className="first-p">I sourced more problems Notability users were addressing through the #feature-requests channel in their Discord, which allowed users to submit feature suggestions that could streamline their existing workflow. Other members in the server can upvote the request and popularly voted submissions get sent over to Notability’s Product team.</p>
                    <p>I prioritized the top 10 latest features with more than 10 upvotes, opting for this approach somewhat arbitrarily to highlight the most recent and sought-after features.</p>
                    <p>Some challenge statements that were created from these findings were:</p>
                    <ul>
                        <li className="bold-reg">How might we improve how certain elements within a Note can be grouped and organized together?</li>
                        <li className="bold-reg first-p--16 last-p">How might we improve how Notability members collaborate with each other to foster better learning?</li>
                    </ul>
                    <div className="img-label-container">
                        <img src={discord} alt="discord" loading="eager"/>
                        <p className="img-label">A few examples of feature suggestions submitted by users in the Discord server.</p>
                    </div>
                </div>
            </div>

            <div className="row row-7">
                <div className="left">
                    <h2>Exploring note-taking strategies of high-performing students who use Notability</h2>
                </div>
                <div className="right">
                    <p className="first-p--0">In the ideal setting, I would have conducted actual ethnographic observations on how Notability users took notes using the app. This would provide valuable, real-time insight without possible self-reporting bias or memory recall bias.</p>
                    <p>Due to the constraints in time, I decided instead to study several YouTube videos of college students explaining their note-taking process through Notability.</p>
                    <p>After laying out their processes through multiple user flow diagrams which I condensed into a single journey map, I uncovered 3 main patterns:</p>
                    <ol>
                        <li>Notes are continuously iterated and revised to improve memory & recall</li>
                        <li className="first-p--16">Audio recordings of lectures ensures no points are missed for the final iteration of notes</li>
                        <li className="first-p--16">Differing visual styles / indicators are used (e.g. different color ink) to represent notes students missed on the first iteration of their lecture notes</li>
                    </ol>
                    <p>The main problem I noticed was that students would often go through their Notability recording at least 2x to make sure they didn’t miss any important points, which takes up a lot of their time. I framed the challenge statement around this issue as:</p>
                    <p className="bold-reg last-p--48">How might we transform the notes review process to be less taxing?</p>
                </div>
            </div>

            <div className="row-8">
                <div className="youtube-container">
                    <img className="youtube-1" src={yt1} alt="youtube1" loading="eager"/>
                    <img className="youtube-2" src={yt2} alt="youtube2" loading="eager"/>
                    <img className="youtube-3" src={yt3} alt="youtube3" loading="eager"/>
                    <img className="youtube-4" src={yt4} alt="youtube4" loading="eager"/>
                </div>
                <div className="img-label-container">
                    <img className="round-img" src={customerJourney} alt="customer journey" loading="eager"/>
                    <p className="img-label">A user journey map for a high-performing college student persona, synthesized from insights shared by actual Notability users detailing their note-taking methods.</p>
                </div>
            </div>

            <div className="row row-9">
                <div className="left">
                    <h2>Converging towards a specific challenge statement</h2>
                </div>
                <div className="right">
                    <p className="first-p--0 last-p--48">While the Discord server and App Store reviews pointed to a few interesting challenge statements, completing the user journey map provided a clearer direction for possible solution opportunities. By pinpointing specific, contextual pain points in how students used the app, it narrows the scope and can foster a more defined ideation process.</p>
                </div>
            </div>

            <div className="img-label-container row-10">
                <img className="round-img" src={challengeStatement} alt="design-process" loading="eager"/>
            </div>

            <div className="row row-11">
                <div className="left"></div>
                <div className="right">
                    <h2>Exhaustively ideating solutions</h2>
                    <p className="first-p">I exhaustively listed down as many possible solutions I could think up of within Notability itself. I then tried to find common patterns and grouped all these different solutions in 4 main categories:</p>
                    <ol>
                        <li>Utilizing AI to quickly figure out discrepancies between notes and audio lectures</li>
                        <li className="first-p--16">Gamifying the process of reviewing notes to encourage iteration</li>
                        <li className="first-p--16">Enhancing in-app group collaboration to foster a social feeling of accountability and shared learning while reviewing notes</li>
                        <li className="first-p--16 last-p">Improving the organization of existing elements so certain notes can be accessed processed much faster while reviewing (e.g. tags)</li>
                    </ol>
                    <div className="img-label-container">
                        <img src={exhaustiveSolutions} alt="exhaustive-solutions" loading="eager" />
                        <p className="img-label">Some sample pages of what I call the “solution vomit” process, listing down any possible opportunity to alleviate this challenge regardless of constraints.</p>
                    </div>
                </div>
            </div>

            <div className="row row-12">
                <div className="left">
                    <h2>Feature prioritization through impact effort matrix</h2>
                    <p className="first-p">I quickly created an impact-effort matrix to contextualize the potential outcomes of these solutions in relation to each other.</p>
                    <p>I ended up designing a mix of solutions for #1 (AI tool) and #2 (gamification) to combat the note review process.</p>
                    <p>Although AI is quite a cliche solution, I believe it’s inevitable that most productivity tools will utilize it to significantly streamline workflows.</p>
                    <p>I also acknowledge that LLMs are still in an early developmental phase. For instance, comparing the nuances between an audio recording and lecture notes for a math class, filled with numerous nonverbal symbols and equations, poses challenges. However, I maintain optimism that the tool will evolve to address such complexities in due course.</p>
                    <p>If I were a risk-averse PM, I would probably have designed solutions for #4 considering several users have explicitly asked for a tag feature and that Notability’s main competitor already has this feature.</p>
                    <p>Instead, I opted to delve into solutions for #2. Given that note-taking apps typically don't integrate gamified features, I saw an opportunity to create a distinctive feature.</p>
                </div>
                <div className="right">
                    <div className="img-label-container">
                        <img className="round-img" src={impactEffortMatrix} alt="impact-effort-matrix" loading="eager" />
                        <p className="img-label">Impact-Effort Matrix of the 4 solution patterns that were conceptualized</p>
                    </div>
                </div>
            </div>

            <div className="row row-13">
                <div className="left">
                    <h2>Introducing gamification to the note-reviewing process to cultivate a positive habit of consistent review</h2>
                    <p className="first-p">Students now have the option to schedule note reviews once they finish taking notes after lecture ends.</p>
                    <p>They are sent notifications when this review is scheduled and a timer starts to encourage students to review the notes for the recommended amount of minutes that can maximize memory recall.</p>
                </div>
                <div className="right">
                    <div className="img-label-container">
                        <IPad className="last-p--48" videoScreen={prototype1} autoPlay={true} />
                    </div>
                </div>
            </div>

            <div className="img-label-container row-14">
                <img className="round-img" src={featureExp1} alt="feature-exp1" loading="eager" />
            </div>

            <div className="row row-15">
                <div className="left"></div>
                <div className="right">
                    <div className="img-label-container">
                        <IPad className="last-p--48" videoScreen={prototype2} autoPlay={true} />
                    </div>
                </div>
            </div>

            <div className="img-label-container row-16">
                <img className="round-img" src={featureExp2} alt="feature-exp2" loading="eager" />
            </div>

            <div className="row row-17">
                <div className="left">
                    <h2>Using LLMs to streamline the note review process and save students time</h2>
                    <p className="first-p">Although AI is highly contestable in education currently where students can easily use it to sidestep academic integrity, there exists potential in its application to streamline tedious aspects of the note review flow. This approach can bolster recall and retention rather than undermine it.</p>
                    <p>It must be designed carefully to ensure that students are still actively note-taking.</p>
                </div>
                <div className="right">
                    <div className="img-label-container">
                        <IPad className="last-p--48" videoScreen={prototype3} autoPlay={true} />
                    </div>
                </div>
            </div>

            <div className="img-label-container row-18">
                <img className="round-img" src={featureExp3} alt="feature-exp3" loading="eager" />
            </div>

            <div className="row row-19">
                <div className="left">
                    <h2>Performing usability tests to ensure designs are intuitive</h2>
                    <p className="first-p">To gauge how simple and intuitive these designs are to users, a usability test would be quickly conducted. 8-12 participants would be recruited, ideally students who are existing users on the platform.</p>
                    <p>Each would be tasked with thinking aloud as they complete 3 action items.</p>
                    <ol>
                        <li><span className="bold-reg">Schedule to review “Lecture 2 Notes” later at 8PM for 15 minutes.</span> This tests how difficult it is to schedule notes through the long-press gesture and how easy it is to change date and time selections on the modal.</li>
                        <li className="first-p--16"><span className="bold-reg">Press the push notification and start the review.</span> This tests if the “Start review” button is quickly identifiable on app load.</li>
                        <li className="first-p--16"><span className="bold-reg">Use Notability’s new AI tool to identify discrepancies between the notes and the audio recordings. </span> This tests if the AI icon is quickly identifiable through the existing toolbar and how helpful the prompt suggestions are in the chat AI interface.</li>
                    </ol>
                    <p>The success rate of these tasks & total time of task completion would be measured and be taken into consideration for the next iteration of designs.</p>
                </div>
                <div className="right">
                    <h2>Measuring success after implementation</h2>
                    <p className="first-p">Reflecting on the impact and success of this feature is crucial for future Product decisions. Some metrics could be tracked for each feature.</p>
                    <ol>
                        <li><span className="bold-reg">“Review later” gamification feature:</span> Is there a change in activation or frequency of users reviewing notes? Measure...</li>
                        <ul className="first-p--16">
                            <li>Retention rate of users who are using this new feature</li>
                            <li>Conversion rates of users successfully reviewing a note after scheduling a time to review it</li>
                        </ul>
                        <li className="first-p--16"><span className="bold-reg">AI chatbot feature: </span>Test the accuracy of AI answers and suggestions by measuring the change in time spent on reviewing notes.</li>
                    </ol>
                </div>
            </div>

        </div>
    )
}