import { createContext, useState } from "react";
import { generateResponse } from "../config/Gemini";



export const Context=createContext();
 
const ContextProvider=(props)=>{

const [input,setInput]=useState("");
const [recentPrompt,setRecentPrompt]=useState("");
const [result,SetResult]=useState("");
const [prevChat,setPrevChat]=useState([]);
const [showChat,setShowChat]=useState(false);
const [loading,setLoading]=useState(false)


    const onSent=async(p)=>{
      SetResult("");
       const r = await generateResponse(input);
      SetResult(r);
    // setPrevChat((prev)=>[
    //     ...prev,{prompt:input, reply:r}
    //   ])
     
    }
// onSent("badmashi kaise kre");

const contextValue={
  input,setInput,
  recentPrompt,setRecentPrompt,
  result,SetResult,
  prevChat,setPrevChat,
  showChat,setShowChat,
  loading,setLoading,
  onSent
}
return(
    <Context.Provider value={contextValue} >
       {props.children}
    </Context.Provider>
)
}

export default ContextProvider;