import React from 'react';
import '../styles/CoreWebVitals.css';

// @ts-ignore
import resourcesImg from '../images/resources.png';
export function Resources() {

    return (
        <>
            <div className={'outerDiv'}>
                <h2>Resources</h2>
                <div className={'note'}>The largest resource according to the network tab is logo192.png. The size of
                    this is 364B. The next biggest resource with just 1B less is manifest.json and favicon.ico.
                </div>
                <img src={resourcesImg} alt="resources Img"/>
            </div>
        </>
    );
}