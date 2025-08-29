import React, { useContext } from "react";
import { User, Bot } from "lucide-react";
import { Context } from "../context/Context";

function ChatMessages() {
  const{prevChat,recentPrompt,result}=useContext(Context)
  return (


    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {/* Bot Message */}

    
      <div className="max-w-[75%] ml-auto bg-blue-50 rounded-xl shadow-sm">
        <div className="flex items-start gap-2 p-3">
          <User className="w-5 h-5 mt-1 text-blue-600" />
          <p className="text-sm">{recentPrompt}</p>
        </div>
      </div>

    {/* {prevChat.map((p, idx) => (

<>
  <div key={idx}> */}
      <div className="max-w-[75%] mr-auto bg-white rounded-xl shadow-sm">
        <div className="flex items-start gap-2 p-3">
          <Bot className="w-5 h-5 mt-1 text-green-600" />
          <p className="text-sm">
           {result}
          </p>
        </div>
      </div>
      </div>
    //   </>
    // ))} 

      
    // </div>
  );
}

export default ChatMessages;
