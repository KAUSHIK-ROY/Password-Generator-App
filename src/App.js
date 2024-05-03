import './App.css';
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {UC,LC,NC,SC} from '../src/Data/PasswordData';

export default function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbol, setSymbol] = useState(false); 
  
  let [passLen,setPassLen] = useState(6);

  let [fpass,setFpass] = useState('')
  
  
  let Cbtn = (event)=>{
      navigator.clipboard.writeText(fpass);
      event.preventDefault();
      toast.success("Password Copied");
  }

  let charSet ='';
  let finalPass ='';
  let Gbtn = (event)=>{
      event.preventDefault();
      if(uppercase || lowercase || number || symbol){
          if (uppercase) charSet += UC;
          if (lowercase) charSet += LC;
          if (number) charSet += NC;
          if (symbol) charSet += SC;

          for(let i=0; i<passLen; i++){
              finalPass += charSet.charAt(Math.floor(Math.random()*charSet.length))       //finalPass has no value so add with [charAt (=>stores the all value of string) is a inbuilt function, floor is use to get integer value without point, random is a function to get random numbers , it is multiply so that it gives random number ,based on the random number pick a letter form the whole string ]
          }
          setFpass(finalPass);
          toast.info("Generating Password");
      }
      else{
          toast.error("Please select the checkboxes");
      }
  }

  return (
    <div className='PassApp'>
        <ToastContainer/>
        <div className='container'>
            <div className="getData">
                <h2>Password Generator</h2>
                <form>
                    <div className='outputBox'>
                        <input type="text" readOnly placeholder='Password' value={fpass}/>
                        <button onClick={Cbtn}>Copy</button>
                    </div>
                    <div className="allInputs">
                        <label>Password length</label>
                        <input type="number" max={20} min={6} className='numinp' value={passLen} onChange={(event)=>setPassLen(event.target.value)}/>
                    </div>
                    <div className="allInputs">
                        <label>Include uppercase letters</label>
                        <input type="checkbox" checked={uppercase} onChange={()=>{setUppercase(!uppercase)}} className='inp'/>
                    </div>
                    <div className="allInputs">
                        <label>Include lowercase letters</label>
                        <input type="checkbox" checked={lowercase} onChange={()=>{setLowercase(!lowercase)}} className='inp'/>
                    </div>
                    <div className="allInputs">
                        <label>Include numbers</label>
                        <input type="checkbox" checked={number} onChange={()=>{setNumber(!number)}} className='inp'/>
                    </div>
                    <div className="allInputs">
                        <label>Include Symbols</label>
                        <input type="checkbox" checked={symbol} onChange={()=>{setSymbol(!symbol)}} className='inp'/>
                    </div>



                    <button onClick={Gbtn}>Generate</button>
                </form>
            </div>

        </div>
    </div>
  )
}


