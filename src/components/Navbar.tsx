import { useBookContext } from '../hooks/useBookContext';

const Navbar = () => {
    // const { books } = useContext(BookContext) as BookContextType;
    const { books } = useBookContext();
    return (
        <div className="row my-4">
            <div className="col-md-12">
                <h1 className="display-4">Reading List</h1>
                <p className="lead">
                    Currently you have {books.length} books in your reading
                    list.
                </p>
            </div>
        </div>
    );
};

export default Navbar;
