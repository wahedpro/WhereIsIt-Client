
const AboutUs = () => {
    return (
        <div className="about-section bg-gray-100 py-16 px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-center md:justify-between">
                {/* Image Section */}
                <div className="relative w-full md:w-1/2">
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Product"
                        className="rounded-lg shadow-md"
                    />
                    {/* Monthly Members Badge */}
                    <div className="absolute top-4 left-4 bg-white px-4 py-2 shadow rounded text-gray-800">
                        <p className="font-bold text-lg">5000+</p>
                        <p className="text-sm">Monthly Members</p>
                    </div>
                    {/* Reviews Badge */}
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 shadow rounded text-gray-800">
                        <p className="font-bold text-lg">8000+ Reviews</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="mt-8 md:mt-0 md:ml-12 md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">About Us</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Welcome to AU Natural Organics. We are an organic store creating natural, organic beauty products that nurture and beautify your skin in a healthy way. We offer the healthiest, purest, and most effective organic skincare products, so you can shop confidently.
                    </p>
                    <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
                        Explore
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;