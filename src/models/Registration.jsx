import React, { useEffect, useState } from 'react';
import './registration.css';
import { Navigate, useNavigate } from 'react-router-dom';
function Registration() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    course: '',
    password: ''
  });
  const [admins, setAdmins] = useState(()=>
  {
    const savedAdmins=localStorage.getItem('admins');
    if(savedAdmins && savedAdmins !=="undefined")
      {
        return JSON.parse(savedAdmins)
      }
      return [];
  });


  useEffect(() => {
    localStorage.setItem('admins', JSON.stringify(admins));
  }, [admins]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    setAdmins([
      ...admins,
      {
        name: formData.username,
        email: formData.email,
        age: formData.age,
        course: formData.course,
        password:formData.password
      }
     
    ]);
    setFormData({
      username: '',
      email: '',
      age: '',
      course: '',
      password: ''
    });
     if(formData.username=='' || formData.email=='' || formData.age=='' || formData.course=='' || formData.password=='')
      {
        alert("all fields are required")
      }
      else
      {
         navigate('/login');
        
      }
  }


  return (
    <>
    <div style={{height: "100vh", }}>

      <div className='reg-form'>
        <h2 style={{display:"flex", justifyContent:"center", alignItems:"center",color:"white"}}>Registration Page</h2>
        <form onSubmit={handleSubmit} style={{backgroundColor:"#D4C9BE"}}>
          <div>
            <label>Username:</label><br />
            <input type="text" name="username" value={formData.username} style={{border:"1px solid black"}} onChange={handleChange} required />
          </div>
          <div>
            <label>Email:</label><br />
            <input type="email" name="email" value={formData.email} onChange={handleChange} style={{border:"1px solid black"}} required />
          </div>
          <div>
            <label>Age:</label><br />
            <input type="text" name="age" value={formData.age} onChange={handleChange} style={{border:"1px solid black"}} required />
          </div>
          <div>
            <label>Course:</label><br />
            <input type="text" name="course" value={formData.course} onChange={handleChange} style={{border:"1px solid black"}} required />
          </div>
          <div>
            <label>Password:</label><br />
            <input type="password" name="password" value={formData.password} onChange={handleChange} style={{border:"1px solid black"}} required />
          </div>
          <div style={{display:"flex",gap:"10px",justifyContent:"left",alignItems:"center"}}>
          <button type="submit" style={{ marginTop: '10px' }} >Register</button>
          <a href="" onClick={()=>navigate('/login')}>You already have an account.</a>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Registration;