import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import LinkedIn from '../img/linkedin.svg';
import Email from '../img/email.svg';
import Github from '../img/github.svg';
import close from '../img/close.svg';

export default function Sidebar({ isSidebarVisible, isToggled, toggleSidebar }) {

    const handleLinkClick = () => {
        if (isToggled) {
          toggleSidebar();
        }
      }

    return (
        <aside className={isSidebarVisible ? 'sidebar--visible' : 'sidebar--hidden'}>
            <div className={`name-container ${isToggled ? "with-img" : ""}`}>
                {isToggled && <img onClick={toggleSidebar} src={close} alt="close"></img>}
                <p className="bold">Sean Gedorio</p>
            </div>
            <div className="nav-container">
                <nav>
                    <ul>
                        <li><NavLink to="/about" onClick={handleLinkClick}>About</NavLink></li>
                        <li><NavLink to="/work" onClick={handleLinkClick}>Work</NavLink></li>
                        <li><NavLink to="/play" onClick={handleLinkClick}>Play</NavLink></li>
                    </ul>
                </nav>
                <div className="bio">
                    <p>I’m a <span className="bold">Product Designer</span> who loves untangling complex problems and bringing clarity to ambiguity.</p>
                    <p>I have a passion for tools that ooze joy.</p>
                    <p>Currently at Fanatics Betting & Gaming.</p>
                </div>
                <div className="contact">
                    <a href="https://www.linkedin.com/in/seangedorio/" alt="LinkedIn"><img src={LinkedIn} alt="LinkedIn" /></a>
                    <a href="mailto: sgedorio@gmail.com" alt="Email"><img src={Email} alt="Email"/></a>
                    <a href="https://github.com/sgedorio" alt="GitHub"><img src={Github} alt="GitHub"/></a>
                </div>
            </div>
        </aside>
    )
}