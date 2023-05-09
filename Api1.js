import axios from "axios";
import React, { useEffect, useState } from "react";
function Api1() {
    const [apidata, setapidata] = useState()
    const[count,setCount]=useState(0)
   
    useEffect(() => {
        axios.get("https://api.adviceslip.com/advice")
        .then(res => {
            console.log(res.data.slip.advice)
            setapidata(res.data.slip.advice)
        })  
        
    }, [count])
    const handleclick =()=>{
      setCount(count+1)
    }
    
    return (
        <div>
            {apidata}
            <button onClick={() => handleclick()}>click</button>
            {/* {
                ab.map(e=>{
                    <h1>{e.advice}</h1>
                })
            } */}
        </div>
    )
}
export default Api1