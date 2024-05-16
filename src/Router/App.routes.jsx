import { Routes, Route } from "react-router-dom";
import Signin from "../Pages/Signin";
import Layout from "../Components/Layout";
import OtherRepositories from "../Pages/OtherRepositories";
import MyRepositories from "../Pages/MyRepositories";
import SearchUsers from "../Pages/SearchUsers";
import PrivateRoutes from "../Components/PrivateRoute";

export default function AppRoutes() {
  return(
    <Routes>
      <Route path="*" element={<PrivateRoutes /> }/>

      <Route path="/login" element={
        <PrivateRoutes>
          <Signin />
        </PrivateRoutes>
      }/>

      <Route element={
        <PrivateRoutes>
          <Layout />
        </PrivateRoutes>
      }>
        <Route path="/my-repositories" element={<MyRepositories />} />
        <Route path="/others-repositories" element={<OtherRepositories />} />
        <Route path="/search-user" element={<SearchUsers />} />
      </Route>
    </Routes>
  )
}