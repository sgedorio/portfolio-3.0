import React, { useEffect } from 'react';
import '../App.css';
import Preview from '../components/Preview';
import workPreviewsData from './workPreviewsData.js';
import ReactGA from 'react-ga';

export default function Work() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    const workPreviews = workPreviewsData.map((item, index) => (
        <Preview key={index} item={item} />
    ));

    return (
        <div className="preview-layout">
            {workPreviews}
        </div>
    )
}