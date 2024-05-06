import React from 'react';
import Mockup from "../components/Mockup"
import IPad from "../components/IPad"
import ipad from "../img/ipad.svg"; // Update the path if necessary
import loadingtest from "../img/ipad-loading-test.svg";


export default function TestPage() {
    return (
        <div>
            <h1>Test Page for iPad Component</h1>
            <IPad/>
            <Mockup/>
            <div className="ipad" style={{ width: '700px' }}>                
                <img src={ipad} className="ipad-device" alt="iPad mockup" loading="eager" />
                <img src={loadingtest} className="screen" alt="loading..." />
            </div>
        </div>
    );
}