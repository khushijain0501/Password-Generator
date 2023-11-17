import React, { useCallback ,useRef} from "react";

export default function Generator(props){
    
   
    return(
        <div className="bg-[#cacccf] rounded-lg  flex items-center content-center ">
            <input type="text" value={props.password} placeholder="password" className="flex-1 bg-[#cacccf] rounded-lg pl-3 " />
            <button 
            className="w-16 h-8 bg-[#064b8c] rounded-r-lg text-xs font-medium text-white text-center p-2 hover:bg-[#0665bf] active:bg-[#064178]"
            onClick={props.copyToClipboard}
            >Copy</button>
        </div>
    )
}