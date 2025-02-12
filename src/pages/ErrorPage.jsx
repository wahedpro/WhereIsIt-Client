import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import useTitle from "../hooks/useTitle";

const ErrorPage = () => {
    useTitle('Error Page');

    return (
        <div className="flex flex-col items-center justify-center h-96 bg-gray-100 px-6 text-center">
            <img className="h-52 mb-5" src="404.svg" alt="" />
            <motion.p 
                className="text-xl text-gray-600 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                Oops! The page youre looking for doesnt exist.
            </motion.p>

            {/* Animated Button */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <NavLink 
                    to="/" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold transition duration-300 hover:bg-blue-700"
                >
                    Back to Home
                </NavLink>
            </motion.div>
        </div>
    );
};

export default ErrorPage;