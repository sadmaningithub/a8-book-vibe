import PropTypes from 'prop-types';
import "../../index.css"


const BookCard = ({bookBook}) => {

    const {author,bookName,yearOfPublishing,totalPages,tags,publisher,category,rating,image} = bookBook
    // console.log(bookBook)

    // const tagList = tags

    return (
        <div>
            <div>
                <div className=" flex flex-row items-center rounded-3xl bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="w-60 rounded-xl" />
                    </figure>
                    <div className="flex-grow items-center space-y-5 pr-10">
                        <h2 className="card-title font-playfair font-bold">{bookName}</h2>
                        <p className='font-work-sans'>By: {author}</p>
                        <div className='font-work-sans'>
                            {
                                <p className='flex flex-row gap-2 items-center'>Tags: 
                                    {
                                    tags.map((tag, idx) => <p className=' bg-slate-800 text-white rounded-md p-2' key={idx}>{tag}</p>)
                                } 
                                </p>
                            }
                        </div>
                        <p>Year of Publishing: {yearOfPublishing}</p>
                        <p>Publisher: {publisher}</p>
                        <p>Number of Pages: {totalPages}</p>
                        <hr className='border-dashed'/>
                        <div className="card-actions">
                            <button className="btn px-5 rounded-full">{category }</button>
                            <button className="btn px-5 rounded-full">{rating}</button>
                            <button className="btn px-5 rounded-full">Show Details </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

BookCard.propTypes = {
    bookBook: PropTypes.object
};

export default BookCard;