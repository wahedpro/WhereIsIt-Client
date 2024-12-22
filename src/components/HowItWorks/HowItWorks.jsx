const HowItWorks = () => {
    return (
        <div className="py-12 bg-white">
            <h2 className="text-2xl font-semibold text-center mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
                <div className="text-center">
                    <div className="mb-4">
                        <img src="https://via.placeholder.com/100" alt="Report Icon" className="mx-auto" />
                    </div>
                    <h3 className="font-semibold text-lg">Report an Item</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        Submit details about your lost or found item, including images, descriptions, and contact information.
                    </p>
                </div>
                <div className="text-center">
                    <div className="mb-4">
                        <img src="https://via.placeholder.com/100" alt="Browse Icon" className="mx-auto" />
                    </div>
                    <h3 className="font-semibold text-lg">Browse Listings</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        Search for items reported by others, filter by category, and check for matches.
                    </p>
                </div>
                <div className="text-center">
                    <div className="mb-4">
                        <img src="https://via.placeholder.com/100" alt="Connect Icon" className="mx-auto" />
                    </div>
                    <h3 className="font-semibold text-lg">Connect & Recover</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        Contact the person who reported the item and work together to recover it.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
