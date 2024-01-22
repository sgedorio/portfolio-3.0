import React from 'react';
import Mockup from '../components/Mockup';
import msArtists from '../img/ms-onboarding/ms-artists.png';
import habitChart from '../img/ms-onboarding/habit.svg';
import onboardingDefinition from "../img/ms-onboarding/onboarding-definition.svg";
import boba from "../img/ms-onboarding/boba.png";
import oldWaitlist from "../img/ms-onboarding/old-waitlist-2.svg";
import newWaitlist from "../img/ms-onboarding/new-waitlist-2.svg";
import oldRegistration from "../img/ms-onboarding/old-registration-2.svg";
import problem1 from "../img/ms-onboarding/problem1.svg";
import solution1 from "../img/ms-onboarding/solution1.svg";
import newRegistration from "../img/ms-onboarding/new-registration.svg";
import rProblem1 from "../img/ms-onboarding/r-problem1.svg";
import rProblem2 from "../img/ms-onboarding/r-problem2.svg";
import rProblem3 from "../img/ms-onboarding/r-problem3.svg";
import rSolution1 from "../img/ms-onboarding/r-solution1.svg";
import rSolution2 from "../img/ms-onboarding/r-solution2.svg";
import rSolution3 from "../img/ms-onboarding/r-solution3.svg";
import artcampStoryboard from "../img/ms-onboarding/artcamp-storyboard.png"
import onboardingDefinitionProblems from "../img/ms-onboarding/onboarding-definition-problems.svg"
import arrowChange from "../img/ms-onboarding/arrow-change.svg"

//mockups
import collecting from "../img/ms-onboarding/collect.mp4"
import collection from "../img/ms-onboarding/collection.png"
import problem1_mockup from "../img/ms-onboarding/registration_problem.mp4"
import solution1_mockup from "../img/ms-onboarding/registration_solution.mp4"
import whatCatches from "../img/ms-onboarding/whatcatches.mp4"
import shareContext from "../img/ms-onboarding/share-context.mp4"
import collectContext from "../img/ms-onboarding/collect-context.mp4"
import songBlurbHint from "../img/ms-onboarding/song-blurb.mp4"
import addFriendHint from "../img/ms-onboarding/add-friend.mp4"
import sendPostHint from "../img/ms-onboarding/send-post.mp4"
import registrationUIProblems from "../img/ms-onboarding/registration-ui-problems.png"
import registrationUISolutions from "../img/ms-onboarding/registration-ui-solutions.png"
import splashScreen from "../img/ms-onboarding/splash.mp4"
import combineShards from "../img/combineShards.mp4"
import loadingScreen from "../img/ms-onboarding/loading.mp4"
import songOTD from "../img/ms-onboarding/songofday.mp4"
import splashScreenGif from "../img/ms-onboarding/splashGif.gif"
import loadingScreenGif from "../img/ms-onboarding/loadingGif.gif"
import combineShardsGif from "../img/ms-onboarding/combineShardsGif.gif"
import songOTDGif from "../img/ms-onboarding/songOTDGif.gif"
import artcamp1 from "../img/ms-onboarding/artcamp1_tap.mp4"
import artcamp2 from "../img/ms-onboarding/artcamp2_tap.mp4"
import artcamp3 from "../img/ms-onboarding/artcamp3_tap.mp4"

