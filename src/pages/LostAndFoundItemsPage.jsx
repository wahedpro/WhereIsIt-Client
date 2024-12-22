import { useLoaderData } from "react-router-dom";
import ItemCard from "../components/ItemCard/ItemCard";

const LostAndFoundItemsPage = () => {
    const items = useLoaderData();

    return (
        <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
                <ItemCard key={index} item={item} />
            ))}
        </div>
    );
};

export default LostAndFoundItemsPage;
