import React, { useState } from "react";
import { Plus, MessageSquare } from "lucide-react";
import { AlignJustify } from "lucide-react";
import { History } from "lucide-react";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`${
        collapsed ? "w-16" : "w-64"
      } bg-white border-r flex flex-col`}
    >
      <div className="p-4  flex justify-between items-center  ">
        {collapsed ? (
          <button
            className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
            onClick={() => setCollapsed(!collapsed)}
          >
            <AlignJustify className="w-5 h-5" />
          </button>
        ) : (
          <>
            <h2 className="text-lg font-semibold">Chats</h2>
            <button
              className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
              onClick={() => setCollapsed(!collapsed)}
            >
              <AlignJustify className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {
            collapsed?(        <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500 text-white">
          <Plus className="w-4 h-4" />
       
        </button>):(<>
                        <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500 text-white">
          <Plus className="w-4 h-4" />
          New Chat
        </button>
                </>)
        }
      

        <div className="w-full flex items-center gap-2 px-3 pt-6 rounded-lg ">
         {
            collapsed?(  <History className="" />):(<>
                  <History className="" />
          Activities
                </>)
        }
        
        </div>
        <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500 text-white">
          {
            collapsed?(<MessageSquare className="w-4 h-4" />):(<> <MessageSquare className="w-4 h-4" />
          Chat 1</>)
        }
         
        </button>
         <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500 text-white">
          {
            collapsed?(<MessageSquare className="w-4 h-4" />):(<> <MessageSquare className="w-4 h-4" />
          Chat 1</>)
        }
         
        </button>
         <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500 text-white">
          {
            collapsed?(<MessageSquare className="w-4 h-4" />):(<> <MessageSquare className="w-4 h-4" />
          Chat 1</>)
        }
         
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
