import React,{useState, useEffect} from 'react';

const DataFetch = () => {
    const [todos, setTodos] = useState(null)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                setTodos(data);
            })
    },[]);

    return (
        <div>
            <h1>Use Effect Data Fetch</h1>
            {
                todos && todos.map((todo) =>{
                    return <p key={todo.id}>{todo.title}</p>
                })
            }
        </div>
    );
};

export default DataFetch;
