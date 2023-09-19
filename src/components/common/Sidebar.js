import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineVideoCamera,
  AiOutlineHistory,
} from "react-icons/ai";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineSubscriptions, MdOutlineWatchLater } from "react-icons/md";
import { BiLibrary } from "react-icons/bi";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return !isMenuOpen ? null : (
    <div className="col-span-2 p-5 shadow-lg  h-screen">
      <ul>
        <li className="flex py-2 pl-1 hover:bg-gray-200 rounded-lg font-bold">
          <AiOutlineHome className="text-xl mr-4" />
          <Link to="/">Home</Link>
        </li>

        <li className="flex py-1 pl-1 hover:bg-gray-200 rounded-lg ">
          <CiYoutube className="text-xl mr-4" />
          Shorts
        </li>

        <li className="flex py-1 pl-1 hover:bg-gray-200 rounded-lg ">
          <AiOutlineVideoCamera className="text-xl mr-4" />
          Videos
        </li>
      </ul>

      <hr className="mt-2"></hr>

      <ul>
        <li className="flex py-1 pl-1 pt-3 hover:bg-gray-200 rounded-lg ">
          <MdOutlineSubscriptions className="text-xl mr-4" />
          Subscriptions
        </li>
        <li className="flex py-1 pl-1 hover:bg-gray-200 rounded-lg ">
          <BiLibrary className="text-xl mr-4" />
          Library
        </li>
        <li className="flex py-1 pl-1  hover:bg-gray-200 rounded-lg ">
          <AiOutlineHistory className="text-xl mr-4" />
          History
        </li>
        <li className="flex py-1 pl-1  hover:bg-gray-200 rounded-lg ">
          <MdOutlineWatchLater className="text-xl mr-4" />
          Watch Later
        </li>
      </ul>

      <hr className="mt-2"></hr>

      <h1 className="pt-5 font-bold pb-2">Subscriptions</h1>
      <ul>
        <li className="flex py-2 pl-2  hover:bg-gray-200 rounded-lg ">
          <a
            className="flex"
            rel="noreferrer"
            href="https://www.youtube.com/@akshaymarch7"
            target="_blank"
          >
            <img
              alt="Akshay Saini"
              className="mr-4 w-6 rounded-md"
              src="https://yt3.ggpht.com/ytc/AOPolaSj48pypV9ilqNUztYjQ8Q760NYCAw3w1LwoWbJYQ=s88-c-k-c0x00ffffff-no-rj"
            />
            Akshay Saini
          </a>
        </li>
        <li className="flex py-2 pl-2  hover:bg-gray-200 rounded-lg ">
          <a
            className="flex"
            rel="noreferrer"
            href="https://www.youtube.com/@chaiaurcode"
            target="_blank"
          >
            <img
              alt=" Chai aur Code"
              className="mr-4 w-6 rounded-md"
              src="https://yt3.ggpht.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s88-c-k-c0x00ffffff-no-rj"
            />
            Chai/Code
          </a>
        </li>
        <li className="flex py-2 pl-2  hover:bg-gray-200 rounded-lg ">
          <a
            className="flex"
            rel="noreferrer"
            href="https://www.youtube.com/@ByteGrad"
            target="_blank"
          >
            <img
              alt="ByteGrad"
              className="mr-4 w-6 rounded-md"
              src="https://yt3.ggpht.com/0TGYwRSjCshcMBsT7Ir3s4dm_X8SZohmuK7lCgR2_Hwjqq8yELeLNxCpeXLH10-UwWeBnrIE=s88-c-k-c0x00ffffff-no-rj"
            />
            ByteGrad
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
