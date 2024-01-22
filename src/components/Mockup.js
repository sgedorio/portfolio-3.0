import React, { useEffect, useRef, useState } from 'react';
import './Mockup.css';
import iphone from '../img/iphone.png';
import loading from '../img/black-loading.svg'

export default function Mockup (props) {
    const videoRef = useRef(null);
    const { 'data-current-time': dataCurrentTime } = props;

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener('loadedmetadata', () => {
                if (dataCurrentTime !== undefined) {
                    videoRef.current.currentTime = dataCurrentTime;
                }
            });
        }
    }, [dataCurrentTime]);


    const shouldAutoPlay = props.autoPlay || !window.matchMedia('(hover: hover)').matches;

    return (
        <div className={`mockup ${props.className ? props.className : ""}`} style={{ width: props.width }}>
            <img src={iphone} className="iphone" alt="iPhone mockup" loading="eager" />
            {props.staticScreen ? (
                <img src={props.staticScreen} className="screen" alt="screen" />
            ) : (
                <img src={loading} className="screen" alt="Loading..." />
            )}
            <video
                src={props.videoScreen}
                className="screen"
                ref={videoRef}
                data-current-time={props['data-current-time']}
                muted
                loop
                playsInline
                autoPlay={shouldAutoPlay}
                loading="lazy"
            />
        </div>
    )
}