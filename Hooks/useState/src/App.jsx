import React,{useState} from 'react'

const App = () => {

 const [counter,setCounter] =useState(0);
 const[name,setName] = useState("");  

 const[details,setDetails] = useState({counter:0,name:""})

 function countDetails()  {
  setDetails((prev)=> ({
    ...prev,counter: prev.counter+1,
  }))
 }


 function counterIncrease()  {
    setCounter(counter+1);  
  }

  const handleChange = (e) =>  {
        setName(e.target.value);
      
  }
 const objhandleChnage = (a) =>{
     setDetails({...details,name:a.target.value});
 }


  return (
    <div>
      <input type="text" onChange={handleChange} />
      <h1 >{name} has clicked counter {counter} times!!</h1>
      <button onClick={counterIncrease}>Increase</button>


      <input type="text" onChange={objhandleChnage} />
      <h1 >{details.name} has clicked counter {details.counter} times!!</h1>
      <button onClick={countDetails}>Increase</button>
    </div>
  )
}

export default App