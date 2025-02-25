import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", formData);
            alert("Login successful!");
            localStorage.setItem("token", res.data.token);
        } catch (err) {
            alert(err.response.data.msg);
        }
    };

    return (
        <>
            <Navbar />
            <div className="h-screen flex items-center justify-center">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96 text-center">
                    <h2 className="text-2xl font-bold mb-4">User Login</h2>
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
                    <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Login</button>
                </form>
            </div>
        </>
    );
}

export default LoginPage;
