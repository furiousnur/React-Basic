import React from 'react';
import {useSelector} from "react-redux";

const TodosView = () => { 
    const todos = useSelector((state) => state.todos.todos)
    return (
        <div>
            <h2>Todos App</h2>
            <section>
                {todos &&
                    todos.map((todo) => {
                        return (
                            <article key={todo.id}>
                                <h4>{todo.id}</h4>
                                <p>{todo.title}</p>
                            </article>
                        );
                    })}
            </section>
        </div>
    );
};

export default TodosView;
