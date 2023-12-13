import { v4 as uuid } from 'uuid';
import { Book } from '../contexts/BookContext';

export enum BookActionType {
    ADD_BOOK = 'ADD_BOOK',
    REMOVE_BOOK = 'REMOVE_BOOK',
}

interface AddBookAction {
    type: BookActionType.ADD_BOOK;
    payload: {
        title: string;
        author: string;
    };
}

interface RemoveBookAction {
    type: BookActionType.REMOVE_BOOK;
    payload: {
        id: string;
    };
}

type BookAction = AddBookAction | RemoveBookAction;

export const bookReducer = (state: Book[], action: BookAction): Book[] => {
    switch (action.type) {
        case BookActionType.ADD_BOOK:
            return [
                ...state,
                {
                    title: action.payload.title,
                    author: action.payload.author,
                    id: uuid(),
                },
            ];
        case BookActionType.REMOVE_BOOK:
            return state.filter((book) => book.id !== action.payload.id);
        default:
            return state;
    }
};
