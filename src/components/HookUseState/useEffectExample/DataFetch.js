import React, {useState, useEffect} from 'react';

const DataFetch = () => {
    const [todos, setTodos] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const loadingMessage = <p>todos is loading!</p>
    const errorMessage = <p>{error}</p>

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/todos")
                .then((res) => {
                    if (!res.ok){
                        throw Error("Fetching is not successful please check API")
                    }
                    return res.json();
                })
                .then((data) => {
                    setTodos(data);
                    setIsLoading(false)
                    setError(null)
                })
                .catch((error)=>{
                    setError(error.message)
                    setIsLoading(false)
                })
        },1000)
    }, []);

    const todosElement = todos && todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>
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
