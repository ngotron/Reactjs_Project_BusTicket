import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
 
    const [counter, setCounter] = useState({
        minute:2,
        second:10   
    });

    // Third Attempts
    useEffect(() => {

      let timer = null
        if(counter.second > 0) timer = setInterval(() => setCounter((pre)=>({...pre,second:pre.second-1})), 1000)
        else if(counter.minute == 0 && counter.second == 0)  timer = setInterval(() => setCounter((pre)=>({...pre,second:pre.second-1})), 1000)
        else if(counter.second == 0) timer = setInterval(() => setCounter((pre)=>({...pre,second:10,minute:pre.minute-1})), 1000);
        
        return () =>  clearInterval(timer);
    }, [counter.second]);
  
    return (
      <div className="App">
        {}
        <div>Countdown: {`dang dem nguoc m:${counter.minute} va s:${counter.second}`}</div>
      </div>)

//   return (
//     <>
//        <div className='container'>
//            <h1>Can not found</h1>
//         <h3>se dem nguoc sau :{timer}</h3>
//         <button onClick={start}>start</button>
//         <button onClick={stop}>stop</button>
//         <div className="button book_button">
//             <Link to="/">
//                 Về trang chủ
//                 <span />
//                 <span />
//                 <span />    
//             </Link> 
//         <br></br>
//         </div>
//        </div>
//     </>
//   )
}
