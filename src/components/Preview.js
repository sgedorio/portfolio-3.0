import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Preview.css';
import Mockup from '../components/Mockup';

export default function Preview(props) {
    //checks type of previewAsset
    const previewAsset = props.item.previewAsset;
    const isMobilePreview = previewAsset.hasOwnProperty('mobile');
    const isImagePreview = previewAsset.hasOwnProperty('image');
    const isVideoPreview = previewAsset.hasOwnProperty('video');

    const [mockupsLoaded, setMockupsLoaded] = useState(false);
    const [imgLoaded, setImgsLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading delay
        const timeout = setTimeout(() => {
          setMockupsLoaded(true);
          setImgsLoaded(true);
        }, 200);
    
        // Clear the timeout to avoid memory leaks
        return () => clearTimeout(timeout);
      }, []);

    useEffect(() => {
        const mobilePrototypes = document.querySelectorAll('.mobile-prototypes');
        const videoPrototypes = document.querySelectorAll('.video-prototype');
      
        const handleMouseEnter = (event) => {
            const target = event.target;
            const videos = target.getElementsByTagName('video');
            Array.from(videos).forEach(video => {
                if (video.paused) {
                    video.currentTime = 0;
                    video.play().catch(error => {
                        // Handle any error that occurs while playing the video
                        console.error('Error occurred while playing the video:', error);
                    });
                }
        });
    };
      
        const handleMouseLeave = (event) => {
            const target = event.target;
            const videos = target.getElementsByTagName('video');
            Array.from(videos).forEach(video => {
                if (!video.paused) {
                    video.pause();
                //   if (video.parentElement.classList.contains('combine-shards')) { 
                    if (video.dataset.currentTime !== undefined) { 
                    // console.log(video.dataset.currentTime);
                    video.currentTime = video.dataset.currentTime;
                    } else video.currentTime = 0;
                }
            });
        };

        videoPrototypes.forEach(element => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });
      
        mobilePrototypes.forEach(element => {
          element.addEventListener('mouseenter', handleMouseEnter);
          element.addEventListener('mouseleave', handleMouseLeave);
        });
      
        return () => {
            videoPrototypes.forEach(element => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });

            mobilePrototypes.forEach(element => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
      }, []);

    return (
        <div className="preview">
            <Link to={props.item.pageUrl} className={`preview-image ${props.item.className}`}>
                {isMobilePreview && (
                    // <div className=mobile-prototypes">
                    <div className={mockupsLoaded ? 'mobile-prototypes mobile-prototypes--loaded' : 'mobile-prototypes'}>
                        {previewAsset.mobile.map((mockup, index) => (
                            <Mockup 
                                key={index} 
                                className={mockup.className} 
                                videoScreen={mockup.videoScreen} 
                                staticScreen={mockup.staticScreen}
                                data-current-time={mockup.currentTime ? mockup.currentTime : null}
                            />
                        ))}
                    </div>
                )}

                {isImagePreview && (
                    // <div className="image-prototypes">
                    <div className={imgLoaded ? "image-prototypes image-prototypes--loaded" : "image-prototypes"}>
                        {previewAsset.image.imageLayers.map((layer, index) => (
                            <div key={index + 1} className={`layer${index + 1} ${previewAsset.image.className}`}>
                                {layer.map((image, index) => (
                                    <img key={index + 1} src={image.imgSrc} className={image.className} alt={image.alt} />
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                {isVideoPreview && (
                    // <div className="video-prototype">
                    <div className={imgLoaded ? "video-prototype video-prototype--loaded" : "video-prototype"}>
                        {window.matchMedia("(hover: none)").matches ? (
                            <video
                                className={previewAsset.video.className}
                                src={previewAsset.video.vidSrc}
                                muted
                                loop
                                playsInline
                                autoPlay
                            />
                        ) : (
                            <video
                                className={previewAsset.video.className}
                                src={previewAsset.video.vidSrc}
                                muted
                                loop
                                playsInline
                            />
                        )}
                    </div>
                )}

                {props.item.inProgress && (
                    <div className="in-progress">
                        <h3>In Progress</h3>
                    </div>
                )}
            </Link>
            <div className="title-divider">
                <h2>{props.item.title}</h2>
                <div className="divider"></div>
            </div>
            <div className="preview-caption">
                <div className="preview-caption-section">
                    <h3>Overview</h3>
                    <p>{props.item.overview}</p>
                </div>

                {props.item.role && (
                <div className="preview-caption-section">
                <h3>Role</h3>
                    <p>{props.item.role}</p>
                </div>)}
                
                {props.item.skills && (
                <div className="preview-caption-section">
                <h3>Skills</h3>
                    <p>{props.item.skills.split(', ').join('\n')}</p>
                </div>)}

                {props.item.tools && (
                <div className="preview-caption-section">
                <h3>Tools</h3>
                    <p>{props.item.tools.split(', ').join('\n')}</p>
                </div>)}
            </div>
        </div>
    )
}