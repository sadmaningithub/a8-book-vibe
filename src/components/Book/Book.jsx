import PropTypes from 'prop-types';

const Book = ({ book }) => {

    const { image, tags, bookName, author, category, rating } = book

    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Book" className="rounded-xl" />
                </figure>
                <div className="card-body  text-center">
                    <div className='flex flex-row gap-4 '>
                        {
                            tags.map((tag, idx) => <p className='bg-slate-800 text-white rounded-md p-2' key={idx}>{tag}</p>)
                        }
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>{author}</p>
                    
                    <div className='flex flex-row justify-between items-center'>
                        <span>{category}</span>
                        <span>{rating}</span>
                    </div>


                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
};

export default Book;