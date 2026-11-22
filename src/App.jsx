import { useState, useRef, useEffect  } from "react";   

export default function App() {

  const [time, setTime] = useState(0);
  const timerRef = useRef(null); 
  const [isRunning, setIsRunning] = useState(false); 

  const increment = ()=> {
    if (isRunning) return; 
    setIsRunning(true); 

    // stop any existing timer before starting a new one 
    clearInterval(timerRef.current); 

    timerRef.current = setInterval(()=> {
      setTime((prev) => prev + 1); 
    }, 1000 ); 
  }; 

  const reset = ()=> {

    clearInterval(timerRef.current); 
    setTime(0); 
    setIsRunning(false); 
  }; 

  const pause = () => {
    clearInterval(timerRef.current); 
    setIsRunning(false); 
  }; 



  useEffect(()=> {
    return ()=> clearInterval(timerRef.current); 
  }, []); 

  return(

      <main className="main"> 
        
        <div className="flex flex-col items-center justify-center gap-1.5">
          <h2 className="text-6xl font-semibold"> { time } </h2>
          <p className="font-medium text-2xl"> <span className="text-green-300"> { Math.floor(time / 60) }</span>  
           {" "} minutes and <span className="text-red-300"> {time % 60} </span> seconds elapsed </p>
        </div>

        
        <div className="flex gap-2 p-1 m-1">
         <button className="bg-green-300 button"onClick={increment}> Start </button>
         <button className="bg-blue-300 button" onClick={pause}> Pause </button>
         <button className="bg-red-300 button" onClick={reset}> Reset </button>
        </div> 
      </main>
    
  )

}