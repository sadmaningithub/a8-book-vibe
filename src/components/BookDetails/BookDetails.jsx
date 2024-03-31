
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import {saveBook} from "../utility/localstorage"

import 'react-toastify/dist/ReactToastify.css';


const BookDetails = () => {

    const book = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const bookInfo = book.find(bookInfo => bookInfo.id === idInt)
    console.log(bookInfo)
    const tags = bookInfo.tags

    const handleRead = () => {
        saveBook(idInt)
        toast('Added to wishlist')
    }

    const handleWishList = () => {
        toast('Added to wishlist')
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col gap-12 lg:flex-row ">
                    <img src={bookInfo.image} className="max-w-md rounded-lg bg-[#1313130D] p-7" />
                    <div className="space-y-4">
                        <h1 className="text-5xl font-bold">{bookInfo.bookName}</h1>
                        <p className="py-1">Author: {bookInfo.author}</p>
                        <p className="py-1">Category: {bookInfo.category}</p>
                        <p className="py-1">Review: {bookInfo.review}</p>
                        <div className="flex gap-2">
                            {
                                tags.map((tag, idx) => <p className=" bg-slate-800 text-white rounded-md p-2" key={idx}>#{tag}</p>)
                            }
                        </div>
                        <hr className="border-dashed" />
                        <div className="space-y-7">
                            <p>Number of Pages: {bookInfo.totalPages}</p>
                            <p>Publisher: {bookInfo.publisher}</p>
                            <p>Year of publishing: {bookInfo.yearOfPublishing}</p>
                            <p>Rating: {bookInfo.rating}</p>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={handleRead} className="btn p-4">Read</button>
                            <button onClick={handleWishList} className="btn p-4">Wishlist</button>
                        </div>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;