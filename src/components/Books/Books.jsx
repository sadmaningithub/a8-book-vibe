import { useEffect, useState } from "react";
import "../../index.css"

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('/public/books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])



    return (
        <div>
            <div className="mt-24 mb-9">
                <h1 className="font-playfair text-4xl font-bold text-center">Books:{books.length}</h1>
            </div>

        </div>
    );
};

export default Books;