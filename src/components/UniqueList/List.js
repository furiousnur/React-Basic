import React from "react";
import {v4 as uuid} from 'uuid';

const todos = [{
    "id": uuid(), "brand": "Apple", "category": "smartphones"
}, {
    "id": uuid(), "brand": "Apple", "category": "smartphones"
}, {
    "id": uuid(), "brand": "Apple", "category": "smartphones"
}, {
    "id": uuid(), "brand": "Apple", "category": "smartphones"
}]

const List = () => {
    // console.log(uuid());
    return <div>
        {todos.map((todo) => {
            return <div className="card" key={todo.id}>
                <h3>{todo.brand}</h3>
                <p>{todo.category}</p>
                <p>{todo.id}</p>
            </div>
        })}
    </div>
}

export default List;