export default function MSOnboarding() {
    return (
        <div className="ms-onboarding case-study">
            <div className="row row-1">
                <div className="left">
                    <h1>Marine Snow, Onboarding</h1>
                    <h2>Crafting a delightful first-time experience for new users</h2>
                </div>
                <div className="right">
                    <div className="mockups">
                        <Mockup videoScreen={collectContext} className="first" autoPlay={true}/>
                        <Mockup videoScreen={splashScreen} className="second" autoPlay={true}/>
                        <Mockup videoScreen={whatCatches} className="third" autoPlay={true}/>
                    </div>
                    {/* <p className="img-label first-p">Test</p> */}
                    <div className="summary">
                        <div className="overview">
                            <h3>Overview</h3>
                            {/* <p>First impressions mean everything; the new user onboarding experience is critical for any early-stage product. Inspired by video games, the onboarding experience underwent several iterations to explain the core parts of the product contextually, minimizing text to avoid overload. A high bar for visuals in the animations and microinteractions was set to create a delightful yet luxurious experience.</p> */}
                            <p>The new user onboarding experience is critical for any early-stage product. The onboarding experience underwent several iterations to explain parts of the product contextually, minimizing text to avoid overload. A high bar for visuals in the microinteractions was set to create a delightful yet luxurious experience.</p>
                        </div>
                        <div className="contributions">
                            <h3>Contributions</h3>
                            <div className="copy">
                                <p>I analyzed the user funnels through Mixpanel, streamlined all of the user flows and journeys with constant feedback loops from the Product team, and designed most of the prototypes shown in this case study.</p>
                                <p>Khalisha Tambunan designed the Login & Registration UI redesigns as well as some of the screens pertaining the cinematic ARTCAMP film.</p>
                            </div>
                        </div>
                        <div className="tools">
                            <h3>Tools</h3>
                            <p>Figma<br/>FigJam<br/>Mixpanel</p>
                        </div>
                        <div className="timeline">
                            <h3>Timeline</h3>
                            <p>2021-2022</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row row-2">
                <div className="left">
                    <h2>Music streaming has alienated both music lovers and boundary-pushing artists</h2>
                    <p className="first-p">Streaming behemoths pay artists peanuts, creating a culture that values songs based on stream count and not necessarily their artistic or cultural significance. New models are needed that can support artists while simultaneously restoring music back to art.</p>
                    <p><a href="https://apps.apple.com/us/app/marine-snow/id1578574267">Marine Snow</a> is a vertical, mobile-first platform with a vision in becoming the Venice Biennale of music. Members come to experience an exclusive set of the world’s most critically, culturally, and historically important songs and stay for the rich conversations with fellow music connoisseurs.</p> 
                    <p>This comes with a built-in business model that actually supports artists. <a href="https://ra.co/news/77429">Marine Snow artists are paid the equivalent of $500,000 US Spotify streams upfront.</a></p>
                </div>
                <div className="right">
                    <img className="round-img" src={msArtists} alt="ms-artists" loading="eager"/>
                </div>
            </div>

            <div className="row row-3">
                <div className="left">
                </div>
                <div className="right">
                    <h2>Why early-stage products need a great onboarding experience</h2>
                    <p className="first-p">Most users don’t have the patience to try out new products these days. <a href="https://andrewchen.com/new-data-shows-why-losing-80-of-your-mobile-users-is-normal-and-that-the-best-apps-do-much-better/">80% of users trying out a new app these churn within the first 3 days.</a></p>
                    <p>If you can effectively communicate the value of a product to new users in the very short window where they try to use the app—to the point where they keep coming back—that’s a great recipe for increased retention, which is key to product growth.</p>
                    <p>Good onboarding teaches users, successful onboarding creates habits. A habit is created when a key action is performed at a certain frequency. In the context of a product, a key action is the action that signifies the user sees enough value in the product to remain engaged.</p>   
                    <p className="last-p--48">The key action we chose to observe was users <span className="bold-reg">saving songs</span> because while users have the option to listen to several songs, saving a song actually implies they see value in it. The goal of onboarding was to get users to save songs <span className="bold-reg">at least once a week</span>; we went with this frequency since songs continuously get released out on the platform on a weekly basis.</p>
                    <img className="round-img" src={habitChart} alt="onboarding-chart" />
                    <p className="img-label"><span className="bold">Key action:</span> action that signifies that a user sees value in the app to remain engaged
                    <br />
                    <span className="bold">Frequency:</span> how often the key action is performed</p>
                    <div className="img-label-container">
                        <div className="mockups">
                            <Mockup videoScreen={collecting} autoPlay={true}/>
                            <Mockup staticScreen={collection}/>
                        </div>
                        <p className="img-label">Users can save songs they love for quicker access through the Collection tab. These songs are displayed on their profiles.</p>
                    </div>
                </div>
            </div>

            <div className="row row-4">
                <div className="left">
                    <h2>Defining the onboarding flow</h2>
                    <p className="first-p">It’s important to note that the onboarding experience is an ongoing, never-ending journey that adapts to an evolving product. Even existing users benefit from onboarding, especially as a product highlights how new features add value to their current workflows.</p>
                    <p className="last-p">Since Marine Snow is still early-stage, we specifically defined the “onboarding flow” to cover every facet of a <span className="bold-reg">new user's journey</span>. This spans from when the user discovers Marine Snow for the first time and signs up for our waitlist, all the way to when they actually try to download the app and learn how it works.</p>
                </div>
                <div className="right">
                    <img src={onboardingDefinition} alt="onboarding-definition"/>
                </div>
            </div>

            <div className="row row-5">
                <div className="left">
                    <h2>Fast but not frictionless: the boba analogy</h2>
                    <p className="first-p">If users are overloaded with too many miscellaneous experiences that distract them from the core value, they can easily lose patience and churn. One of the fundamental parts of great onboarding is getting new users to experience the value proposition of the product quickly.</p>
                    <p>Emphasis on <span className="bold-reg">quickly</span>, not immediately. When streamlining any flow, think of boba. Boba is comprised of 2 simple ingredients:</p> 
                    <ol>
                        <li>Smooth, silky milk tea</li>
                        <li>Chewy tapioca pearls</li>
                    </ol>
                    <p>Even though the pearls are chewy, they add to the delicious experience.  In the same vein, intentional friction is useful if it can get users to better understand the value of a product.</p>
                    <p className="last-p">It’s important that the friction added is yummy, chewy tapioca pearls, and not hard, tough pebbles.</p>
                    <img className="round-img" src={boba} alt="boba"/>
                </div>
                <div className="right">
                </div>
            </div>

            <div className="row row-6">
                <div className="left">
                    <h2>Streamlining the waitlist flow</h2>
                    <p className="first-p">Inspired by the exclusivity of nightclubs prevalent in underground & electronic music as well as recent social apps that successfully utilized FOMO and the scarcity principle, one source of friction intentionally placed at the start of the new user flow was a waitlist.</p>
                    <p>The challenge here was balancing new user impatience and curiosity.</p>
                    <p>Friction itself can be streamlined. The original waitlist was riddled with too many inputs, some of them repetitive with inputs from profile registration. The number of inputs were drastically reduced from 12 to at most 2.</p>
                    <p>Before, users who skipped the waitlist had to fill in a Typeform to confirm their email for verification. <a href="https://www.appsflyer.com/resources/guides/deep-linking-101/">Deeplinks</a> on the engineering end reduced time to value significantly by taking users who skip the waitlist straight to profile registration without any input verification on their end.</p>
                    <p>Users exhibit lower churn rates when they remain within the same device environment. Opting to guide users to the App Store through text, rather than email, after they exited the waitlist resulted in an increased likelihood of app downloads.</p>
                </div>
                <div className="right">
                    <div className="waitlist-container">
                        <div className="img-label-container">
                            <img src={oldWaitlist} alt="old-waitlist" />
                            <p className="img-label">Old waitlist flow</p>
                        </div>
                        <div className="img-label-container">
                            <img src={newWaitlist} alt="new-waitlist" />
                            <p className="img-label">New waitlist flow</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row row-7">
                <div className="left">
                    <h2>Streamlining the Registration flow</h2>
                </div>
                <div className="right">
                    {/* <p></p> */}
                    <p className="first-p--0">In addition to the waitlist flow, the flow for login & profile registration was also exhaustively audited to be as smooth as possible. Each red point in the flow diagram below represents a pain point, identified through a combination of user feedback and insights derived from personal and collective intuition.</p>
                    <p>Harkening back to the boba analogy, it’s important that both Login and Registration is as silky smooth and fast as possible so users can get to the core product value quickly.</p>
                    <p className="last-p--48">5 main pain points were identified and each were carefully solved and addressed.</p>
                </div>
            </div>
            <div className="img-label-container row-8">
                <img src={oldRegistration} alt="old-registration" />
                <p className="img-label">Old Registration flow, with 5 identified pain points</p>
            </div>
            
            <div className="row row-9">
                <div className="left"></div>
                <div className="right">
                    <div className="registration-difference__container">
                        <div className="registration-difference">
                            <div className="registration-problem">
                                <div className="registration-problem__header">
                                    <img src={problem1} alt="problem1" />
                                    <h2>Ambiguous options in home screen</h2>
                                </div>
                                <div className="registration-difference__content">
                                    <p>The “Get started” button is too ambiguous and vague, especially when it is paired with a “Login” button. What’s confusing is that it serves 2 different functions:</p>
                                    <ol>
                                        <li>Signs up new users for the waitlist</li>
                                        <li>Goes through the registration flow (but only for users who don’t have a pre-registered account)</li>
                                    </ol>
                                    <p>Point #2 is especially confusing; some whitelisted users may go back to the app and not know if they should press “Login” or “Get started” again. Users shouldn’t “get started” twice. Also, if they had already pre-registered an account, they have to select “Login” and not “Get started” which is unintuitive.</p>
                                    {/* <Mockup staticScreen={sample}/> */}
                                </div>
                            </div>
                            <div className="registration-solution">
                                <div className="registration-solution__header">
                                    <img src={solution1} alt="solution1" />
                                    <h2>Single phone input</h2>
                                </div>
                                <div className="registration-difference__content">
                                    <p>We can reduce option fatigue by simply getting rid of the “Login” and “Registration” buttons in the home screen and replacing it with a single phone input. We do all the work for the users in the background without them having to worry about which button to press.</p>
                                    {/* <Mockup staticScreen={sample}/> */}
                                </div>
                            </div>
                            <div className="registration-problem__mockup">
                                <Mockup videoScreen={problem1_mockup} autoPlay={true}/>
                            </div>
                            <div className="registration-solution__mockup">
                                <Mockup videoScreen={solution1_mockup} autoPlay={true} />
                            </div>
                        </div>
                        <img src={arrowChange} className="arrow" alt="arrow" />
                    </div>
                    <p className="img-label">Example of problem #1 with its corresponding solution</p>
                </div>
            </div>

            <div className="img-label-container row-10">
                <img src={newRegistration} alt="new-registration" loading="eager"/>
                <p className="img-label">New Registration flow, with 5 new solutions</p>
            </div>

            <div className="row row-11">
                <div className="left">
                    <h2>Prime users with core parts of the product value throughout Registration</h2>
                    <p className="first-p">3 main points collected from user feedback were:</p>
                    <ol>
                        <li>New users felt that it still took too long for them to experience the main value of the product (i.e. discovering new songs)</li>
                        <li>The visualization of songs as tappable orbs was still considered strange and unfamiliar UI</li>
                        <li>Since we focused on human curation over an algorithmic one, some users did not like the first few songs rewarded to them</li>
                    </ol>
                    <p>The “What catches your ear?” feature addressed these problems. Users were presented with 30 second previews of Marine Snow songs during profile registration.</p>
                    <p>This let them experience the product value sooner, primed them with the orb UI & gestures, and guaranteed that they were initially rewarded with songs they liked.</p>
                </div>
                <div className="right">
                    <div className="img-label-container">
                        <Mockup videoScreen={whatCatches} autoPlay={true} />
                        <p className="img-label"><span className="bold">"What catches your ear?"</span> prototype</p>
                    </div>
                </div>
            </div>

            <div className="row row-12">
                <div className="left">
                </div>
                <div className="right">
                    <h2>The best onboarding experiences come from video games</h2>
                    <p className="first-p">Video games are decades ahead of the tech industry in terms of how they teach users how core parts of the product work. Great video games know that most users learn best when learning feels like an exploratory adventure.</p>
                    <p>Exploration of the app was encouraged. Tooltips and explanations were only showed when they were contextually relevant. Several iterations were made for these explanations to be as minimally textual as possible. Most new users will not retain everything taught to them. Since a wealth of information creates a poverty of attention, it’s important to be intentional in which parts of the product need to be taught for users to grasp the value it offers.</p>
                    <p className="last-p--0">Animated hints, paired with toasts, further allowed us to educate how the the game mechanics work without overloading on text.</p>
                    <div className="img-label-container">
                        <div className="mockups">
                            <Mockup videoScreen={shareContext} autoPlay={true} />
                            <Mockup videoScreen={collectContext} autoPlay={true} />
                        </div>
                        <p className="img-label">Contextual explanations</p>
                    </div>
                    <div className="img-label-container">
                        <div className="mockups">
                            <Mockup videoScreen={songBlurbHint} autoPlay={true} />
                            <Mockup videoScreen={addFriendHint} autoPlay={true} />
                            <Mockup videoScreen={sendPostHint} autoPlay={true} />
                        </div>
                        <p className="img-label">Visual hints to encourage exploration</p>
                    </div>
                </div>
            </div>

            <div className="row row-13">
                <div className="left">
                    <h2>Enhancing aesthetic appeal</h2>
                    <p className="first-p">Great first impressions come from simple, sleek, and usable UI. Since Marine Snow was conceived with the vision of being a luxury product, there was a constant high bar for visuals and attention to detail.</p>
                    <p>Early-stage products, which may be susceptible to bugs, can benefit from the <a href="https://lawsofux.com/aesthetic-usability-effect/">aesthetic-usability effect</a> (so long as the aesthetics don’t mask any severe usability issues).</p>
                </div>
                <div className="right">
                    <h2>Revamping Login & Registration UI</h2>
                    <p className="first-p">In addition to streamlining the flows for both Login & Registration, design paid equal attention to revamping the visuals for each flow.</p>
                    <p className="last-p">Other than minimizing copy, we also paid close attention to existing UI patterns. <a href="https://goodui.org/">goodui.org</a> features a compilation of heavily A/B tested patterns. One pattern in most successful signup flows is that <a href="https://goodui.org/patterns/9/">users prefer single-input screens over long forms with several inputs</a>. While implementing this pattern created more screens throughout the flow, it resulted in a more minimalistic user experience with smoother error handling.</p>

                    <div className="revamp-container">
                        <div className="revamp-problems">
                            <img src={registrationUIProblems} alt="registration-UI-problems" />
                        </div>
                        <div className="revamp-grid">
                            <div className="revamp-grid__problem">
                                <img src={rProblem1} alt="rProblem1" /> 
                                <p>Home screen filled with too much copy, unnecessary carousels</p>
                            </div>
                            <div className="revamp-grid__solution">
                                <img src={rSolution1} alt="rSolution1" />
                                <p>Home screen gets straight to the point for Login or Registration</p>
                            </div>
                            <div className="revamp-grid__problem">
                                <img src={rProblem2} alt="rProblem2" /> 
                                <p>Profile registration screen cluttered with too many inputs, messy error handling</p>
                            </div>
                            <div className="revamp-grid__solution">
                                <img src={rSolution2} alt="rSolution2" />
                                <p>Minimal, elegant, single-input screens for smoother error handling</p>
                            </div>
                            <div className="revamp-grid__problem">
                                <img src={rProblem3} alt="rProblem3" /> 
                                <p>Inconsistent visual system for buttons (e.g. “Sign in” not in a button container)</p>
                            </div>
                            <div className="revamp-grid__solution">
                                <img src={rSolution3} alt="rSolution3" />
                                <p>Buttons standardized under new design system</p>
                            </div>
                        </div>
                        <div className="revamp-solutions">
                            <img src={registrationUISolutions} alt="registration-UI-solutions" />
                        </div>
                    </div>
                    <p className="img-label">Problems in the Login & Registration UI with corresponding solutions</p>

                </div>
            </div>

            <div className="row row-14">
                <div className="left">
                    <h2>Smooth, lightweight animations</h2>
                    <p className="first-p">As the bar for performance continues to rise, users are growing less tolerant for buggy apps. This puts early-stage products at a disadvantage since they are frequently benchmarked against top-tier apps that set the standard for speed and performance.</p>
                    <p><a href="https://techcrunch.com/2013/03/12/users-have-low-tolerance-for-buggy-apps-only-16-will-try-a-failing-app-more-than-twice/">Only 16% of users will try a failing app more than twice.</a></p>
                    <p>Since Marine Snow was visually heavy, the app was not as compressed and optimized as it could be. Although performance is often viewed as engineering responsibility, design can offer great bandaid solutions to these problems through strategically-placed animations. <a href="https://dl.acm.org/doi/10.1145/2851581.2892308">Studies show that visual feedback during wait times can actually make the perceived wait time much shorter.</a></p>
                    <p>I self-taught myself After Effects & Lottie to create several lightweight animations throughout the app where wait times existed. The new splash screen crafted a luxurious first impression that fortified the brand identity and the new loading screen improved the perceived responsiveness of the app.</p>
                </div>
                <div className="right">
                    <div className="mockup-gif-container">
                        <Mockup videoScreen={splashScreen} autoPlay={true}/>
                        <div className="gif-label">
                            <img src={splashScreenGif} alt="splash-screen-gif" />
                            <div className="gif-label__text">
                                <p className="bold-reg">Splash screen</p>
                            </div>
                        </div>
                    </div>
                    <div className="mockup-gif-container">
                        <Mockup videoScreen={loadingScreen} autoPlay={true}/>
                        <div className="gif-label">
                            <img src={loadingScreenGif} alt="loading-screen-gif" />
                            <div className="gif-label__text">
                                <p className="bold-reg">Loading screen</p>
                            </div>
                        </div>
                    </div>
                    <div className="mockup-gif-container">
                        <Mockup videoScreen={combineShards} autoPlay={true}/>
                        <div className="gif-label">
                            <img src={combineShardsGif} alt="combine-shards-gif" />
                            <div className="gif-label__text">
                                <p className="bold-reg">Combine shards</p>
                            </div>
                        </div>
                    </div>
                    <div className="mockup-gif-container">
                        <Mockup videoScreen={songOTD} autoPlay={true}/>
                        <div className="gif-label">
                            <img src={songOTDGif} alt="songOTD-gif" />
                            <div className="gif-label__text">
                                <p className="bold-reg">Song of the day</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row row-15">
                <div className="left"></div>
                <div className="right">
                    <h2>Marine Snow x ARTCAMP cinematic video</h2>
                    <p className="first-p">Being a designer at a small startup means wearing several creative hats. I had the privilege of creative directing <a href="https://www.madeatartcamp.com/marine-snow">a cinematic film with ARTCAMP</a>, shown to new users right after they download and open the app for the first time.</p>
                    <p>It features the 2 diving creatures from the Marine Snow logo uncovering gems from the depths of the water and gracefully resurfacing them to mariners. The goal of the video was to prime users with the deep sea theme of the app and create a feeling of collective adventure.</p>
                    <p>This is another example of what we considered a delightful yet chewy tapioca pearl in the new user journey. Although it took them a little longer to experience the product, a key qualitative insight we gathered from interviewing new users was that this video was a key element in forming a great first impression of the app. The high production created a feeling of luxury.</p>
                    <p className="last-p--48">Nonetheless, we dedicated our efforts to create an engaging yet optional experience. We trimmed the original 1-minute length down to 30 seconds and put a Skip button for users who wanted to dive straight into the app.</p>
                    <div className="img-label-container">
                        <img className="round-img" src={artcampStoryboard} alt="artcampStoryboard" />
                        <p className="img-label">Early storyboard featuring the creatures uncovering deep sea gems. The film underwent a 5-month-long development process.</p>
                    </div>
                    
                    <div className="mockups">
                        <Mockup videoScreen={artcamp1} autoPlay={true}/>
                        <Mockup videoScreen={artcamp2} autoPlay={true}/>
                        <Mockup videoScreen={artcamp3} autoPlay={true}/>
                    </div>
                    <p className="img-label">The original landscape format was cropped to fit the mobile screen. It was trimmed from the original 1 minute length down to 30 seconds.</p>

                </div>
            </div>

            <div className="row row-16">
                <div className="left">
                    <h2>Testing design solutions & measuring impact</h2>
                    <p className="first-p">Working in early-stage means working quickly to build clarity out of an unpredictable, ambiguous environment. This meant a lack of a structured user research process. Although we conducted interviews and usability tests at a fairly impromptu pace, we still took user insight seriously.</p>
                    <p>While design was busy pushing Figma prototypes, we had business interns from NYU reach out to users to gather qualitative feedback on how users perceived the app when first using it and why dormant users churned.</p>
                    <p>I learned how to use Mixpanel to identify possible bottlenecks in the new user funnel and to continuously check whether our features were driving towards our goal of users collecting at least a song each week.</p>
                </div>
                <div className="right"></div>
            </div>

            <div className="row row-17">
                <div className="left">
                    <h2>Next steps & reflection</h2>
                    <p className="first-p">The data highlights that there's room for further refinement in the user learning/exploration and overall product experience. While the increase in users collecting songs was small, conversion rates did significantly increase for users who successfully registered after getting off the waitlist. Streamlining the waitlist, login, and registration flows had a positive impact on the product.</p>
                    <p>To truly build habits out of these key actions, it’s critical that we commit to pushing features that actually work on long-term engagement rather than just great first impressions.</p>
                    <p>This means experimenting more to figure out how to properly reward users with songs at a rate that keeps them coming back on a weekly basis. Expanding Collection to be a more practical tool that acts a social signifier is another way to incentivize users to collect songs more.</p>
                    <p>In the early-stage startup world where the Product team is eternally scrambling to find some semblance of product-market fit, it’s easy to get lost in the world of pushing as many features as quickly as possible without meaningfully assessing whether these solutions addressed the underlying problems.</p>
                    <p>The main lesson I learned from all of this is that it’s important to have a process in place to constantly reflect on feature impact and the bigger picture. This could be as simple as booking a Retro day in your calendar a month or two after a feature is shipped to check on how users are responding to it.</p>
                </div>
                <div className="right">
                    <img src={onboardingDefinitionProblems} alt="onboardingDefinitionProblems" />
                </div>
            </div>
            
        </div>
    )
}