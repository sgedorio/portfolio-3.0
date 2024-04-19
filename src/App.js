import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import About from './pages/About';
import Play from './pages/Play';
import Work from './pages/Work';
import MSOnboarding from './pages/MSOnboarding';
import WREKDesignCollective from './pages/WREKDesignCollective';
import SupplyMe from './pages/SupplyMe';
import EightBallZines from './pages/8BallZines';
import Sidebar from './components/Sidebar';
import './App.css';
import ScrollToTop from "./components/scrollToTop";
import burger from './img/burger.svg';

import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

ReactGA.initialize("G-Y24V0SMTW8")
const browserHistory = createBrowserHistory()
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search)
  console.log(location.pathname)
})


function App() {
  const [isSidebarVisible, setSidebarVisibility] = useState(window.innerWidth > 1024);
  const [isToggled, setToggled] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
    setToggled(!isToggled);
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)

    let prevWindowWidth = window.innerWidth;

    const handleResize = () => {
      const currentWindowWidth = window.innerWidth;

      if (currentWindowWidth < 1024 && prevWindowWidth >= 1024) {
        setSidebarVisibility(false);
        if (isToggled) {
          setToggled(false);
        }
      } else if (currentWindowWidth > 1024 && !isSidebarVisible) {
        setSidebarVisibility(true);
      } else if (currentWindowWidth > 1024 && isToggled && isSidebarVisible) {
        setToggled(false);
      }
      prevWindowWidth = currentWindowWidth;

    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSidebarVisible, isToggled]);

  return (
    <Router history={browserHistory}>
      <ScrollToTop />
      <div className="App">
          <Sidebar isSidebarVisible={isSidebarVisible} isToggled={isToggled} toggleSidebar={toggleSidebar} />
          {!isSidebarVisible 
          ? <div className="burger-icon" onClick={toggleSidebar}><img src={burger} alt="burger-icon" /></div>
          : <div className="burger-icon hidden" onClick={toggleSidebar}><img src={burger} alt="burger-icon" /></div>}
          <div className="content-container">
            <Routes> 
              <Route path="/" element={<Navigate to="/work" />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" exact element={<Work />} />
              <Route path="/play" element={<Play />} />
              <Route path="/work/ms-onboarding" element={<MSOnboarding />} />
              <Route path="/work/wrek-design-collective" element={<WREKDesignCollective />} />
              <Route path="/work/supply-me" element={<SupplyMe />} />
              <Route path="/play/8-ball-zines" element={<EightBallZines />} />
            </Routes>
          </div>
          {isToggled 
          ? <div className="toggle-overlay" onClick={toggleSidebar}/>
          : <div className="toggle-overlay hidden"/> }
      </div>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;
