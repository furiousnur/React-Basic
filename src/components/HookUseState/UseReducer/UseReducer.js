import React, {useState, useReducer} from 'react';

const booksData = [
    {id: 1, name: "Pather Panchal"},
    {id: 2, name: "Hajar Bochor Dhore"},
    {id: 3, name: "Padma Nadir Majhi"}
];

const CustomModal = ({modalText}) =>{
    return <p>{modalText}</p>
}

const reducer = (state, action) => {
    //action.type action.payload
    if (action.type === "ADD"){
        const allBooks = [...state.books, action.payload]
        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: 'book added'
        }
    }

    if (action.type === "DELETE"){
        const filterBooks = [...state.books].filter(book => book.id != action.payload);
        return {
            ...state,
            books: filterBooks,
            isModalOpen: true,
            modalText: 'book is removed'
        }
    }
    return state;
}

const UseReducer = () => {
    /*UseState use here for few state*/
    // const [books, setBooks] = useState(booksData);
    // const [modalText, setModalText] = useState("");
    // const [isModalOpen, setIsModalOpen] = useState(false);

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

        // setBooks((prevState) => {
        //     const newBook = {id: new Date().getTime().toString(), name: bookName}
        //     return [...prevState, newBook]
        // });
        // setIsModalOpen(true);
        // setModalText("book is added");
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
