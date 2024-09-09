// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {incNumber,decNumber} from "./actions/index"

const App = () => {
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
     <div className='container'>
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>


      <div className='quantity'>
      <a className='quantityMinus' title='Decrement'  onClick={()=>dispatch(decNumber())}>
        <span>-</span>
      </a>
      <input name='quantity' type='text' className='quantityInput' value={myState}></input>
      <a className='quantityPlus' title='Increment' onClick={()=>dispatch(incNumber())}>
        <span>+</span>
      </a>

      </div>

     </div>
    </>
  )
}

export default App
