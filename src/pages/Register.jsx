import { useNavigate, Link } from "react-router";
import { useState } from "react";

export default function Register() {
    const nav = useNavigate();
    const [formData, setFormData] = useState({
        fullname: "",
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("popx-user-data", JSON.stringify({
            name: formData.fullname,
            email: formData.email
        }));
        nav('/dashboard');
    };

    return (
        <div className="h-[100vh] w-md bg-slate-100 p-8">
            <h2 className="text-3xl font-semibold mb-4">Create your PopX account</h2>
            <form className="my-6" onSubmit={handleSubmit}>
            <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="fullname">
                        Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                        id="fullname"
                        name="fullname"
                        type="text"
                        placeholder="Marry Doe"
                        required
                        value={formData.fullname}
                        onChange={handleChange}
                    />
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-medium mb-1" for="phone">
                        Phone number<span class="text-red-500">*</span>
                    </label>
                    <input
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                        id="phone"
                        type="tel"
                        placeholder="Marry Doe"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                        Email Address<span className="text-red-500">*</span>
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter email address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-medium mb-2" for="password">
                        Password<span class="text-red-500">*</span>
                    </label>
                    <input
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                        id="password"
                        type="password"
                        placeholder="Enter password"
                        required
                    />
                </div>

                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-medium mb-1" for="company">
                        Company name
                    </label>
                    <input
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                        id="company"
                        type="text"
                        placeholder="Marry Doe"
                    />
                </div>

                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-medium mb-2">
                        Are you an Agency?<span class="text-red-500">*</span>
                    </label>
                    <div class="flex space-x-4">
                        <label class="inline-flex items-center">
                            <input
                                type="radio"
                                name="agency"
                                value="yes"
                                class="h-4 w-4 text-violet-600 focus:ring-violet-500"
                                required
                            />
                            <span class="ml-2 text-gray-700">Yes</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input
                                type="radio"
                                name="agency"
                                value="no"
                                class="h-4 w-4 text-violet-600 focus:ring-violet-500"
                            />
                            <span class="ml-2 text-gray-700">No</span>
                        </label>
                    </div>
                </div>

                <button
                    class="w-full cursor-pointer bg-violet-600 text-white p-3 rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-colors"
                    type="submit"
                >
                    Register
                </button>
                <div className="py-4 text-blue-500">
                    <Link to="/login">Already Registered? Login</Link>
                </div>
            </form>
        </div>
    )
}