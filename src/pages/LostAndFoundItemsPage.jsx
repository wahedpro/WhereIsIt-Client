import ItemCard from "../components/ItemCard/ItemCard";
import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";

const LostAndFoundItemsPage = () => {

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('')

    // https://where-is-it-server-six.vercel.app/addItems

    useEffect(() => {
        const fetchAllItems = async () => {
            const { data } = await axios.get(`http://localhost:3000/allItems?search=${search}`);
            setItems(data)
        }
        fetchAllItems()
    }, [search])

    return (
        <div>
            {/* Search Controls */}
            <div className="flex lg:w-[80%] mx-auto justify-center gap-4 items-center pt-4 px-5">
                {/* Search Type Dropdown */}
                {/* Search Input */}
                <div className="flex w-[full] sm:w-3/4 items-center relative">
                    <input
                        type="text"
                        placeholder={`Search by title or location`}
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6666F2]"
                    />
                    <button className="bg-[#6666F2] px-3 py-2 text-white rounded-md absolute right-1 sm:right-1">
                        <IoMdSearch size={20} />
                    </button>
                </div>
            </div>


            {/* show product */}
            <div className="w-[95%] mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <ItemCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default LostAndFoundItemsPage;