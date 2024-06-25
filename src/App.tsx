import React from 'react';
import './styles/App.css';
import VirtualizedWithLibrary from "./components/VirtualizedWithLibrary";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {VirtualizedWithOutLibrary} from "./components/VirtualizedWithOutLibrary";
import {CoreWebVitals} from "./components/CoreWebVitals";
import {Resources} from "./components/Resources";



function App() {
    const queryClient = new QueryClient()

    return (
        <>
            <div className="App">
                <header className="App-header"></header>
                <h1 className={'outer'}>FRONTEND ASSIGNTMENT VIRTUALIZATION</h1>
                <p>1) Task: Use Virtualization</p>
                <div className="virtualization">
                    <QueryClientProvider client={queryClient}>
                        <VirtualizedWithLibrary/>
                    </QueryClientProvider>

                    <VirtualizedWithOutLibrary numberOfItems={500}/>
                </div>
                <p>2) Show Core Web Vitals</p>
                <div className={'coreWebVitals'}>
                    <CoreWebVitals/>
                </div>
                <p>3) Find largest Resource</p>
                <div className={'coreWebVitals'}>
                    <Resources/>
                </div>
            </div>
        </>
    );
}

export default App;