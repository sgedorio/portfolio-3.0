import React, { useEffect } from 'react';
import '../App.css';
import Preview from '../components/Preview';
import playPreviewsData from './playPreviewsData';
import ReactGA from 'react-ga';

export default function Play() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    const playPreviews = playPreviewsData.map((item, index) => (
        <Preview key={index} item={item} />
    ));

    return (
        <div className="preview-layout">
            {playPreviews}
        </div>
    )
}