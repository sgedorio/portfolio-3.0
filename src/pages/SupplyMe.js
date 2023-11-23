import React from 'react';
import Mockup from '../components/Mockup';
import splashScreen from "../img/ms-onboarding/splash.mp4"
import userFocus from "../img/sm/userdomain.png"
import existingSolutions from "../img/sm/existingSolutions.png"
import digitalObs from "../img/sm/digitalobservations.png"
import surveys from "../img/sm/surveys.png"
import storyboard from "../img/sm/storyboard.png"
import affinityDiagram from "../img/sm/affinitydiagram.png"
import parentPersona from "../img/sm/parent-persona.png"
import teacherPersona from "../img/sm/teacher-persona.png"
import one from "../img/sm/one.svg"
import two from "../img/sm/two.svg"
import three from "../img/sm/three.svg"
import four from "../img/sm/four.svg"
import lte from "../img/sm/locate-to-educate.png"
import appVending from "../img/sm/app-vending.png"
import winner from "../img/sm/winner.png"
import homeProcess from "../img/sm/home-process.png"
import supplySearch from "../img/sm/supply-search.png"
import elfsterInspo from "../img/sm/elfster-inspo.png"
import addItem from "../img/sm/add-item.png"
import branding from "../img/sm/branding.png"
import wireframeResearch from "../img/sm/wireframe-research-2.png"

// Mockups
import splashPrototypeSimple from "../img/sm-logo.mp4"
import splashPrototype from "../img/sm/sm-splash.mp4"
import barterPrototype from "../img/sm/sm-barter.mp4"
import wishlistPrototype from "../img/sm/sm-wishlist.mp4"
import parentPrototype from "../img/sm/sm-parent.mp4"
import addPrototype from "../img/list-item.mp4"

