//This is login page 

import React, {  useContext, useEffect, useState } from 'react'
import Bottom from './Bottom'
// import { useNavigate } from 'react-router-dom'
import "./App.css";

import { AuthContext } from './Authprovider'
import { useNavigate } from 'react-router-dom'

function App() {

let navigate=useNavigate()
const [em,setem]=useState("")
const [pswd,setpswd]=useState("")
const [msg,setmsg]=useState("")
const[admin,setadmin]=useState([])
const{setloginadmin}=useContext(AuthContext)

// useEffect(() => {
//   const savedAdmins = localStorage.getItem('admins');
//   if (savedAdmins) {
//     const adminList = JSON.parse(savedAdmins); // convert string to array of objects
//     adminList.map((e) => {
//       console.log(e.name);
//       console.log(adminList)
//     });
//   }
// }, []);


useEffect(()=>
{
  const savedAdmins=localStorage.getItem('admins');
  if(savedAdmins)
  {
    setadmin(JSON.parse(savedAdmins))
  }
},[])

// const styles={
//   main_border:{
//     // width:"flex",
   
//     border: "2px solid black",
//     width:"35vw",
//     height: "333px",
//         marginTop: "157px",
//         backgroundColor:"#D4C9BE"
//   },
// }

function handlesubmit()
{
  
  event.preventDefault();

  const isvalid=admin.some((adm)=>adm.email===em && adm.password===pswd)
  if(isvalid)
  {
    setloginadmin(em)

     localStorage.setItem("loginadmin", JSON.stringify(em));
    setmsg("Login successfull")
    alert("Login Successfull")
  }
  else
    {
     
      setmsg("Invalid username and password")
  }
}


// const chng=(event)=>
// {
//  setem(event.target.value)
// }
  return (
    <div className="form2" style={{height:"100vh"}}>
      {/* <div style={{color:"red"}}>{up}</div>
    <button onClick={click}>click</button> */}
    <form className='form1' onSubmit={handlesubmit}>
       <h2 style={{display:"flex",justifyContent:"center",color:"black"}}>Login</h2>
   
     {/* {msg === true ? <h5>Valid</h5> : <h5>Invalid</h5>} */}
      <div>
        <label>Email:</label><br />
        <input
          type="email" 
          className='border border-black'
          // onKeyUp={chng}
          maxLength={47}
          value={em}
          onChange={(e)=>
          {
            setem(e.target.value)
          }
          }        
        />
        {/* <label>Email address is :{em}</label><br /> */}
      </div>
      <div>
        <label>Password:</label><br />
        <input 
          type="password" 
          className='border border-black'
          value={pswd}
            onChange={(e)=>
          {
            setpswd(e.target.value)
          }
        }
        />
      </div>

      {/* <button type="submit" style={{ marginTop: "10px" }} onClick={()=>Navigate("/registration")}>Login</button> */}
      <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"10px"}}>
        <button type="submit" style={{ marginTop: "10px" }} >Login</button>
      {msg === true ? <h5 style={{color:"green"}}>{msg}</h5> : <h5 style={{color:"red"}}>{msg}</h5>}
      </div>
      <a href="" onClick={()=>navigate('/registration')} style={{display:"flex",justifyContent:"center"}}>Create account or Register</a>
      <br />
      {/* <Bottom/> */}
    </form>
          </div>
  )
}

export default App