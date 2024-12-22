import { useLoaderData } from "react-router-dom";

const PostDetailsPage = () => {
    const item = useLoaderData();
    const { postType, thumbnail, title, description, category, location, date, userEmail, displayName } = item;

    return (
        <div className="py-5 px-5">
            <div className="flex">
                {/* Card Image */}
                <img src={thumbnail} alt={title} className="w-[40%] object-cover" />

                <div className="p-5">
                    {/* Card Content */}
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>
                    <p className="text-sm text-gray-500 mb-3"><strong>Post Type:</strong> {postType}</p>
                    <p className="text-sm text-gray-500 mb-3"><strong>Category:</strong> {category}</p>
                    <p className="text-sm text-gray-500 mb-3"><strong>Location:</strong> {location}</p>
                    <p className="text-md text-gray-700 mb-3"><strong>Description:</strong> {description}</p>
                    <p>Created By:</p>
                    <p className="text-sm text-gray-500 mb-3"><strong>Name</strong> {displayName}</p>
                    <p className="text-sm text-gray-500 mb-3"><strong>Email</strong> ({userEmail})</p>
                    <p className="text-sm text-gray-500"><strong>Date:</strong> {new Date(date).toLocaleDateString()}</p>

                    {/* Conditional Button */}
                    <button
                        className="mt-4 px-5 py-2 rounded bg-[#2ecc71] hover:bg-[#32b96b]">
                        {postType === "Lost" ? "Found This" : postType === "Found" ? "This is Mine" : "Take Action"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostDetailsPage;
