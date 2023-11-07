import { useState } from 'react';
import './studentform';
import Studentform from './studentform';
import Axios from "axios";

function Createstudent() {
  const [arr,setArr]=useState([]);

  const getState=(childData)=>{
    setArr(childData);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    const data ={name:arr[0],email: arr[1],rollno:arr[2]};

Axios.post("https://crud-studentform.onrender.com/studentRoute/create-student",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record added successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
        event.target.reset();
    }

  
    return (
     <form onSubmit={handleSubmit}>
      <Studentform getState={getState}
      nameValue="" 
      emailValue=""
      rollnoValue="">
        create student
        </Studentform>
     </form>
    );
  }
  
  export default Createstudent;