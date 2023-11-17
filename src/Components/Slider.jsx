import React from "react";
//import ReactSlider from "react-slider";

export default function Slider(props){
    return(
        <div className="flex justify-center content-center space-x-4">
            <input type="range"
            min={6}
            max={100}
            value={props.length}
            onChange={(e)=>{
                props.setLength(e.target.value)
            }}
            className="cursor-pointer items-center mt-5 "
            ref={props.ref}
            />
            <label className="text-xs items-center text-white mt-4 pt-1 ml-0">Length({props.length})</label>
            <div className=" flex items-center mt-5 ">
            <input type="checkbox" id="number" className="" onClick={props.numCheck}/>
            <label htmlFor="number" className=" text-xs text-white text-justify ml-1 ">Number</label>
            </div>
            <div className=" flex items-center mt-5 ">
            <input type="checkbox" id="character" className="" onClick={props.charCheck}/>
            <label htmlFor="character" className=" text-xs text-white text-justify ml-1 ">Character</label>
            </div>
        </div>
    )
}