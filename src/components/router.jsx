import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import { LoginForm } from "./LoginForm";
import { Main } from "./Main";
import Post from "./Post";
import SideNavbar from "./SideNavbar";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="./SideNavbar" element={SideNavbar}/>
        <Route path="./Main" element={Main} />      
      </Routes>
    </>
  );
}