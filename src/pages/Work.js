import React, { Suspense } from 'react';
import '../App.css';

import Preview from '../components/Preview';
import workPreviewsData from './workPreviewsData.js';


export default function Work() {

    const workPreviews = workPreviewsData.map((item, index) => (
        <Preview key={index} item={item} />
    ));


    return (
        <div className="preview-layout">
            {workPreviews}
        </div>
    )
}