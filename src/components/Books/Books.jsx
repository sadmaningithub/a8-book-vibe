import { useEffect, useState } from "react";
import "../../index.css"
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('./books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])



    return (
        <div>
            <div className="mt-24 mb-9">
                <h1 className="font-playfair text-4xl font-bold text-center">Books:{books.length}</h1>
                <div className='grid grid-cols-3 gap-6 flex-grow'>
                    {
                        books.map(book => <Book key={books.id} book={book}></Book>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Books;