import '../styles/VirtualizedWithOutLibrary.css';
import {useState} from "react";

const itemHeight = 30;
const windowHeight = 400;
const overscan = 10;


export const VirtualizedWithOutLibrary = ({
    numberOfItems,
}: {
    numberOfItems: number;
}) => {
    const [scrollTop, setScrollTop] = useState(0);
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    let renderedNodesCount = Math.floor(windowHeight / itemHeight) + 2 * overscan;
    renderedNodesCount = Math.min(numberOfItems - startIndex, renderedNodesCount);

    const generateRows = () => {
        let items: JSX.Element[] = [];
        for (let i = 0; i < renderedNodesCount; i++) {
            const index = startIndex + i;
            items.push(<ListItem key={index} index={index}/>);
        }
        return items;
    };

    return (
        <div className={'withOutLibrary'}>
            <h1>Virtualized List without Library</h1>
            <ul
                className="ul"
                style={{height: `${windowHeight}px`}}
                onScroll={(e) => {
                    setScrollTop(e.currentTarget.scrollTop);
                }}
            >
                <div
                    style={{
                        height: `${numberOfItems * itemHeight}px`,
                    }}
                >
                    <div
                        style={{
                        transform: `translateY(${startIndex * itemHeight}px)`,
                         }}
                    >
                        {generateRows()}
                    </div>
                </div>
            </ul>
        </div>
    );
};

const ListItem = ({index}: { index: number }) => {
    return (
        <div
            style={{
                height: `${itemHeight}px`,
            }}
            className="list-item"
        >
            List Item Index - {index}
        </div>
    );
}