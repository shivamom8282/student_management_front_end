import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../Authprovider';
import { useLocation, useNavigate } from 'react-router-dom';
   
function Addlist() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [roll, setRoll] = useState('');
  const { loginadmin } = useContext(AuthContext);
  console.log(loginadmin)

  const location = useLocation();
  const navigate = useNavigate();

  // If editing, get student from navigation state
  const editingStudent = location.state?.student;

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name || '');
      setEmail(editingStudent.email || '');
      setCourse(editingStudent.course || '');
      setRoll(editingStudent.roll || '');
    } else {
      setName('');
      setEmail('');
      setCourse('');
      setRoll('');
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const loggedInAdmin = JSON.parse(localStorage.getItem("loginadmin"));
    if (!loggedInAdmin) {
      alert("Not authorized");
      return;
    }

    const allStudents = JSON.parse(localStorage.getItem("students")) || [];

    if (editingStudent) {
      // Update existing student (match by email and addedBy)
      const updatedStudents = allStudents.map((stu) =>
        stu.email === editingStudent.email && stu.addedBy === loggedInAdmin
          ? { name, email, course, roll, addedBy: loggedInAdmin }
          : stu
      );
      localStorage.setItem("students", JSON.stringify(updatedStudents));
      alert("Student updated successfully!");
    } else {
      // Add new student
      const newStudent = {
        name,
        email,
        course,
        roll,
        addedBy: loggedInAdmin,
      };
      allStudents.push(newStudent);
      localStorage.setItem("students", JSON.stringify(allStudents));
      alert("Student added successfully!");
    }

    // Clear fields
    setName('');
    setEmail('');
    setCourse('');
    setRoll('');

    navigate('/stulist'); // Redirect to student list
  };

  return (
    <div style={{height:"100vh",justifyContent: "center", alignItems: "center",flexDirection: "column", gap:"20px"}}>
      <h2 style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:'100px',color:'white'}}>
        {editingStudent ? 'Update Student' : 'Add Student'}
      </h2>

      <Form onSubmit={handleSubmit} style={{height:"450px", }}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={!!editingStudent} // Prevent changing email on update
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Course</Form.Label>
          <Form.Control
            type="text"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Roll no.</Form.Label>
          <Form.Control
            type="number"
            placeholder="Roll-number"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {editingStudent ? 'Update' : 'Add'}
        </Button>
      </Form>
    </div>
  );
}

export default Addlist;