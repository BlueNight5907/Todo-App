import React from 'react';
let b = 0
const Counter = () => {
    const [count, setCount] = React.useState(0);
    const id = React.useRef(null);
  
    const clearInterval = () => {
      window.clearInterval(id.current);
    };
    
    React.useEffect( () => {
      id.current = window.setInterval(async () => {
        setCount((c) => c + 1);
        b = b + 1
        console.log(b)
      }, 1000);
      
      return clearInterval;
      
    }, []);
    
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={clearInterval}>Stop</button>
      </div>
    );
}
export default Counter