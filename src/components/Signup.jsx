import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [loading, setLoading] = useState(false);
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        setLoading(true);

        try {
            const res = await axios.post("http://localhost:5000/api/auth/signup", {
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password
            });

            alert(res.data.msg);
            navigate("/login"); // Redirect to login page
        } catch (err) {
            alert(err.response?.data?.msg || "Signup failed. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="h-screen flex items-center justify-center">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96 text-center">
                    <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
                    <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
                    <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded" disabled={loading}>
                        {loading ? "Signing up..." : "Sign Up"}
                    </button>
                </form>
            </div>
        </>
    );
}

export default Signup;
