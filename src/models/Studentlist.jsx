// import React, { useContext, useEffect } from 'react'
// import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Authprovider';
import '../models/models.css';
import { useNavigate } from 'react-router-dom';
function Studentlist() {

  const[students,setstudents]=useState([]);
  const{loginadmin}=useContext(AuthContext)
   const navigate = useNavigate();

    function handleUpdate(student) {
    navigate('/add', { state: { student } });
  }

  
  // useEffect(()=>
  // {
  //   load_data();
  // },[])

  // const load_data=async()=>
  // {
  //   axios.get("http://localhost:3000/student_list").then((result)=>
  //   {
  //     setstudents(result.data)
  //     // console.log(result)
  //   })
  // }


  //   function handledelete(index)
  // {
     
  //      const updatedStudents = students.filter((_, i) => i !== index);

  //      setstudents(updatedStudents);
  //     localStorage.setItem('students', JSON.stringify(updatedStudents));
  // }

function handledelete(index) {
  const loggedadmin = JSON.parse(localStorage.getItem('loginadmin'));
  const allStudents = JSON.parse(localStorage.getItem('students')) || [];

 
  const adminStudents = allStudents.filter(e => e.addedBy === loggedadmin);

  adminStudents.splice(index, 1);

 
  const updatedStudents = [
    ...allStudents.filter(e => e.addedBy !== loggedadmin),
    ...adminStudents
  ];

  setstudents(adminStudents);
  localStorage.setItem('students', JSON.stringify(updatedStudents));
}

useEffect(() => {
  const loggedadmin = JSON.parse(localStorage.getItem('loginadmin'));
  const savedstudents = JSON.parse(localStorage.getItem('students'));

  if (savedstudents && Array.isArray(savedstudents)) {
    const filterstu = savedstudents.filter((e) => e.addedBy === loggedadmin);
    setstudents(filterstu);
  } else {
    setstudents([]); // No students in storage
  }
}, [loginadmin]);


  // useEffect(()=>
  // {
  //   localStorage.setItem('students',JSON.stringify(students))
  // },[students])
  return (
    <>

       <div className='list' style={{ display:"flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: "100px",
    height: "100vh",}}>
      <table className="list-stu" style={{backgroundColor:"#BAD7E9"}}>
        <thead style={{backgroundColor:"#BAD7E9"}}>
          <tr>
            <th>Name</th>
            <th>email</th>
            {/* <th>age</th> */}
            <th>course</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
         <tbody>
          {

            students.map((student, index) => (
              <tr key={index} className='stu-tr'>
                <td>{student.name}</td>
                <td>{student.email}</td>
                {/* <td>{student.age}</td> */}
                <td>{student.course}</td>
                <td><button onClick={() => handleUpdate(student)}>update</button></td>
                <td><button onClick={()=>{handledelete(index)}} >delete</button></td>
              </tr>
            ))
          }
          
         </tbody> 
       </table> 
     </div>

       </>
    )
}

export default Studentlist