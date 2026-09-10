import { useState } from "react";


const UseStateHooks = () => {
    const [count, setCount] = useState(0);
    let [color,setColor] = useState("white");

  return (
      <>
          <div id="x" style={{backgroundColor:color}}>
          <h1>Counter: { count}</h1>
      
          <button onClick={() => { setCount(count+1)}}>Increment</button>

          <button onClick={() => {
              
              if (count >= 0) {
               setCount(count - 1)}
          }}>Decrement</button>

              
<h1>hiiiii</h1>


              <h1>hiii</h1>

          <button onClick={()=>setColor("grey")}   >dark mode</button>
          <button onClick={()=>setColor("")}   >Light mode</button>
</div>
    </>
  )
}

export default UseStateHooks
