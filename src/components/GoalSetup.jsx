import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GoalSetup() {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState("");
  const [goalDesc, setGoalDesc] = useState("");
  const [goalCost, setGoalCost] = useState("");
  const [goalSaving, setGoalSaving] = useState("");
  const navigate = useNavigate();

  const addGoal = (e) => {
    e.preventDefault();
    const newGoal = { goal, goalDesc, goalCost, goalSaving };
    setGoals([...goals, newGoal]);
    setGoal("");
    setGoalDesc("");
    setGoalCost("");
    setGoalSaving("");
  };

  const deleteGoal = (index) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      {/* Back Button at the Top */}
      <button
        onClick={() => navigate("/home")}
        className="self-start bg-gray-700 text-white px-4 py-2 rounded mb-4 hover:bg-gray-800"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">Enter Your Goals Here</h1>

      <form onSubmit={addGoal} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4">
        <div>
          <label className="block font-semibold">Goal:</label>
          <input type="text" className="w-full p-2 border rounded" value={goal} onChange={(e) => setGoal(e.target.value)} required />
        </div>

        <div>
          <label className="block font-semibold">Description:</label>
          <input type="text" className="w-full p-2 border rounded" value={goalDesc} onChange={(e) => setGoalDesc(e.target.value)} />
        </div>

        <div>
          <label className="block font-semibold">Costing (NPR):</label>
          <input type="number" className="w-full p-2 border rounded" value={goalCost} onChange={(e) => setGoalCost(e.target.value)} required />
        </div>

        <div>
          <label className="block font-semibold">Expected Saving (NPR):</label>
          <input type="number" className="w-full p-2 border rounded" value={goalSaving} onChange={(e) => setGoalSaving(e.target.value)} required />
        </div>

        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Set Goal</button>
      </form>

      <h3 className="text-2xl font-bold mt-8">Goal List</h3>
      <table className="w-full max-w-2xl mt-4 bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-3">Goal</th>
            <th className="p-3">Description</th>
            <th className="p-3">Cost (NPR)</th>
            <th className="p-3">Expected Saving (NPR)</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {goals.map((g, index) => (
            <tr key={index} className="border-t">
              <td className="p-3">{g.goal}</td>
              <td className="p-3">{g.goalDesc}</td>
              <td className="p-3">{g.goalCost}</td>
              <td className="p-3">{g.goalSaving}</td>
              <td className="p-3">
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={() => deleteGoal(index)}>
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
