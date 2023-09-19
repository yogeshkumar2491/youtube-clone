import Sidebar from "../common/Sidebar";
import Head from "../common/Head";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <Head />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
