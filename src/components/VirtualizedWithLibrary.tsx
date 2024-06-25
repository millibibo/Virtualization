import {Virtuoso} from "react-virtuoso";
import '../styles/VirtualizedWithLibrary.css';
import {useQuery,} from '@tanstack/react-query'

type Quote = {
    id: number;
    quote: string;
    author: string;
};

function VirtualizedWithLibrary() {

    const {isLoading, data, error} = useQuery({
        queryKey: ['quotes'],
        queryFn: () =>
            fetch('https://dummyjson.com/quotes').then(async (res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch quotes');
                }

                return await res.json();
            }),
    })

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>An error has occurred: {error.message}</div>

    if (data)
        return (
            <div className="Virtuoso">
                <h1>Virtualized List with Library Virtuoso</h1>

                <Virtuoso
                    style={{height: '400px'}}
                    totalCount={data.quotes.length}
                    itemContent={index => <div style={{margin: '3rem'}}>{data.quotes[index].quote}</div>}
                />
            </div>
        );

    return <div>ERROR</div>

}

export default VirtualizedWithLibrary;