import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { authContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2'

const AddItems = () => {

    const { user } = useContext(authContext);

    const [selectedDate, setSelectedDate]=useState(new Date());

    const handleSubmit = e =>{
        e.preventDefault();
        const postType = e.target.postType.value; 
        const thumbnail = e.target.thumbnail.value;
        const title = e.target.title.value;
        const description = e.target.description.value;
        const category = e.target.category.value;
        const location = e.target.location.value;
        const date = e.target.dateLost.value;
        const userEmail = e.target.userEmail.value;
        const displayName = e.target.displayName.value;

        const newItems = {
            postType,
            thumbnail,
            title,
            description,
            category,
            location,
            date,
            userEmail,
            displayName,
        };

        // send data to the server
        fetch('http://localhost:3000/addItems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Corrected header key
            },
            body: JSON.stringify(newItems), // Sending the newCampaign object as JSON
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: "Good job!",
                        text: "Successfully added Item",
                        icon: "success",
                    });
                    // Clear all fields using form reset
                    e.target.reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error); // Handle any network errors
            });
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-semibold mb-4">Add Lost & Found Item</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Post Type */}
                <div>
                    <label className="block font-semibold mb-2">Post Type</label>
                    <select name="postType" className="border p-2 rounded w-full" defaultValue="Lost">
                        <option value="Lost">Lost</option>
                        <option value="Found">Found</option>
                    </select>
                </div>

                {/* Thumbnail */}
                <div>
                    <label className="block font-semibold mb-2">Thumbnail</label>
                    <input
                        type="text"
                        name="thumbnail"
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>

                {/* Title */}
                <div>
                    <label className="block font-semibold mb-2">Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter title"
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block font-semibold mb-2">Description</label>
                    <textarea
                        name="description"
                        placeholder="Enter description"
                        className="border p-2 rounded w-full"
                        rows="2"
                        required
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block font-semibold mb-2">Category</label>
                    <select name="category" className="border p-2 rounded w-full" defaultValue="pets">
                        <option value="Pets">Pets</option>
                        <option value="Documents">Documents</option>
                        <option value="Gadgets">Gadgets</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                {/* Location */}
                <div>
                    <label className="block font-semibold mb-2">Location</label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Enter location"
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>

                {/* Date Lost */}
                <div>
                    <label className="block font-semibold mb-2">Date Lost</label>
                    <DatePicker
                        name="dateLost"
                        selected={selectedDate}
                        onChange={date=>setSelectedDate(date)}
                        className="border p-2 rounded w-full"
                        dateFormat="yyyy-MM-dd"
                    />
                </div>

                {/* Contact Information */}
                <div>
                    <label className="block font-semibold mb-2">Contact Information</label>
                    <input
                        type="text"
                        name="displayName"
                        value={user.displayName}
                        readOnly
                        className="border p-2 rounded w-full bg-gray-100"
                    />
                    <input
                        type="email"
                        name="userEmail"
                        value={user.email}
                        readOnly
                        className="border p-2 rounded w-full bg-gray-100 mt-2"
                    />
                </div>

                {/* Add Post Button */}
                <div>
                    <button type="submit" className="bg-[#2ecc71] text-white px-6 py-2 rounded hover:bg-[#1ebb9e] transition">Add Post</button>
                </div>
            </form>
        </div>
    );
};

export default AddItems;