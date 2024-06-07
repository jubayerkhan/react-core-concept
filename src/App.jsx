import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert('Button clicked');
  }

  const handleClick2 = () =>{
    alert('Button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      
      <h3>React core concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me 1</button> <br />
      <button onClick={handleClick2}>Click me 2</button> <br />
      <button onClick={() => {alert('3rd button clicked')}}>Click me 3</button> <br />
      <button onClick={() => {addToFive(3)}}>Add five</button>
    </>
  )
}

export default App
