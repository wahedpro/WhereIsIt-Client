import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user, logoutUser } = useContext(authContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                // Redirect to the home page after logout
                navigate("/");
            })
            .catch((error) => {
                console.error("Logout failed:", error);
            });
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <div>
            <div className="container mx-auto px-4 flex justify-between items-center border-b py-5">
                {/* Website Name */}
                <NavLink to="/" className="font-semibold text-2xl">WhereIsIt</NavLink>

                {/* Menu */}
                <div className="flex gap-4 items-center">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "text-[#2ecc71] font-semibold" : "")}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/allItems"
                        className={({ isActive }) => (isActive ? "text-[#2ecc71] font-semibold" : "")}
                    >
                        Load and Found Items
                    </NavLink>
                </div>

                {/* User Section */}
                <div className="flex items-center gap-4">
                    {user ? (
                        <div className="relative flex items-center gap-3">
                            {/* Profile Picture with Tooltip */}
                            <img
                                className="w-10 h-10 rounded-full cursor-pointer"
                                src={user.photoURL}
                                alt="User Profile"
                                onClick={toggleDropdown}
                                title={user.displayName}
                            />

                            {/* Dropdown */}
                            {isDropdownOpen && (
                                <div className="absolute top-12 right-0 bg-white shadow-md rounded p-4 flex-col gap-2 items-start w-40 z-50">
                                    {/* User Display Name */}
                                    <span className="block font-semibold text-gray-800">
                                        {user.displayName}
                                    </span>
                                    <hr className="my-2" />

                                    {/* Dropdown Links */}
                                    <NavLink
                                        to="/addItems"
                                        className="block px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
                                    >
                                        Add Lost & Found Item
                                    </NavLink>
                                    <NavLink
                                        to="/allRecovered"
                                        className="block px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
                                    >
                                        All Recovered Items
                                    </NavLink>
                                    <NavLink
                                        to="/myItems"
                                        className="block px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
                                    >
                                        Manage My Items
                                    </NavLink>
                                </div>
                            )}

                            {/* Logout Button */}
                            <button
                                onClick={handleLogout}
                                className="mt-2 text-white bg-[#2ecc71] px-4 py-2 rounded hover:bg-[#1ebb9e] transition w-full"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        // Login Button
                        <div className="flex gap-3 items-center">
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive
                                        ? "px-5 py-2 border bg-[#2ecc71] text-white rounded"
                                        : "px-5 py-2 border bg-white text-gray-700 rounded"
                                }
                            >
                                Log in
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;