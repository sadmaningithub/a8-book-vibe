import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import '../../index.css'
import { NavLink } from 'react-router-dom';


const Book = ({ book }) => {

    const { id, image, tags, bookName, author, category, rating } = book

    return (
        <div>
            <NavLink to={`/book-details/${id}`}>
                <div className="card bg-base-100 shadow-xl ">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Book" className="rounded-xl bg-[#F3F3F3]  p-5" />
                    </figure>
                    <div className="card-body space-y-6">
                        <div className='flex flex-row gap-4 text-center'>
                            {
                                tags.map((tag, idx) => <p className='bg-slate-800 text-white rounded-md p-2' key={idx}>{tag}</p>)
                            }
                        </div>
                        <h2 className="card-title font-playfair font-bold text-4xl">{bookName}</h2>
                        <p className='font-work-sans '>By: {author}</p>
                        <hr className='border-dashed bg-[#13131326]' />
                        <div className='flex flex-row justify-between items-center font-work-sans '>
                            <span>{category}</span>
                            <span className='flex flex-row gap-1 '><CiStar className='text-xl'></CiStar> {rating}</span>
                        </div>


                    </div>
                </div>
            </NavLink>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
};

export default Book;