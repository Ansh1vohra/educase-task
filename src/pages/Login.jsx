import { useNavigate, Link } from "react-router";
import { useState } from "react";

export default function Login() {
    const nav = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
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
        
        // Generate name from email (part before @)
        const nameFromEmail = formData.email.split('@')[0];
        // Capitalize first letter
        const formattedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
        
        // Store in localStorage
        localStorage.setItem("popx-user-data", JSON.stringify({
            name: formattedName,
            email: formData.email
        }));
        
        nav('/dashboard');
    };

    return (
        <div className="h-[100vh] w-md bg-slate-100 p-8">
            <h2 className="text-3xl font-semibold mb-4">Sign in to your PopX account</h2>
            <p className="text-lg text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <form className="my-6" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                        Email Address
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

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <button
                    className="w-full cursor-pointer bg-violet-600 text-white p-3 rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-colors"
                    type="submit"
                >
                    Login
                </button>
                <div className="py-4 text-blue-500">
                    <Link to="/register">Haven't Registered Yet? Register</Link>
                </div>
            </form>
        </div>
    );
}