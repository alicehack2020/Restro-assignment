import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import res from "./data.json"
function App() {

  const [data,setData]=useState(res) 
  const [rating,setRating]=useState(5)

  return (
      
    <div>
    <select name="sort by" id="" value={rating} onChange={(e)=>setRating(e.target.value)}>
      <option value="">sort by Rating</option>
      <option value="5">5</option>
      <option value="4">4</option>
      <option value="3">3</option>
      <option value="2">2</option>
      <option value="1">1</option>
    </select>

    {
      data.map((e)=>{
        return( <Cart r_name={e.r_name} image={e.image} rating={e.rating}/>)
      })
     
    } 
    </div>
     
    
  );
}

export default App;
