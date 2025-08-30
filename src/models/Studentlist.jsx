// import React, { useContext, useEffect } from 'react'
// import axios from 'axios';
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider";
import "./Models.css";
import { useNavigate } from "react-router-dom";
function Studentlist() {
  const [students, setstudents] = useState([]);
  const [search, setsearch] = useState("");
  const { loginadmin } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleUpdate(student) {
    navigate("/add", { state: { student } });
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
    const loggedadmin = JSON.parse(localStorage.getItem("loginadmin"));
    const allStudents = JSON.parse(localStorage.getItem("students")) || [];

    const adminStudents = allStudents.filter((e) => e.addedBy === loggedadmin);

    adminStudents.splice(index, 1);

    const updatedStudents = [
      ...allStudents.filter((e) => e.addedBy !== loggedadmin),
      ...adminStudents,
    ];

    setstudents(adminStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  }

  useEffect(() => {
    const loggedadmin = JSON.parse(localStorage.getItem("loginadmin"));
    const savedstudents = JSON.parse(localStorage.getItem("students"));

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
      <style>
        {`
          .table-scroll {
      max-height: 450px; /* about 7 rows */
      overflow-y: auto; 
      overflow-x: auto;
      width: 100%;
    }

    .list-stu {
      border-collapse: collapse;
      min-width: 600px; /* force horizontal scroll */
      table-layout: fixed; /* 🔑 makes wrap work */
    }

    .list-stu th, .list-stu td {
      padding: 10px;
      text-align: left;
      border: 1px solid #ccc;
      word-wrap: break-word; /* break words if too long */
      white-space: normal;   /* allow wrapping */
    }

    /* set max-width for specific columns */
    .list-stu td.name-col {
      max-width: 150px; /* ~15 chars */
    }

    .list-stu td.email-col {
      max-width: 180px; /* ~18 chars */
    }
      .list-stu {
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #ddd;
  border-radius: 12px;      /* rounded corners */
  overflow: hidden;         /* keeps corners rounded */
  box-shadow: 0 4px 12px rgba(0,0,0,0.1); /* soft shadow */
}

.list-stu th, .list-stu td {
  border: none;             /* remove default borders */
  padding: 12px;
}

.list-stu th {
  background: gray;
  color: white;
  text-transform: uppercase;
}
  .list-stu {
  border-collapse: collapse;   /* remove gaps */
  width: 100%;
  border: 2px solid black;     /* outer border only */
}

.list-stu th, .list-stu td {
  border: none;                /* no inner borders */
  padding: 10px;
  text-align: left;
}
`}
      </style>

      <div
        className="list"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "23px",
          height: "100vh",
        }}
      >
        {/* search input */}
        <div
          style={{
            marginTop: "110px",
            width: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            style={{ color: "white" }}
          />
          <h4 style={{ marginLeft: "5px", color: "white" }}>Search</h4>
        </div>

        {/* table */}
        <div className="list">
          <div className="table-scroll">
            <table className="list-stu" style={{ backgroundColor: "#BAD7E9" }}>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Course</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {students
                  .filter((student) =>
                    student.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((student, index) => (
                    <tr key={index} className="stu-tr">
                      <td>{index + 1}</td> {/* 👈 Serial number here */}
                      <td className="name-col">{student.name}</td>
                      <td className="email-col">{student.email}</td>
                      <td>{student.course}</td>
                      <td>
                        <button
                          className="one upd"
                          onClick={() => handleUpdate(student)}
                          style={{ width: "68px" }}
                        >
                          update
                        </button>
                      </td>
                      <td>
                        <button
                          className="one dlt"
                          onClick={() => handledelete(index)}
                          style={{ width: "68px" }}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Studentlist;
