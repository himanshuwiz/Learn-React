import React,{useState,useEffect} from 'react'

const App = () => {

  const[windowCount,setWinCount] = useState(window.screen.width)

  const RealSize = () => {
    setWinCount(window.innerWidth)
  }

  useEffect(()=>{
      window.addEventListener("resize", RealSize)

      return () =>{
        window.removeEventListener("resize",RealSize)
      }
  }

  
  
)



  return (
    <div> 
      
     <p>Your Window Size is</p>
     <h1>{windowCount}</h1>


    </div>
  )
}

export default App