import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-3">
            <h1 className="text-2xl"><NavLink to='/'>WhereIsIt</NavLink></h1>
            <div className="flex gap-2 items-center">
                <p>Home</p>
                <p>Found Items Page</p>
            </div>
            <div className="flex gap-2">
                <button className="px-5 py-2 border"><NavLink to='/register'>Register</NavLink></button>
                <button className="px-5 py-2 border"><NavLink to='/login'>Login</NavLink></button>
            </div>
        </div>
    );
};

export default Navbar;