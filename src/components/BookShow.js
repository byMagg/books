import { useState } from "react";

import BookEdit from "./BookEdit"

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = () => {
        setShowEdit(false);
    }

    return (
        <div className="book-show">
            {showEdit ? <BookEdit book={book} onEdit={onEdit} onSubmit={handleSubmit} /> : book.title}
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