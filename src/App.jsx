import { useState,useCallback, useEffect, useRef } from 'react'
import Generator from './Components/Generator'
import Slider from './Components/Slider'
//import ReactSlider from 'react-slider'


function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8);
  const [numAllowed,setNumAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const passwordRef= useRef(null);
  function charCheck(event){
    //console.log(event.target.value);
    setCharAllowed(prevChar=>!prevChar);
  }
  function numCheck(event){
    //console.log(event.target.value);
    setNumAllowed(prevNum=>!prevNum);
  }
  const generate=useCallback(()=>{
    const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charnum="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const alpha='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~`! @#$%^&*()_-+={[}]|\:;\'"<,>.?/'
    const alphanum='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|\:;\'"<,>.?/'
    //let len=7;

    let pass="";
    for(let i=0;i<length;i++){
      let ran;
      if(numAllowed==true && charAllowed==true){
      ran=Math.floor(Math.random() * alphanum.length);
      pass+=alphanum.substring(ran,ran+1);
      }
      else if(numAllowed==false && charAllowed==true){
      ran=Math.floor(Math.random() * alpha.length);
      pass+=alpha.substring(ran,ran+1);
      }
      else if(numAllowed==true && charAllowed==false){
      ran=Math.floor(Math.random() * charnum.length);
      pass+=charnum.substring(ran,ran+1);
      }
      else{
      ran=Math.floor(Math.random() * characters.length);
      pass+=characters.substring(ran,ran+1);
      }
    }
    console.log(pass);
    setPassword(pass);
  },
  [length,numAllowed,charAllowed,setPassword]);

  const passGenerate=useEffect(generate,[length,numAllowed,charAllowed]);
  const copyToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange()
    window.navigator.clipboard.writeText(password),
    [password]
});
  return (
    <>
      <div className='bg-[#3d3d3d] h-screen w-screen'>
        <div className='h-screen w-full flex justify-center items-center w-96'>
        <div className='bg-[#4c4f52]  w-full max-w-md mx-auto shadow-lg  rounded-xl flex flex-col justify-center content-center p-12 pt-8'>
        <h2 className='text-white text-center mb-5 text-lg '>Password Generator</h2>
        <Generator password={password} ref={passwordRef} copyToClipboard={copyToClipboard}/>
        <Slider generate={generate} length={length} setLength={setLength} numCheck={numCheck} charCheck={charCheck} ref={passwordRef} />
        </div>
      </div>
      </div>
    </>
  )
}

export default App
