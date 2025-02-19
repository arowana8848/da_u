import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4"
      style={{ backgroundImage: "url('abbs.jpg')" }}
    >
      {/* Header */}
      <div className="w-full bg-black bg-opacity-60 text-white text-center p-5 rounded-md">
        <h1 className="text-3xl font-bold uppercase tracking-wide">DA-U Dashboard</h1>
      </div>

      {/* Sidebar Navigation */}
      <div className="w-full flex justify-center gap-4 p-4 bg-black bg-opacity-60 mt-4 rounded-md shadow-md">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 transition duration-300"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/expense-tracker")}
          className="px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 transition duration-300"
        >
          Expense Tracker
        </button>
        <button
          onClick={() => navigate("/goal-setup")}
          className="px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 transition duration-300"
        >
          Goal Setup
        </button>
        <button
          onClick={() => navigate("/view-idpw")}
          className="px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 transition duration-300"
        >
          View ID/PW
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl mt-6 p-6 bg-black bg-opacity-70 text-white rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold uppercase">Welcome to DA-U!</h1>
          <p className="mt-4 text-lg">
            Manage your finances, track expenses, set financial goals, and store your IDs and passwords all in one place.
          </p>

          <div className="mt-6 space-y-6">
            {["Track Your Finances", "Set Financial Goals", "Manage Your IDs & Passwords"].map((section, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-md transition transform hover:scale-105"
              >
                <h2 className="text-2xl text-yellow-400 font-bold">{section}</h2>
                <p className="mt-2 text-gray-300">
                  Stay organized and take control of your daily financial activities.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
