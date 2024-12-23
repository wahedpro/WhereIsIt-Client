import { useLoaderData, useNavigate } from "react-router-dom";
import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";
import HowItWorks from "../components/HowItWorks/HowItWorks";

const HomePage = () => {
    const navigate = useNavigate();
    const items = useLoaderData();
    // Sort items by the most recent date
    const sortedItems = items
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 6); // Limit to 6 items

    return (
        <div>
            <Banner></Banner>

            <div>
                <div className="py-10 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Latest Find & Lost Items
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {sortedItems.map((item) => (
                                <div
                                    key={item._id}
                                    className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                >
                                    {/* Thumbnail */}
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="p-4">
                                        {/* Title */}
                                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                        {/* Location */}
                                        <p className="text-sm text-gray-500 mb-2">
                                            <strong>Location:</strong> {item.location}
                                        </p>
                                        {/* Date */}
                                        <p className="text-sm text-gray-500 mb-4">
                                            <strong>Date:</strong>{" "}
                                            {new Date(item.date).toLocaleDateString()}
                                        </p>
                                        {/* View Details Button */}
                                        <button
                                            onClick={() => navigate(`/items/${item._id}`)}
                                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* See All Button */}
                        <div className="mt-8 text-center">
                            <button
                                onClick={() => navigate("/allItems")}
                                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                            >
                                See All
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <HowItWorks></HowItWorks>
            <AboutUs></AboutUs>
        </div>
    );
};

export default HomePage;