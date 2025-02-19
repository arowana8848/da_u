import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function ExpenseTracker() {
  const navigate = useNavigate(); // Initialize navigation hook
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("Entertainment");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const addExpense = (e) => {
    e.preventDefault();
    setExpenses([...expenses, { category, description, price, date }]);
    setCategory("Entertainment");
    setDescription("");
    setPrice("");
    setDate("");
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")} // Navigates back to Home.jsx
        className="self-start bg-gray-700 text-white px-4 py-2 rounded mb-4 hover:bg-gray-800"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold text-gray-800 mb-4">Track Your Expenditure</h1>
      <form
        className="bg-white p-6 shadow-md rounded-lg w-full max-w-md"
        onSubmit={addExpense}
      >
        <label className="block font-semibold">Category:</label>
        <select
          className="w-full p-2 border rounded mt-1"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Entertainment">Entertainment</option>
          <option value="Shopping">Shopping</option>
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>

        <label className="block font-semibold mt-3">Description:</label>
        <textarea
          className="w-full p-2 border rounded mt-1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label className="block font-semibold mt-3">Expense Price (NPR):</label>
        <input
          type="number"
          className="w-full p-2 border rounded mt-1"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label className="block font-semibold mt-3">Date:</label>
        <input
          type="date"
          className="w-full p-2 border rounded mt-1"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600">
          Add Expense
        </button>
      </form>

      <table className="w-full max-w-2xl mt-6 bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Description</th>
            <th className="p-3 text-left">Price (NPR)</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index} className="border-t">
              <td className="p-3">{expense.category}</td>
              <td className="p-3">{expense.description}</td>
              <td className="p-3">{expense.price}</td>
              <td className="p-3">{expense.date}</td>
              <td className="p-3">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => deleteExpense(index)}
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
