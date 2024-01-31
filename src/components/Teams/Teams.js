import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
function Teams() {
  const cookies=new Cookies();
    const navigate=useNavigate()
    async function fetchData(getting) {
      var config = {
          headers:{ "Accept": "*/*","token": `${getting}`}
      }
        console.log(config);
        let response = await axios.get('http://localhost:5000/teams/read',config);
        if(response.status===200){
          if(response.data.success){
            navigate("/teamprofile")
          }
          else{
            navigate("/teamreg")
          }
        }
    }
    async function retrieve(){
      let getting=await cookies.get("jwt_authorization")
      if(getting){
        console.log(getting);
        fetchData(getting);
      }
      else{
        console.log(getting);
      }
    }
    
     useEffect(()=>{
       retrieve()
   },[])
  return (
    <div>
      
    </div>
  )
}

export default Teams
