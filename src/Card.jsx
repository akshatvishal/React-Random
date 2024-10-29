import { useState,useEffect } from 'react'
import './Card.css' 
import axios from 'axios'

function Card() {
  const[name,setname]=useState(null)
  const[picture,setpicture]=useState(null)
  const[phone,setphone]=useState(null)
  const fetchdata= async() => {
    try {
      const res=await axios.get("https://randomuser.me/api/");
      console.log(res.data)
      const user=res.data.results[0]
      setname(`${user.name.first} ${user.name.last}`)
      setpicture(`${user.picture.large}`)
      setphone(`${user.phone}`)
    } catch (error) {
      console.error(error);
    }
  }

useEffect(()=>{
  fetchdata();
},[])
  return (
    <>
    <div class="card">
            <div class="image">
                <img src={picture} alt="random picture" />
            </div>
            <div class="text">
                <h1 class="name">{name}</h1>
                <h2 class="name">{phone}</h2>
            </div> 
        </div>
    </>
  )
}

export default Card
