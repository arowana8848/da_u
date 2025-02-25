import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Signup() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
            alert(res.data.msg);
        } catch (err) {
            alert(err.response.data.msg);
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
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Sign Up</button>
                </form>
            </div>
        </>
    );
}

export default Signup;
