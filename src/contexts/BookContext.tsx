import { ReactNode, createContext, useEffect, useReducer } from 'react';
import { BookActionType, bookReducer } from '../reducers/BookReducer';

export interface Book {
    id: string;
    title: string;
    author: string;
}

export type BookContextType = {
    books: Book[];
    addBook: (title: string, author: string) => void;
    removeBook: (id: string) => void;
};

type BookContextProviderProps = {
    children: ReactNode;
};

export const BookContext = createContext<BookContextType | null>(null);

const BookContextProvider = ({ children }: BookContextProviderProps) => {
    // const [books, setBooks] = useState<Book[]>([
    //     { id: '1', title: 'Six of Crows', author: 'Leigh Bardugo' },
    //     { id: '2', title: 'Throne of Glass', author: 'Sarah J Maas' },
    // ]);

    // const addBook = (title: string, author: string) => {
    //     setBooks([...books, { id: uuid(), title: title, author: author }]);
    // };

    // const removeBook = (id: string) => {
    //     setBooks(books.filter((book) => book.id !== id));
    // };

    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });

    const addBook = (title: string, author: string) => {
        dispatch({
            type: BookActionType.ADD_BOOK,
            payload: { title, author },
        });
    };

    const removeBook = (id: string) => {
        dispatch({
            type: BookActionType.REMOVE_BOOK,
            payload: { id },
        });
    };

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;
