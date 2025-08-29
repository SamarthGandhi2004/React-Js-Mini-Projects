import React, { useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatHeader from "./components/ChatHeader";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import Landing from "./components/Landing";
import { Context } from "./context/Context";


function App() {
  const{showChat,setShowChat}=useContext(Context);
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <ChatHeader />
        {
          showChat?( <ChatMessages />):( <Landing />)
        }
       
        <ChatInput />
      </div>
    </div>
  );
}

export default App;
