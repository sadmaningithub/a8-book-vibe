import { NavLink } from 'react-router-dom';
import banner from '../../assets/img/banner.png'

const Banner = () => {
    return (
        <div>
            <div>
                <div className=" ">
                    <div className="flex flex-row justify-between items-center min-w-96 bg-[#1313130D] rounded-3xl py-20 px-28">
                        <div className="space-y-12">
                            <h1 className="text-5xl font-playfair font-bold">Books to freshen up <br /> your bookshelf</h1>
                            <NavLink to='/listed' className="btn btn-primary font-work-sans">View The List</NavLink>
                        </div>
                        <img src={banner} className="max-w-sm rounded-lg " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;