export default function SupplyMe() {
    return (
        <div className="sm case-study">
             <div className="row row-1">
                <div className="left">
                    <h1>Supply Me</h1>
                    <h2>A school supply bartering app for public school teachers</h2>
                </div>
                <div className="right">
                    <div className="mockups">
                        <Mockup videoScreen={barterPrototype} className="first" autoPlay={true}/>
                        <Mockup videoScreen={splashPrototypeSimple} className="second" autoPlay={true}/>
                        <Mockup videoScreen={addPrototype} className="third" autoPlay={true}/>
                    </div>
                    <div className="summary">
                        <div className="overview">
                            <h3>Overview</h3>
                            <p>Supply Me is a school supply trading app that alleviates out-of-pocket expenses made by public school teachers for their students' supplies.</p>
                        </div>
                        <div className="contributions">
                            <h3>Contributions</h3>
                            <div className="copy">
                                <p>I completed all portions of the high-fidelity prototype alone as a personal project to improve my design skills in Figma.</p>
                                <p>The research was conducted as a group with Daniella Nieves, Timothy Lai, & May Park. Specifically, I:</p>
                                <ul>
                                    <li>Analyzed existing solutions throughout the domain research</li>
                                    <li>Conducted interviews with Atlanta public school teachers</li>
                                    <li>Drew the visual storyboard</li>
                                    <li>Participated in the affinity diagramming session</li>
                                    <li>Proposed 5 solutions for iterative ideation</li>
                                </ul>
                                <p>I recorded all of the prototype animations on this page through OBS/Premiere Pro.</p>
                            </div>
                        </div>
                        <div className="tools">
                            <h3>Tools</h3>
                            <p>Figma, Balsamiq, Illustrator</p>
                        </div>
                        <div className="timeline">
                            <h3>Timeline</h3>
                            <p>This was a group effort from Jan 2019 - Apr 2019 to complete the user research and medium-fidelity prototype. I finished the high-fidelity prototype version as a solo project throughout Nov 2020.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row row-2">
                <div className="left">
                    <h2>Public school teachers spend <a href="https://www.nbcphiladelphia.com/news/national-international/teachers-spend-own-money-on-school-needs-study/2062615/">$480 on average per year</a> on school supplies, nearly double the $250 federal tax deduction.</h2>
                    <p className="first-p">This becomes an even more striking issue for teachers in low-income communities where schools are less funded and well-supplied. <a href="https://eric.ed.gov/?id=ED583062">94% of teachers who work for schools that offer free lunch or lunch deduction programs pay for their students’ supplies.</a></p>
                    <p>Faced with underfunded classrooms, low wages, and increased budget cuts, teachers all across America fought in solidarity for better working conditions through <a href="https://rethinkingschools.org/articles/the-2018-wave-of-teacher-strikes/">a series of walkout protests in 2018</a>.</p>
                    <p>Inspired by their struggle, we focused on tackling the problems that public school teachers face when procuring the adequate amount of supplies they need to effectively run their classrooms.</p>

                </div>
                <div className="right">
                    <img className="round-img" src={userFocus} alt="user-focus"/>
                </div>
            </div>

            <div className="row row-3">
                <div className="left"></div>
                <div className="right">
                    <h2>Analyzing existing solutions</h2>
                    <p className="first-p">To get a better understanding of the problem space, we assessed existing systems that teachers used to solve this issue.</p>
                    <p className="last-p">We had yet to ideate any solutions at this point, but this step highlighted how online communities play a pivotal role in uniting teachers through their common struggles.</p>
                    <img className="round-img" src={existingSolutions} alt="existing-solutions"/>
                    <p className="img-label last-p">Top 3 platforms teachers use when trying to procure school supplies</p>
                </div>
            </div>

            <div className="row row-4">
                <div className="left">
                    <h2>Digital observations</h2>
                    <p className="first-p">After learning that most existing solutions occurred online, we conducted digital observations by joining Facebook teacher groups and searching for key terms on Twitter to see how teachers interacted with others online in their attempts to procure classroom supplies.</p>
                    <p>We learned that:</p>
                    <ul>
                        <li>Social media forms the online basis for most teacher-to-donor interactions. For example, some would share their Amazon Lists on their Facebook feeds. Others would try to make viral hashtags on Twitter to shed awareness on their lack of supplies.</li> <br />
                        <li>Most teachers seem to be technologically literate (in the context of social media). We found that <a href="https://inthesetimes.com/article/facebook-teachers-strike-organizing-protest">Facebook groups were the foundational forums and organizing powerhouses that fueled thousands of teachers to partake in the 2018 strikes.</a></li>
                    </ul>
                </div>
                <div className="right">
                    <div className="img-label-container">
                        <img className="round-img" src={digitalObs} alt="digital-observations"/>
                        <p className="img-label">Twitter hashtags to promote awareness and support for teachers</p>
                     </div>
                </div>
            </div>

            <div className="row row-5">
                <div className="left">
                    <h2>Semi-structured interviews</h2>
                    <p className="first-p">We conducted semi-structured interviews on public school teachers within the local Atlanta community. Most of our findings confirmed the results found in our survey, but some novel insights include:</p>
                    <ul>
                        <li>Teachers mainly use DonorsChoose not for general classroom supplies, but more for the “technology end of things” (laptops, projectors, etc)</li> <br />
                        <li>Some teachers resort to writing grants for supplies, but the process is often burdensome for its long and tedious commitment.</li>
                    </ul>
                    <p><span className="bold-reg">These interviews revealed how existing solutions had temporal constraints.</span> In these systems, teachers usually play a waiting game when asking for supplies. Sites such as DonorsChoose rely on chance, connections, and the supply of donors. Similarly, grants are never 100% guaranteed, and the burdensome attempts to complete them may ultimately be futile.</p>
                    <p>We started asking ourselves, could there be a way to provide quicker and more immediate access to supplies?</p>
                </div>
                <div className="right">
                    <h2>Surveys</h2>
                    <p className="first-p">We distributed a Google Form survey on Reddit through several teaching-related subreddits, such as <a href="https://reddit.com/r/education">/r/education</a>, <a href="https://reddit.com/r/teachers">/r/teachers</a>, <a href="https://reddit.com/r/teaching">/r/teaching</a>. 43 responses from public school teachers were collected. Our main survey findings are as follows: </p>
                    <ul>
                        <li>Most participants were lower middle class or working class.</li>
                        <li>95% felt the need to purchase additional school supplies for students.</li>
                        <li>77% disagreed with the statement “Schools provide enough funding for teachers to get supplies”.</li>
                        <li>35% spent $200-399 out-of-pocket per year, another 30% spent $400-$599</li>
                    </ul>
                    <p>Our most interesting findings came from the portion where teachers shared their current methods of acquiring supplies. The most common and representative responses are shown below:</p>
                    <p className="bold-reg last-p">We learned through surveys that teachers learn to be resourceful out of frustration and resort to several community-based strategies to minimize their expenses.</p>

                    <div className="img-label-container">
                        <img className="round-img" src={surveys} alt="surveys" />
                        <p className="img-label">Example survey responses to <span className="bold">"What are some of your strategies in getting needed school supplies?"</span></p>
                    </div>
                </div>
            </div>

            <div className="row row-6">
                <div className="left">
                    <h2>Affinity diagrams & storyboard</h2>
                    <p className="first-p last-p">A visual storyboard was quickly drawn to generalize the task patterns that public school teachers generally undergo:</p>
                    <img className="round-img" src={storyboard} alt="storyboard" />
                    <p className="img-label">The process teachers usually go through when procuring supplies.</p>
                </div>
                <div className="right">
                    <div className="img-label-container">
                        <img src={affinityDiagram} alt="affinity-diagram" />
                        <p className="img-label">We created a total of ~200 affinity diagram notes on our findings.</p>
                    </div>
                    <p className="first-p">As a group, we set time to complete an affinity diagramming activity to seek out common patterns from our observations, surveys, and interviews.</p>
                    <ul>
                        <li><span className="bold-reg">Trading is a recurring theme in our findings.</span> Teachers seemed to set up trading environments with other teachers in their schools and districts if they lacked certain supplies.</li><br/>
                        <li>We noted <span className="bold-reg">frugality as a common trait</span> most teachers seem to have, especially since most teachers shared supplies through central inventory systems within their schools.</li><br/>
                        <li><span className="bold-reg">Teachers are dependent on their surrounding community.</span> If support was nowhere to be found in their immediate circles, teachers would often turn to digital platforms, such as Facebook groups or DonorsChoose, to search for additional help.</li>
                    </ul>
                    <p>After settling on these key themes, we decided to add parents as potential stakeholders for possible solutions to this problem. Teachers would usually ask parents for supplies through a wish list at the beginning of the school year. Collectively, most teachers generally found parents to be a reliable source of support.</p>
                    <p>The willingness of the surrounding community to donate supplies, as well as the willingness for teachers to help each other, served as the central ideas we designed our solutions around.</p>
                </div>
            </div>

            <div className="row row-7">
                <div className="left"> 
                    <h2>User personas</h2>
                    <p className="first-p last-p">We created personas to simplify the main user needs of teachers and parents.</p>
                    
                    <div className="img-label-container">
                        <img className="round-img" src={teacherPersona} alt="teacher-persona" />
                        <img className="round-img" src={parentPersona} alt="parent-persona" />
                    </div>
                </div>
                <div className="right"> 
                </div>
            </div>

            <div className="row row-8">
                <div className="left">
                    <h2>Low fidelity ideation</h2>
                    <p className="first-p">Through an exhaustive ideation process, we iterated several possible solutions until we converged on what we agreed to be the best solution. 20 possible solutions were considered, and each solution proposal had to be backed by our research.</p>
                    <p className="bold-reg">It was crucial that we ideated as many solutions as possible—even ones that we considered impractical or unrealistic given our constraints.</p>
                    <p>We ignored feasibility and instead focused on the insightful ideas that supported each solution. Why? At this point in our process, creativity was purposefully uncontrolled and relentless. Even if solutions were impractical as a whole, key ideas that made them strong could be taken and reassembled for our final product.</p>
                    <p>We picked 3 of our most creative solutions and made rough low-fidelity prototypes for feedback.</p>
                </div>

                <div className="right">
                    <div className="sm-numbered">
                        <img src={one} alt="one" />
                        <h2>Locate to Educate</h2>
                    </div>
                    <p className="first-p">Since <span className="bold-reg">central inventory systems and community donations were popular in our research</span>, expanding the scope of these inventory systems from the school to the community could prove to be a useful solution.</p>
                    <p>Donated school supplies will be tagged with RFID chips so that they become trackable. Nearby office supply and merchandise stores (Office Depot, Staples, etc.) will serve as “libraries” for certain schools or districts. Through an app, teachers can locate supplies they need and borrow them for a certain amount of time.</p>
                    <div className="img-label-container">
                        <img src={lte} alt="locate-to-educate" />
                        <p className="img-label">Prototype for Locate to Educate</p>
                    </div>

                    <div className="sm-numbered first-p">
                        <img src={two} alt="two" />
                        <h2>Teacher selling/bartering app</h2>
                    </div>
                    <p className="first-p"><span className="bold-reg">Almost all of the teachers surveyed who lacked the necessary school supplies depended on help from parents or other teachers.</span> A trading/bartering app creates an easy and efficient way for teachers to sell, find, and ask for supplies.</p>
                    <p>In the app, teachers will have the option to search for supplies from their own school or surrounding neighborhood and district. Teachers can buy used supplies directly from other teachers or barter their own supplies in exchange for equally-valued items.</p>
                    <p className="last-p">Teachers have the option to create wish lists as well. Parents will be granted access to the app where they will have the option to buy items off these lists.</p>

                    <div className="sm-numbered first-p">
                        <img src={three} alt="three" />
                        <h2>Supply Vending Machine</h2>
                    </div>
                    <p className="first-p"><span className="bold-reg">We found that teachers often searched for donated or leftover supplies from local libraries.</span> A vending machine in these buildings would store these free supplies and be readily available for teachers.</p>
                    <p>Users must be verified teachers to use these machines. It would most likely compromise of recycled materials such as old magazines, craft supplies, working utensils, etc.</p>
                    <div className="img-label-container">
                        <img src={appVending} alt="app-vending" />
                        <p className="img-label">Prototypes for bartering app (left) and supply vending machine (right)</p>
                    </div>
                </div>
            </div>

            <div className="row row-9">
                <div className="left">
                <h2>And the winner is...</h2>
                    <p className="first-p">We presented our solutions to both our fellow Georgia Tech peers and local Atlanta teachers for a wide breadth of feedback.</p>
                    <p>The Supply Vending Machine and Locate to Educate solutions were lauded for being resourceful and using existing community ecosystems (nearby libraries, supply stores), but faced significant critiques in terms of cost and accessibility.</p>
                    <p><span className="bold-reg">In the end, we decided to pursue the Teacher Selling/Bartering App as our final solution.</span> A trading app would have a faster stream of supplies coming in and out of it compared to vending machines, and can sustain smaller used supplies which Locate to Education could not. It garnered the most enthusiastic feedback from the teachers we talked to.</p>
                    <p>A digitally frugal trading environment that binds teachers with their local communities tied a lot of our research motifs together.</p>
                </div>
                <div className="right">
                    <img className="round-img" src={winner} alt="winner"></img>
                </div>
            </div>

            <div className="row row-10">
                <div className="left">
                    <h2>High fidelity prototype</h2>
                    <p className="first-p">Supply Me is a school supply trading app that directly alleviates out-of-pocket expenses made by K-12 public school teachers for their students’ supplies. By giving teachers the platform to buy or barter inexpensive supplies from other teachers, the app not only provides a useful resource for teachers to save money, but also fosters a strong sense of community that we learned was so integral to the lives of teachers.</p>
                    <p>As a group, we finished by creating a Balsamiq prototype that targeted both our teacher and parent stakeholders.</p>
                    <p>Our medium-fidelity prototype was a rudimentary mockup that only served to show the main features of the app without much focus on visual principles that could simplify and enhance the experience for stakeholders.</p>
                    <p>I challenged myself and flushed out this project even further by creating a high-fidelity prototype to improve my skills in Figma, pixel-perfect interface design, and branding.</p>
                    <div className="img-label-container">
                        <img className="first-p" src={homeProcess} alt="home-process" />
                        <p className="img-label">Example of wireframe-to-prototype pipeline</p>
                    </div>
                </div>

                <div className="right">
                    <div className="sm-numbered">
                        <img src={one} alt="one" />
                        <h2>Searching for supplies</h2>
                    </div>
                    
                    <div className="img-label-container first-p last-p">
                        <img className="round-img" src={supplySearch} alt="supply-search" />
                        {/* <p className="img-label">Home page features</p> */}
                    </div>

                    <p className="first-p">The Home tab focuses primarily on the Supply Search functionality, giving teachers instant access to search for supplies. To save vertical space, recently viewed and saved items are displayed horizontally and the sticky header collapses while scrolling.</p>
                    <p>Teachers will have the option to filter search results by several item attributes, some being:</p>
                    <ul className="last-p">
                        <li>Item Category (e.g. Arts & Craft, Sanitation & Hygiene, Desks & Chairs)</li>
                        <li>Price Range</li>
                        <li>Condition (e.g. New, Excellent, Fair, Poor)</li>
                        <li>Who is selling the item (Teachers in School or expand to Teachers in Neighborhood)</li>
                    </ul>
            
                    <div className="img-label-container first-p last-p">
                        <Mockup videoScreen={splashPrototype} autoPlay={true}/>
                        <p className="img-label">Splash, Home, Profile screens</p>
                    </div>

                    <div className="sm-numbered">
                        <img src={two} alt="two" />
                        <h2>Distributing wishlists to parents & donors</h2>
                    </div>

                    <p className="first-p">Since our research showed that public school teachers rely on the help of parents (and sometimes, online donors) to acquire supplies, the Wishlist feature allows teachers to easily create and distribute school supply wishlists.</p>
                    <p className="last-p">Items are organized by priority, with higher priority items displayed at the top of the wishlist.</p>
                    <div className="img-label-container">
                        <img className="round-img" src={elfsterInspo} alt="elfster-inspo" />
                        <p className="img-label">Inspiration for the Supply Me database</p>
                    </div>
                    <p>The most important design of this feature is the supply database that aggregates items from the most popular school supply websites, such as Amazon and Office Depot. Since most teachers who use online wishlists already do so through Amazon Wishlists, integrating this database that expands their breadth of supplies allows for a hassle-free experience that enhances rather than disrupts their existing task flows.</p>
                    <p className="last-p">Apps such as <a href="https://www.elfster.com/">Elfster</a> have engineered similar item databases, which assured me that this solution is actually feasible for implementation.</p>
                    <div className="img-label-container first-p">
                        <Mockup videoScreen={wishlistPrototype} className="first" autoPlay={true}/>
                        <p className="img-label">Prototype for creating a wishlist</p>
                    </div>

                    <div className="sm-numbered first-p">
                        <img src={three} alt="three" />
                        <h2>Adding items</h2>
                    </div>

                    <p className="first-p">Originally, this tab was named “Sell Item” but I realized that not all items undergo the direct buy-and-sell process. As a bartering app, some items are traded rather than sold. “Add Item” encompasses the 2 types of items in Supply Me:</p>
                    <ol>
                        <li>Items that are being sold, which by default can be bartered for and be used to barter for other items.</li>
                        <li>Items that are exclusively used to barter for items (not sold, can only be viewed when making offers).</li>
                    </ol>
                    <p>A footnote was added to make a clear distinction between the 2.</p>
                    <p className="last-p">If teachers choose to sell to teachers in their neighborhood, they also get to specify pick-up/delivery options. These can be further clarified through the Messaging feature.</p>
                    <div className="img-label-container">
                        <img className="round-img" src={addItem} alt="add-item" />
                        <p className="img-label">Add item screens</p>
                    </div>

                    <div className="sm-numbered first-p">
                        <img src={four} alt="four" />
                        <h2>Parent integration</h2>
                    </div>

                    <p className="first-p">Parents also have the option to download the app.</p>
                    <p>Our research showed that many teachers relied on the gratuitous help of parents in procuring supplies, specifically in the form of school supply wishlists given to students at the beginning of the school year.</p>
                    <p className="last-p">Parents have the option to quickly add teacher wishlists by scanning a QR code or entering a numerical code (which teachers can easily include in their paper/PDF wishlists). This was inspired by the QR code feature from the Locate to Educate solution from the early ideation process.</p>

                    <div className="img-label-container">
                        <Mockup videoScreen={parentPrototype} autoPlay={true}/>
                        <p className="img-label">Prototype for accessing a teacher's wishlist via QR</p>
                    </div>


                </div>
            </div>

            <div className="row row-11">
                <div className="left">
                    <h2>Branding</h2>
                    <p className="first-p last-p">As someone who had little experience in logo-making, this project was a fun opportunity for me to play with Illustrator. Function followed form in this case; I created the logo first and its form inspired the round and playful shapes seen in the final prototypes.</p>
                    
                    <div className="img-label-container">
                        <img className="round-img" src={branding} alt="branding" />
                        <p className="img-label">Brand guideline for Supply Me</p>
                    </div>
                </div>
                <div className="right"></div>
            </div>
            
            <div className="row row-12">
                <div className="left">
                    <h2>Personal reflection</h2>
                    <p className="first-p">The 3 main takeaways I learned from doing this project were...</p>
                </div>
                <div className="right">
                    <div className="sm-numbered">
                        <img src={one} alt="one" />
                        <h2>These are bandaid solutions.</h2>
                    </div>
                    <p className="first-p">As a project, Supply Me highlights the types of problems I want to tackle throughout my career. Thinking of ethical solutions for overworked, ignored, often exploited communities is a principle I want to manifest in my professional life.</p>
                    <p className="last-p">That being said, it’s important to note that the Supply Me solution is a band-aid solution for the overall problem. It merely alleviates teacher expenses—expenses that they shouldn’t be responsible for in the first place. <span className="bold-reg">Legislation is the only real solution here.</span> Unfortunately, the prospects are bleak. Even though <a href="https://www.usnews.com/news/education-news/articles/2019-04-29/teacher-salaries-fell-45-over-the-last-decade">the 2018 strikes brought in pay raises for teachers in some states</a>, recent data shows that <a href="https://www.usnews.com/news/education-news/articles/2019-04-29/teacher-salaries-fell-45-over-the-last-decade">the average teacher salary still fell almost 5% over the last decade</a>.</p>
                
                    <div className="sm-numbered first-p">
                        <img src={two} alt="two" />
                        <h2>When in doubt, study existing designs.</h2>
                    </div>
                    <p className="first-p">With not much familiarity in the world of trading apps, I studied several trading and bartering apps (e.g. Marketplace, Mercari, Ebay, Etsy) to get a better understanding of the interface expected for new apps hitting the market. <span className="bold-reg">I am an ardent believer that distinctness and originality in design can only be achieved by understanding past and current design solutions.</span> I specifically looked at trading apps whose companies’ were UX-focused—that way, I could trust that the decisions of each design detail were most likely backed by research.</p>
                    <div className="img-label-container first-p">
                        <img src={wireframeResearch} alt="wireframe-research" />
                        <p className="img-label">An example of how I conducted design research on existing apps</p>
                    </div>
                    <p className="last-p">I learned that doing research on existing solutions actually helps your work to be more unique, precisely because you're more wary of what’s already been done. This research also succeeds in doing the opposite by ensuring that the interface doesn’t contrast too harshly with other apps in the market. Preserving familiarity through well-known patterns (e.g. being consistent with how items are bought and sold in other apps) is key to maintaining good user experience.</p>

                    <div className="sm-numbered first-p">
                        <img src={three} alt="three" />
                        <h2>Always take the exhaustive ideation process seriously!</h2>
                    </div>
                    <p className="first-p">It’s fulfilling when the ideas you once deemed infeasible turn out to be helpful in the design process later on. I came to realize how relevant the ideation process is even in the final prototyping stages.</p>
                    <p>For example, the Locate to Educate solution was backed by our research that central inventory systems were used often by schools to better organize their limited supplies. Even though this was a scrapped solution, it became clear to me that with the way Supply Me is designed, it could also be used as a central inventory app. Instead of trading, teachers can use the app to view and check out available shared supplies (this inventory system may be organized perhaps by a librarian or other administrator). This flexibility can be explored in the next prototype iteration.</p>
                </div>
            </div>

        </div>
    )
}