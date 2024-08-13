import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Frame_1 from './component/page/Frame_1'
import Frame_2 from './component/page/Frame_2'
import Frame_3 from './component/page/Frame_3'
import Frame_4 from './component/page/Frame_4'
import Frame_5 from './component/page/Frame_5'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <Frame_1 />
       <Frame_2 />
       <Frame_3 />
       <Frame_4 />
       <Frame_5 />
    </>
  )
}

export default App
