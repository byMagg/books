import axios from "axios";
import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    //TODO: hacer un custom hook
    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    };

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title,
        });

        const updatedBooks = [
            ...books,
            response.data
        ]
        setBooks(updatedBooks)
    };

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        const updatedBooks = books.map((book) => {
            if (book.id === id) return { ...book, ...response.data };
            return book;
        })

        setBooks(updatedBooks);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((book) => {
            return book.id !== id
        });

        setBooks(updatedBooks);
    };

    return (
        <BooksContext.Provider value={{
            books,
            deleteBookById,
            editBookById,
            createBook,
            fetchBooks
        }}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;