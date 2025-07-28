// // import React, { useState } from 'react'
// import students from './models/student'
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import React from 'react'
// function StudentManagement() {

//   // const [msg,setmsg]=useState("welcome to student management");

  
//   console.log(students.name)
//   return (
//     <>
    
//     <div>StudentManagement list </div>
//      <h1 class="text-3xl font-bold underline">
//     Hello world!
//   </h1>
  
//     <Stulist/>
//     <Submit/>
//     {/* <TextControlsExample/> */}
//     </>  
//   )
  
//   function Stulist()
//   {
//     return (
//       <>
    
//       <div className='list'>
//       <table className="list-stu">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Gender</th>
//             <th>Age</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             students.map((student, index) => (
//               <tr key={index}>
//                 <td>{student.name}</td>
//                 <td>{student.gender}</td>
//                 <td>{student.age}</td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </table>
//     </div>

//       </>
//     )
//   }
// }
// //   function StudentRow({student})
// //   {
// //     return (
// //       <>
// //       <div className='list'>
// //       <table className="list-stu">
// //   <thead>
// //     <tr>
// //       <th>Name</th>
// //       <th>Gender</th>
// //       <th>Age</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr>
// //       <td>{student.name}</td>
// //       <td>{student.gender}</td>
// //       <td>{student.age}</td>
// //     </tr>
// //   </tbody>
// // </table>



//       {/* <span>{student.name}</span>
//       &nbsp; &nbsp;
//       <span>{student.gender}</span>
//     &nbsp; &nbsp;
//       <span>{student.age}</span>
//       &nbsp; &nbsp;
     
//       &nbsp;
//       <br /> */}
// //       </div>
// //       </>
// //     )
// //   }
// // }

// function Submit()
// {
//   const subclick=()=>
//   {
//    let input= document.getElementById("in")
//     alert(input.value)
//   }
//   return (
//     <>
//     <Button onClick={subclick} variant="primary">Primary</Button>
//     <button onClick={subclick} > Submit</button>
//     <input className='border border-black' type="text" name="" id="in" />
//     </>
//   )
// }



// function TextControlsExample() {
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="name@example.com" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//         <Form.Label>Example textarea</Form.Label>
//         <Form.Control as="textarea" rows={3} />
//       </Form.Group>
//     </Form>
//   );
// }





// export default StudentManagement