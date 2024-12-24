import { useContext, useEffect, useState } from "react";
import { authContext } from "../provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AllRecoveredItemsPage = () => {
    const { user } = useContext(authContext);
    const { email } = user;

    const axiosSecure = useAxiosSecure()

    const [receivedItems, setReceivedItems] = useState([]);

    useEffect(()=>{
        axiosSecure.get(`/addRecoveredItemInfo?email=${email}`)
        .then(res => setReceivedItems(res.data))
    },[email])

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