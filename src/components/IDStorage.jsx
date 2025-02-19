import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function IDStorage() {
  const [platform, setPlatform] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  // Load data from localStorage
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("idpwEntries")) || [];
    setEntries(savedEntries);
  }, []);

  // Save to localStorage when entries update
  useEffect(() => {
    localStorage.setItem("idpwEntries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = (e) => {
    e.preventDefault();
    const newEntry = { platform, userId, password };
    setEntries([...entries, newEntry]);
    setPlatform("");
    setUserId("");
    setPassword("");
  };

  const deleteEntry = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      {/* Back Button */}
      <button
        onClick={() => navigate("/home")}
        className="self-start bg-gray-700 text-white px-4 py-2 rounded mb-4 hover:bg-gray-800"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">Store Your ID and Passwords</h1>

      {/* Form */}
      <form onSubmit={addEntry} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4">
        <div>
          <label className="block font-semibold">Platform:</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-semibold">User ID:</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Password:</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Add Entry
        </button>
      </form>

      {/* Table */}
      <h3 className="text-2xl font-bold mt-8">Stored IDs & Passwords</h3>
      <table className="w-full max-w-2xl mt-4 bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-3">Platform</th>
            <th className="p-3">User ID</th>
            <th className="p-3">Password</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} className="border-t">
              <td className="p-3">{entry.platform}</td>
              <td className="p-3">{entry.userId}</td>
              <td className="p-3">{entry.password}</td>
              <td className="p-3">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => deleteEntry(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
