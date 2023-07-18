import { useState } from "react";

import BookEdit from "./BookEdit"
import useBooksContext from "../hooks/useBooksContext";

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById, editBookById } = useBooksContext();

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        editBookById(id, newTitle);
    }

    return (
        <div className="book-show">
            {showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : book.title}
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>

        </div>
    );

}

export default BookShow;