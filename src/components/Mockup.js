import React, { useEffect, useRef } from 'react';
import './Mockup.css';
import iphone from '../img/iphone.png';

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

    return (
        <div className={`mockup ${props.className ? props.className : ""}`} style={{ width: props.width }}>
            <img src={iphone} className="iphone" alt="iPhone mockup" />
            <img src={props.staticScreen} className="screen" alt="screen" />
            { props.autoPlay
            ? <video src={props.videoScreen} className="screen" ref={videoRef} data-current-time={props['data-current-time']} muted loop autoPlay/>
            : <video src={props.videoScreen} className="screen" ref={videoRef} data-current-time={props['data-current-time']} muted loop />
            }
        </div>
    )
}