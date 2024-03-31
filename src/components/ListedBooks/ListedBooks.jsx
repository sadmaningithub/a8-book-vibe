import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from '../utility/localstorage'
import BookCard from "../BookCard/BookCard";
import "../../index.css"



const ListedBooks = () => {

    const books = useLoaderData()

    const [booksRead, setBooksRead] = useState([])

    useEffect(() => {
        const storedBookId = getStoredBook()
        if (books.length > 0) {
            // const readBooks = books.filter(book => storedBookId.includes(book.id))
            const bookRead = [];
            for (const id of storedBookId) {
                const book = books.find(book => book.id === id);
                if (book) {
                    bookRead.push(book)
                }
            }

            setBooksRead(bookRead)

            // console.log(bookRead, storedBookId, books )
        }
    }, [])

    return (
        <div>
            <div className="font-work-sans font-bold bg-[#1313130D] rounded-xl p-6 mt-12 bt-12">
                <h2 className="text-5xl text-center">Listed Books: {booksRead.length}</h2>
            </div>

            <div className="flex flex-col gap-8 mt-12 mb-12">
                {
                    booksRead.map(bookBook => <BookCard key={bookBook.id} bookBook={bookBook}></BookCard>)
                }
            </div>

        </div>
    );
};

export default ListedBooks;