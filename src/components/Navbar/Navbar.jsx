import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user, logoutUser } = useContext(authContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const navigate = useNavigate();

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);


    const handleLogout = () => {
        logoutUser()
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.error("Logout failed:", error);
            });
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const closeMenus = () => {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* Fixed Navbar */}
            <div className="fixed lg:w-[85%] w-full mx-auto bg-white dark:bg-gray-900 z-50">
                <div className="container mx-auto flex justify-between items-center py-4 lg:px-0 px-3 border-b-2">
                    {/* Website Name */}
                    <NavLink to="/" className="font-semibold text-2xl  dark:text-white hover:text-[#6666F2]">
                        WhereIsIt
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-6 items-center">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#6666F2] font-semibold border-b-2 border-[#6666F2] dark:text-white"
                                    : "text-gray-700 hover:text-[#6666F2] dark:text-white"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/allItems"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#6666F2] font-semibold border-b-2 border-[#6666F2] dark:text-white"
                                    : "text-gray-700 hover:text-[#6666F2] dark:text-white"
                            }
                        >
                            Lost and Found Items
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#6666F2] font-semibold border-b-2 border-[#6666F2] dark:text-white"
                                    : "text-gray-700 hover:text-[#6666F2] dark:text-white"
                            }
                        >
                            Contact Us
                        </NavLink>
                    </div>

                    {/* User Section */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            className="p-2 bg-gray-200 dark:bg-gray-800 rounded hidden lg:block"
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>
                        {user ? (
                            <div className="relative flex items-center gap-3">
                                {/* Profile Picture */}
                                <img
                                    className="w-10 h-10 hidden lg:block rounded-full cursor-pointer border border-gray-200"
                                    src={user.photoURL}
                                    alt="User Profile"
                                    onClick={toggleDropdown}
                                    title={user.displayName}
                                />

                                {/* Dropdown */}
                                {isDropdownOpen && (
                                    <div className="absolute top-12 lg:right-0 -right-40 bg-white shadow-md rounded p-4 flex-col gap-2 items-start w-56 z-50">
                                        <NavLink
                                            to="/addItems"
                                            className="block px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
                                            onClick={closeMenus}
                                        >
                                            Add Lost & Found Item
                                        </NavLink>
                                        <NavLink
                                            to="/allRecovered"
                                            className="block px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
                                            onClick={closeMenus}
                                        >
                                            All Recovered Items
                                        </NavLink>
                                        <NavLink
                                            to="/myItems"
                                            className="block px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
                                            onClick={closeMenus}
                                        >
                                            Manage My Items
                                        </NavLink>
                                    </div>
                                )}

                                {/* Logout Button */}
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        closeMenus();
                                    }}
                                    className="px-4 py-2 hidden lg:block text-white bg-[#6666F2] rounded hover:bg-[#6666F2] transition"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            // Login Button
                            <div className="lg:flex gap-3 items-center hidden ">
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "px-5 py-2 border bg-[#6666F2] text-white rounded"
                                            : "px-5 py-2 border bg-white text-gray-700 border-[#6666F2] hover:bg-[#6666F2] hover:text-white rounded"
                                    }
                                >
                                    Log in
                                </NavLink>
                            </div>
                        )}
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <div className="md:hidden flex gap-3 items-center">
                    <button
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>
                        {/* profile images */}
                        {
                            user ? (
                                <img
                                    className="w-10 h-10 rounded-full cursor-pointer border border-gray-200"
                                    src={user?.photoURL}
                                    alt="User Profile"
                                    onClick={toggleDropdown}
                                    title={user?.displayName}
                                />
                            ) : (
                                ""
                            )
                        }
                        <button
                            className="text-gray-700 focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white shadow-md px-5 py-3">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "block py-2 text-[#6666F2] font-semibold" : "block py-2 text-gray-700 hover:text-[#6666F2]"
                            }
                            onClick={closeMenus}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/allItems"
                            className={({ isActive }) =>
                                isActive ? "block py-2 text-[#6666F2] font-semibold" : "block py-2 text-gray-700 hover:text-[#6666F2]"
                            }
                            onClick={closeMenus}
                        >
                            Lost and Found Items
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "block py-2 text-[#6666F2] font-semibold" : "block py-2 text-gray-700 hover:text-[#6666F2]"
                            }
                            onClick={closeMenus}
                        >
                            contact us
                        </NavLink>
                        {
                            user ? (
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        closeMenus();
                                    }}
                                    className="px-4 py-2 text-white bg-[#6666F2] rounded hover:bg-[#6666F2] transition"
                                >
                                    Logout
                                </button>
                            ) : (
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "px-5 py-2 border bg-[#6666F2] border-[#6666F2] text-white rounded"
                                            : "px-5 py-2 border bg-white text-gray-700 border-[#6666F2] hover:bg-[#6666F2] hover:text-white rounded"
                                    }
                                >
                                    Log in
                                </NavLink>
                            )
                        }
                    </div>
                )}
            </div>

            {/* Push content down to prevent it from being hidden behind the navbar */}
            <div className="pt-16"></div>
        </>
    );
};

export default Navbar;