import React from 'react';
import '../App.css';
import Preview from '../components/Preview';
import playPreviewsData from './playPreviewsData';

export default function Play() {

    const playPreviews = playPreviewsData.map((item, index) => (
        <Preview key={index} item={item} />
    ));

    return (
        <div className="preview-layout">
            {playPreviews}
        </div>
    )
}