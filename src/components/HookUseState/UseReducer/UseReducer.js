import React, {useState} from 'react';
import {Modal} from "react-bootstrap";

const booksData = [
    {id: 1, name: "Pather Panchal"},
    {id: 2, name: "Hajar Bochor Dhore"},
    {id: 3, name: "Padma Nadir Majhi"}
];

const CustomModal = ({modalText}) =>{
    return <p>{modalText}</p>
}

const UseReducer = () => {
    //UseState use here for few state
    const [books, setBooks] = useState(booksData);
    const [bookName, setBookName] = useState("");
    const [modalText, setModalText] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleForm = (e) =>{
        e.preventDefault();
        setBooks((prevState) => {
            const newBook = {id: new Date().getTime().toString(), name: bookName}
            return [...prevState, newBook]
        });
        setIsModalOpen(true);
        setModalText("book is added");
    }

    return (
        <>
            <h1>Form</h1>
            <form onClick={handleForm}>
                <input type="text" value={bookName} onChange={(e)=>{setBookName(e.target.value)}}/>
                <button type="submit">Submit</button>
            </form>

            {isModalOpen && <CustomModal modalText={modalText} />}

            <h1>Book List</h1>
            {books.map((book)=>{
                const {id, name} = book;
                return <li key={id}> {name} </li>
            })}
        </>
    );
};

export default UseReducer;
