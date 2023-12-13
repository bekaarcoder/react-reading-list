import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <BookContextProvider>
                        <Navbar />
                        <BookList />
                        <BookForm />
                    </BookContextProvider>
                </div>
            </div>
        </div>
    );
}

export default App;
