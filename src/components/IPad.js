import React, { useEffect, useRef } from 'react';
import ipad from "../img/ipad2.svg";
import './IPad.css';
import loading from "../img/ipad-black-loading.svg";

export default function IPad (props) {
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
        <div className={`ipad ${props.className ? props.className : ""}`} style={{ width: props.width }}>
            <img src={ipad} className="ipad-device" alt="iPad mockup" loading="eager" style={{ width: props.width }}/>
            <img src={loading} className="screen" alt="Loading..." />

            {props.staticScreen ? (
                <img src={props.staticScreen} className="screen" alt="screen" />
                ) : (
                props.videoScreen ? (
                    <video
                    src={props.videoScreen}
                    className="screen"
                    ref={videoRef}
                    data-current-time={props["data-current-time"]}
                    muted
                    loop
                    playsInline
                    autoPlay={shouldAutoPlay}
                    loading="lazy"
                    />
                ) : null
            )}
        </div>
    )
}