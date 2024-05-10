import { Routes, Route } from "react-router-dom";
import Signin from "../Pages/Signin";
import Home from "../Pages/Home";

export default function AppRoutes() {
  return(
    <Routes>
      <Route path="/login" element={<Signin />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}