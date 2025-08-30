import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import s1 from '../models/images/ss2.png';
// import './models/Models.css'
import '../models/models.css';
import { AuthContext } from '../Authprovider';
function Appnav() {
  const{setloginadmin}=useContext(AuthContext)
  function handlelogin()
  {
    setloginadmin("")
    localStorage.setItem("loginadmin", JSON.stringify(""));
  }
  return (
    <Navbar variant="dark" expand="lg" style={{
          position: "fixed",
    width: "100%",
    top: "0",
    left: "0",
    backgroundColor:"#030303"
    }}>
      <Container style={{flexDirection: "row"}}>
         <span style={{ color: "white"}}>
      <img src={s1} alt="Description" style={{height:"70px", display:"flex",alignItems:"center",justifyContent:"center"}} />
    </span>
        <Navbar.Brand href="/">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto main-nav" style={{
            display:"flex",justifyContent:"center",alignItems:"center"
          }}>         
            <Link to="/login" className='underline-link' style={{color:"white", marginTop: "10px", display: "block",textDecoration:"none" }}>Login</Link>
            <Link to="/registration" className='underline-link'  style={{color:"white", marginTop: "10px", display: "block",textDecoration:"none" }}>Registration</Link>
            <Link to="/stulist" className='underline-link' style={{color:"white", marginTop: "10px", display: "block",textDecoration:"none" }}>List</Link>
            <Link to="/add" className='underline-link' style={{color:"white", marginTop: "10px", display: "block",textDecoration:"none" }}>Addlist</Link>
            {JSON.parse(localStorage.getItem('loginadmin'))!=="" && <button onClick={handlelogin}>logout</button>}
            <label htmlFor="" style={{color:"white", backgroundColor:"grey",borderRadius:"4px"}}>{JSON.parse(localStorage.getItem('loginadmin'))}</label>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Appnav;
