import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";

const Layout = () => (
  <>
    <NavBar title="FindTime" />
    <Outlet />
  </>
);

export default Layout;
