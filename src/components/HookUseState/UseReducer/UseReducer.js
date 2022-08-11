import React, {useState, useReducer} from 'react';
import {reducer} from "./Reducer";

const booksData = [
    {id: 1, name: "Pather Panchal"},
    {id: 2, name: "Hajar Bochor Dhore"},
    {id: 3, name: "Padma Nadir Majhi"}
];

const CustomModal = ({modalText}) =>{
    return <p>{modalText}</p>
}

const UseReducer = () => {
    const [bookName, setBookName] = useState("");

    //Use Reducer
    const [bookState, dispatch] = useReducer(reducer, {
        books: booksData,
        isModalOpen: false,
        modalText: ""
    });

    const handleForm = (e) =>{
        e.preventDefault();
        if (bookName === ""){
            return false;
        }else{
            const newBook = {id: new Date().getTime().toString(), name: bookName};
            dispatch({type: "ADD", payload: newBook});
        }
        setBookName("");
    }

    const removeBook = (id) =>{
        dispatch({type: "DELETE", payload: id})
    }

    return (
        <>
            <h1>Form</h1>
            <form onClick={handleForm}>
                <input type="text" value={bookName} onChange={(e)=>{setBookName(e.target.value)}}/>
                <button type="submit">Submit</button>
            </form>

            {bookState.isModalOpen && <CustomModal modalText={bookState.modalText} />}

            <h1>Book List</h1>
            {bookState.books.map((book)=>{
                const {id, name} = book;
                return <li key={id}> {name} <button onClick={()=>{removeBook(id)}}>Remove</button> </li>
            })}
        </>
    );
};

export default UseReducer;
