import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css"

export const Home = () => {
    const [state, setState] = useState([])
    const getdata=()=>{
      axios.get("http://localhost:2345/products")
          .then((res) =>setState(res.data.product)).catch((err) => console.log(err));
    };
    
    useEffect(() => {
        getdata()
    },[])
    console.log(state)
    return (
        <>
            <div>
                {state.map((e) => {
                    return <div>
                    <div class="dom">
                        <label>Vehicle type</label>
                        <p>{e.vehicles}</p>
                        <label>Register Number</label>
                        <p>{e.registration}</p>
                        <label>Vehicle capacity</label>
                        <p>{e.capacity}</p>
                        <label>User id</label>
                            <p>{e.user}</p>
                    </div>
                  </div>
                })
                }

            </div>
        </>
    )
}