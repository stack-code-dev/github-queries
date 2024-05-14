import { Routes, Route } from "react-router-dom";
import Signin from "../Pages/Signin";
// import Home from "../Pages/SearchUsers";
import Layout from "../Components/Layout";
import OtherRepositories from "../Pages/OtherRepositories";
import MyRepositories from "../Pages/MyRepositories";
import SearchUsers from "../Pages/SearchUsers";

export default function AppRoutes() {
  return(
    <Routes>
      <Route path="/login" element={<Signin />} />
      {/* <Route path="/home" element={<Home />} /> */}
      
      <Route element={<Layout />}>
        <Route path="/my-repositories" element={<MyRepositories />} />
        <Route path="/others-repositories" element={<OtherRepositories />} />
        <Route path="/search-user" element={<SearchUsers />} />
      </Route>
    </Routes>
  )
}