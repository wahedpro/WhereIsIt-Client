import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Links Section */}
            <div className="flex flex-col items-center md:items-start">
                <h1 className="text-xl mb-4 font-bold">Links</h1>
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms Of Service</a>
                <a href="#" className="hover:underline">About</a>
                <a href="#" className="hover:underline">Contact</a>
                <a href="#" className="hover:underline">Support Center</a>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col items-center md:items-start">
                <h1 className="text-xl mb-4 font-bold">Contact With Us</h1>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-gray-200"><FaFacebook size={25} /></a>
                    <a href="#" className="hover:text-gray-200"><FaTwitter size={25} /></a>
                    <a href="#" className="hover:text-gray-200"><FaInstagram size={25} /></a>
                    <a href="#" className="hover:text-gray-200"><FaYoutube size={25} /></a>
                </div>
            </div>

            {/* Subscribe Section */}
            <div className="flex flex-col items-center md:items-start">
                <h1 className="text-xl mb-4 font-bold">Subscribe</h1>
                <p className="text-center md:text-left mb-4">
                    Join our newsletter to get the latest updates from us.
                </p>
                <input
                    className={'py-2 px-3 w-full max-w-xs border rounded-lg mb-4 focus:outline-none'}
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                />
                <button className="bg-white text-[#2ecc71] px-5 py-2 rounded-lg hover:bg-gray-200">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Footer;