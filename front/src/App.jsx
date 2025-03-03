import React from "react";
import { BrowserRouter as Router, Route,Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "../componenetsTest/LandingPage";
import SignupPage from "./pages/SignUpPage";
const App = () => {
  return(
    <Router>
    <Routes>
      <Route path="/" element={<Navigate to='/login' replace/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
    </Routes>
  </Router>
  )
}
export default App;