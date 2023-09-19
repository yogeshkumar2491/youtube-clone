import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  MdOutlineNotificationAdd,
  MdOutlineEmergencyRecording,
} from "react-icons/md";
import { YOUTUBE_SEARCH_API } from "../../utils/constants";
import { cacheResults } from "../../utils/store/searchSlice";
import { toggleMenu } from "../../utils/store/appSlice";

const Head = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search_query") ? searchParams.get("search_query") : ""
  );
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    //API Call ==> make an API call after every keypress
    //but if difference between 2 api calls is <=200ms then decline the API call
    searchCache[searchQuery] && setSuggestions(searchCache[searchQuery]);
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    //update cache
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => dispatch(toggleMenu());

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/8182/8182885.png"
          alt="menu-icon"
        />

        <a href="/">
          <img
            className="h-16 -my-4 mx-2"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt="youtube-logo"
          />
        </a>
      </div>

      <div className="col-span-9 px-15 ml-40">
        <form onSubmit={() => setShowSuggestion(false)}>
          <div>
            <input
              className="w-[60%] border border-gray-400 px-5 p-2 rounded-l-full"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => {
                setShowSuggestion(true);
              }}
              onBlur={() => {
                setTimeout(() => setShowSuggestion(false), 200);
              }}
            />
            <Link
              onClick={(event) => !searchQuery && event.preventDefault()}
              to={"results/?search_query=" + searchQuery}
            >
              <button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full">
                🔍
              </button>
            </Link>
          </div>

          {showSuggestion && (
            <div className="fixed absolute bg-white px-2 py-2 w-[32rem] shadow-lg rounded-lg border border-gray-100">
              <ul>
                {suggestions.map((s, index) => (
                  <Link key={s} to={"results/?search_query=" + s}>
                    <li className="py-2 px-3 shadow-sm hover:bg-gray-100">
                      🔍 {s}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>

      <div className="col-span-2 flex justify-evenly">
        <MdOutlineEmergencyRecording className="text-3xl" />
        <MdOutlineNotificationAdd className="text-3xl " />
        <img
          className="h-8"
          src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
