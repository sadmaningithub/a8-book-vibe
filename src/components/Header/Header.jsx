import { NavLink } from "react-router-dom";
import "../../index.css"
import "../../assets/img/banner.png"

const Header = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listed">Listed Books</NavLink></li>
        <li><NavLink to="/read">Pages to Read</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 font-work-sans">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Book</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a className="btn mr-4">Sign Up</a>
                    <a className="btn">Sign In</a>
                </div>
            </div>

            <div>
                <div className=" ">
                    <div className="flex flex-row justify-between items-center min-w-96 bg-[#1313130D] rounded-3xl py-20 px-28">
                        <div className="space-y-12">
                            <h1 className="text-5xl font-bold">Books to freshen up <br/> your bookshelf</h1>
                            <NavLink to='/listed' className="btn btn-primary">View The List</NavLink>
                        </div>
                        <img src="/src/assets/img/banner.png" className="max-w-sm rounded-lg " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;