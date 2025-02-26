import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function LoginPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(""); // Reset previous errors

        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", formData);
            
            // Store token & user details in localStorage
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            alert("✅ Login successful!");
            navigate("/home"); // ✅ Redirect to Home page after login
        } catch (err) {
            const errorMsg = err.response?.data?.msg || "❌ Login failed. Try again.";
            console.error("Login error:", errorMsg);
            setError(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="h-screen flex items-center justify-center bg-gray-100">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96 text-center">
                    <h2 className="text-2xl font-bold mb-4">User Login</h2>

                    {error && <p className="text-red-500 mb-2">{error}</p>}

                    <input 
                        type="email" name="email" placeholder="Email" value={formData.email} 
                        onChange={handleChange} className="w-full p-2 mb-2 border rounded" required 
                    />
                    
                    <input 
                        type="password" name="password" placeholder="Password" value={formData.password} 
                        onChange={handleChange} className="w-full p-2 mb-4 border rounded" required 
                    />
                    
                    <button 
                        type="submit" 
                        className={`w-full text-white p-2 rounded ${loading ? "bg-gray-500" : "bg-green-500 hover:bg-green-600 transition"}`}
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </>
    );
}

export default LoginPage;
