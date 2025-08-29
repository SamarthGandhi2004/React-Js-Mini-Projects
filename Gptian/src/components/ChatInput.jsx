import React, { useContext } from "react";
import { SendHorizonal } from "lucide-react";
import { Context } from "../context/Context";

function ChatInput() {
  const {setResult,input,setInput,onSent,setRecentPrompt,setShowChat}=useContext(Context);
 const HandleClick=()=>{
     setShowChat(true);
     setRecentPrompt(input);
     onSent();
     setInput("");
     
 }
 
  console.log(input);
  
  return (
    <div className="p-4 border-t bg-white flex items-center gap-2">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e)=>setInput(e.target.value)}
        value={input}
      />
      <button className="rounded-full p-2 bg-blue-500 hover:bg-blue-600 text-white" onClick={HandleClick}>
        <SendHorizonal className="w-5 h-5" />
      </button>
    </div>
  );
}

export default ChatInput;
