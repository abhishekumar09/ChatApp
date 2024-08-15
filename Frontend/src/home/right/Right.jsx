import React from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Type from "./Type";

function Right() {
  return (
    <div
      className="w-[70%] border  bg-slate-950
     text-white"
    >
      <Chatuser></Chatuser>
      <div className="py-2 flex-abhi overflow-y-auto" style={{maxHeight: "calc(88vh - 8vh)"}}>
        <Messages></Messages>
      </div>
      <Type></Type>
    </div>
  );
}

export default Right;
