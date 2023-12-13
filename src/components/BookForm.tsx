import { FormEvent, useContext, useState } from 'react';
import { BookContext, BookContextType } from '../contexts/BookContext';

const BookForm = () => {
    const { addBook } = useContext(BookContext) as BookContextType;
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    };

    return (
        <div className="row">
            <div className="col-md-12">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Book Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-dark" type="submit">
                            Add To Reading List
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookForm;
