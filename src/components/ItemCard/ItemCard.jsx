import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";


const ItemCard = ({ item }) => {
    return (
        <div className="">
            <div className="relative border rounded-lg shadow-md p-4">
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full object-cover rounded-md mb-4"
                />
                <p className="absolute top-5 left-5 text-xl border border-red-600 bg-gray-600 px-3 py-1 rounded-lg text-white">{item.postType}</p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-sm flex items-center gap-2"><IoLocationOutline size={15} /> {item.location}</p>
                <button className="mt-3 px-4 py-2 bg-[#2ecc71] text-white rounded hover:bg-[#1ebb9e]">
                    View Details
                </button>
            </div>
        </div>
    );
};

ItemCard.propTypes = {
    item: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        postType: PropTypes.string.isRequired,
    }).isRequired,
};

export default ItemCard;
