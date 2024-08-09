// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
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
//     </>
//   )
// }

// export default App

import React from 'react';
import Joke from './Joke';


const App=() => {
  const list = ['Why are snails slow? Because they’re carrying a house on their back.',
    'What’s the smartest insect? A spelling bee!',
    'How does the ocean say hi? It waves!',
    'What is a room with no walls? A mushroom',
    'How did Benjamin Franklin feel holding his kite when he discovered electricity? Shocked!'];
  return(
    <div>
    <h1>Jokes</h1>
      <Joke items = {list}/>
    </div>
  )
}
export default App;