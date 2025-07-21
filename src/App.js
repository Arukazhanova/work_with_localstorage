import './App.css';
import React, {useEffect, useState} from "react";
import Toggle from "./toggle/Toggle";
import GreetingForm from "./form/GreetingForm";
import TodoApp from "./app/TodoApp";
function App() {
  const [count,setCount] = useState(0);
  useEffect(() => {
      const saved=localStorage.getItem('count');
      if (saved){
          setCount(JSON.parse(saved));
      }
  },[]);

  useEffect(() => {
      localStorage.setItem('count',JSON.stringify(count));
  },[count]);
  return (
    <div className="App">
      <h1 className='count'>{count}</h1>
        <div className='buttons'>

      <button className='button' onClick={()=>setCount(count+1)}>count(+)</button>
        <button className='button'  onClick={()=>setCount(count-1)}>count(-)</button>
        <button className='button' onClick={()=>setCount(0)}>Сброс</button>
    </div>
        <Toggle/>
    <GreetingForm />
        <TodoApp/>
    </div>
  );
}

export default App;
