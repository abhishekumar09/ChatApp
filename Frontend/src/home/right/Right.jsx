import React from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";

function Right() {
  return (
    <div className="w-[70%] border  bg-slate-950
     text-white">
     
     <Chatuser></Chatuser>
     <Messages></Messages>
     </div>
  );
}

export default Right;
