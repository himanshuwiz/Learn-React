import React ,{useState,useEffect}from 'react'

const App = () => {

  const[counter,setCounter] = useState(0)

  const[counterEffect,setCountEffect] =useState(0)


  // This is the first case of useEffect without dependencies
  // useEffect(()=>{
  //   document.title=`${counter} new Messages!!`
  // })


  //This is the second case of useEffect with an empty array

  // useEffect(()=>{
  //   document.title=`${counter} new Messages!!`
  // },[]);

  //This is the third case of useEffect with an variables in a dependencies


  useEffect(()=> {
     document.title=`${counterEffect} new Messages!!`
  },[counterEffect])

   const increaseCounter = () => {
    setCounter(counter+1)
  }

  const increaseEffectCounter = () => {
    setCountEffect(counterEffect+5)
  }
  return (
    <div>

      <h1>User clicked {counter} times!!</h1>
      <button onClick={increaseCounter}>Increase Count</button>

      <h1>For useEffect with varibales we use a seperate counter that can count {counterEffect}</h1>
      <button onClick={increaseEffectCounter} >Increase Effect Count</button>
     



    </div>
  )
}

export default App