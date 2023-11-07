
import { useState ,useEffect} from "react";
function Studentform(props){
    const [Name,setName] = useState(props.nameValue);
    const [Email,setEmail] = useState(props.emailValue);
    const [rollno,setRollno] = useState(props.rollnoValue);
const arr=[Name,Email,rollno];
 const handleClick =()=>{
    props.getState(arr);
 }
 useEffect(()=>{
    setName(props.nameValue);
    setEmail(props.emailValue);
    setRollno(props.rollnoValue);
},[props.nameValue,props.emailValue,props.rollNoValue])

    return(
        <div  >
 <center>
 <h1>Student form</h1>
 <div style={{maxWidth:"40%"}} >
  <input defaultValue={props.nameValue} type="text" onChange={(event)=>{setName(event.target.value)}} id="name" className="form-control  m-4 " placeholder="Student name"></input>
 <input defaultValue={props.emailValue} type="text"onChange={(event)=>{setEmail(event.target.value)}} className="form-control m-4 "placeholder="Student Email"></input>
 <input defaultValue={props.rollnoValue} type="text"onChange={(event)=>{setRollno(event.target.value)}} className="form-control m-4 "placeholder="Student rollno"></input>
   <button type="submit " onClick={handleClick} className="btn btn-success my-3">{props.children}</button>
       </div></center></div>
    )
}
export default Studentform;