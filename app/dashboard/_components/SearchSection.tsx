import { Search } from "lucide-react";
import React from "react";

function SearchSection() {
  return (
    <div className="p-10 bg-gradient-to-br from-purple-500  via-purple-700 to-blue-500 flex flex-col justify-center items-center  ">
      <h2 className="text-3xl text-white font-bold">Browse All templates</h2>
      <p className="text-white text-pretty">
        What woud you like to create today?
      </p>
      <div className="w-full flex items-center">
        <div className="flex gap-2 items-center p-2 border rounded-md my-5 w-[30%] ">
          <Search className="text-primary" />
          <input type="text" placeholder="Search" className="bg-transparent w-full outline-none" />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
