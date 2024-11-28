import React from "react";

function VideoHeader() {
  return (
    <header className="w-11/12 mx-auto mt-8">
      <nav className="flex md:flex justify-between items-center mb-5">
        <div>
          <img src="./Assets/Logo.png" alt="logo" />
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2 h-8">
            <input id="search-btn" type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <button className="md:block hover:bg-[#ff1f3d6a] bg-[#FF1F3D] py-2 px-3 rounded-md text-white">
          Blog
        </button>
      </nav>
      <hr />
      <div id="category-btn" className="flex items-center justify-center py-2 px-4 gap-5"></div>
    </header>
  );
}

export default VideoHeader;
