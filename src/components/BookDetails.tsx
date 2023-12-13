import { useContext } from 'react';
import { Book, BookContext, BookContextType } from '../contexts/BookContext';

interface Props {
    book: Book;
}

const BookDetails = ({ book }: Props) => {
    const { removeBook } = useContext(BookContext) as BookContextType;
    return (
        <div className="card mb-3">
            <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.author}</p>
                </div>
                <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeBook(book.id)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default BookDetails;
