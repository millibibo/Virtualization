import React, {useEffect, useState} from 'react';
import { getCLS, getFID, getLCP } from 'web-vitals';
import '../styles/CoreWebVitals.css';
// @ts-ignore
import cwvImage from '../images/cwv.png';
export function CoreWebVitals() {

    const [CLS, setCLS] = useState(0);
    const [FID, setFID] = useState(0);
    const [LCP, setLCP] = useState(0);

    useEffect(() => {
        getCLS((metric) => setCLS(metric.value));
        getFID((metric) => setFID(metric.value));
        getLCP((metric) => setLCP(metric.value));
    }, []);

    return (
        <>
            <div className={'outerDiv'}>
                <h2>Core Web Vitals</h2>
                <div className={'vitals'}>Largest Contentful Paint (LCP): {LCP.toFixed(2)} ms</div>
                <div className={'vitals'}>First Input Delay (FID): {FID.toFixed(2)} ms</div>
                <div className={'note'}>Interaction to Next Paint (INP) should be used and is taking over INP, but it
                    seems that
                    the npm package 'web-vitals' can't find it yet.
                </div>
                <div className={'vitals'}>Cumulative Layout Shift (CLS): {CLS.toFixed(2)} units</div>
                <img src={cwvImage} alt="cwv Img"/>
            </div>
        </>
    );
}