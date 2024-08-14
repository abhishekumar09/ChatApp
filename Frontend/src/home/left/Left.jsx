import React from "react";
import Search from "./Search";
import Users from "./Users";

function Left() {
  return (
    <div className="w-[30%] border  bg-black 
    text-white">
      <h1 className="font-bold text-3xl p-2 px-11">Chats</h1>
    <Search></Search>
    <hr></hr>
    <Users></Users>
    
    
    </div>
  );
}

export default Left;
