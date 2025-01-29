import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  

  return (
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center shadow-lg gap-3 bg-white px-3 py-2 rounded-3xl text-white'>
            <button
            onClick={() => setColor("red")}
            className='outline-none px-5 py-2 rounded-3xl cursor-pointer'
            style={{backgroundColor: "red"}}
            >Red</button>
            <button 
            onClick={() => setColor("blue")}
            className='outline-none px-5 py-2 rounded-3xl cursor-pointer'
            style={{backgroundColor: "blue"}}>Blue</button>
            <button 
            onClick={() => setColor("green")}
            className='outline-none px-5 py-2 rounded-3xl cursor-pointer '
            style={{backgroundColor: "green"}}>Green</button>
            <button
            onClick={() => setColor("orange")}
            className='outline-none px-5 py-2 rounded-3xl cursor-pointer'
            style={{backgroundColor: "orange"}}>Orange</button>
            <button
            onClick={() => setColor("black")}
            className='outline-none px-5 py-2 rounded-3xl cursor-pointer'
            style={{backgroundColor: "black"}}>Black</button>
            <button
            onClick={() => setColor("white")}
            className='outline-2 outline-offset-1 outline-black px-5 py-2 rounded-3xl text-black shadow-4xl cursor-pointer'
            style={{backgroundColor: "white"}}>White</button>
            <button
            onClick={() => setColor("purple")}
            className='outline-black px-5 py-2 rounded-3xl cursor-pointer'
            style={{backgroundColor: "purple"}}>Purple</button>
            <button
            onClick={() => setColor("pink")}
            className='outline-black px-5 py-2 rounded-3xl text-black cursor-pointer'
            style={{backgroundColor: "pink"}}>Pink</button>
            <button
            onClick={() => setColor("yellow")}
            className='outline-black px-5 py-2 rounded-3xl text-black cursor-pointer'
            style={{backgroundColor: "yellow"}}>Yellow</button>
            <button
            onClick={() => setColor("gray")}
            className='outline-black px-5 py-2 rounded-3xl cursor-pointer '
            style={{backgroundColor: "gray"}}>Gray</button>
            <button
            onClick={() => setColor("olive")}
            className='outline-black px-5 py-2 rounded-3xl cursor-pointer'
            style={{backgroundColor: "olive"}}>Olive</button>
            <button
            onClick={() => setColor("lavender")}
            className='outline-black px-5 py-2 rounded-3xl text-black shadow-4xl cursor-pointer'
            style={{backgroundColor: "lavender"}}>Lavender</button>
          </div>

        </div>

      </div>
  )
}

export default App
