import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"
import Signup from "./components/Signup"
import AdminLogin from "./components/AdminLogin"
import AdminDashboard from "./components/AdminDashboard"
import Staff from "./components/Staff"
import ExpenseTracker from "./components/ExpenseTracker"
import GoalSetup from "./components/GoalSetup";
import IDStorage from "./components/IDStorage";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/admin-login" element={<AdminLogin/>}/>
          <Route path="/dashboard" element={<AdminDashboard/>}/>
          <Route path="/staff" element={<Staff/>}/>

          <Route path="/expense-tracker" element={<ExpenseTracker/>} />
          <Route path="/goal-setup" element={<GoalSetup/>} />
          <Route path="/view-idpw" element={<IDStorage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App