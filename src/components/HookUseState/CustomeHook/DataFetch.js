import React from 'react';
import useFetch from "./useFetch";

const DataFetch = () => {
    const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/posts")
    const loadingMessage = <p>please wait a moment!</p>
    const errorMessage = <p>{error}</p>

    const todosElement = data && data.map((data) => {
        return <p key={data.id}>{data.title}</p>
    })

    return (<div>
            <h1>Use Effect Data Fetch</h1>
            {/*is loading is true that time loading message will show*/}
            {isLoading && loadingMessage}
            {error && errorMessage}
            {todosElement}
        </div>);
};

export default DataFetch;
