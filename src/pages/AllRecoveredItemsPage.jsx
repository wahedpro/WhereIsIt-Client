import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const AllRecoveredItemsPage = () => {
    const data = useLoaderData();
    const { user } = useContext(authContext);
    const { email } = user;

    // Filter items added by the logged-in user
    const receivedItems = data.filter((item) => item.recoveredUserEmail === email);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-6">All Recovered Items</h1>
            {receivedItems.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Thumbnail</th>
                                <th className="border border-gray-300 px-4 py-2">Title</th>
                                <th className="border border-gray-300 px-4 py-2">Recovered Location</th>
                                <th className="border border-gray-300 px-4 py-2">Recovered Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {receivedItems.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-2">
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.recoveredLocation}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {new Date(item.recoveredDate).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center mt-6">
                    <p className="text-lg text-gray-600">
                        You have not recovered any items yet.
                    </p>
                </div>
            )}
        </div>
    );
};

export default AllRecoveredItemsPage;
