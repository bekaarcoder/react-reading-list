import { useContext } from 'react';
import { BookContext, BookContextType } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const { books } = useContext(BookContext) as BookContextType;
    return (
        <div className="row">
            <div className="col-md-12">
                {books.length ? (
                    <>
                        {books.map((book) => (
                            <BookDetails book={book} key={book.id} />
                        ))}
                    </>
                ) : (
                    <p>Hey! No books to read.</p>
                )}
            </div>
        </div>
    );
};

export default BookList;
