import { useState, useRef, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import userImg from "../assets/user.jpg";

export default function Dashboard() {
    const [image, setImage] = useState(userImg);
    const [userData, setUserData] = useState({
        name: "Marry Doe",
        email: "marry@gmail.com"
    });
    const fileInputRef = useRef(null);

    useEffect(() => {
        const storedData = localStorage.getItem("popx-user-data");
        if (storedData) {
            setUserData(JSON.parse(storedData));
        }
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 2 * 1024 * 1024) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else if (file) {
            alert("Please select an image smaller than 2MB");
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="h-[100vh] w-md bg-slate-100">
            <div className="bg-neutral-100 p-8 text-2xl font-semibold">Account Settings</div>
            <div className="p-8">
                <div className="flex gap-6 items-center">
                    <div className="relative">
                        <img
                            src={image}
                            alt="user"
                            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                        />
                        <button
                            onClick={handleImageClick}
                            className="absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full text-white shadow hover:bg-purple-700 transition"
                        >
                            <FaCamera size={16} />
                        </button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            accept="image/*"
                            className="hidden"
                        />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700 mb-1">{userData.name}</h2>
                        <h2 className="text-lg font-semibold text-gray-700 mb-1">{userData.email}</h2>
                    </div>
                </div>

                <div className="my-6">
                    <p className="text-gray-700 mb-1">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elit, Sed Diam Nonumy Eirmod Tempor Invidunt Utads
                    </p>
                </div>
                <div className="h-px bg-gray-200 my-2"></div>
            </div>
        </div>
    );
}
