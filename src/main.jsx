import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Addlist from "./models/Addlist.jsx"
import "./index.css";
import App from "./App.jsx";
// import StudentManagement from "./StudentManagement.jsx";
import Form1 from "./Form1.jsx";
// import Registration from "./models/registration.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appnav from "./models/Appnav.jsx";
// import Studentlist from "./models/Studentlist.jsx";
import AuthContextProvider, { AuthContext } from "./Authprovider.jsx";
import Studentlist from "./models/Studentlist.jsx";
import Registration from "./models/Registration.jsx";
// import Registration from "./models/Registration.jsx";


// import {Stulist} from './StudentManagement.jsx'
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AuthContextProvider>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "100px",
        }}
        >
        {/* <Stulist/> */}
      

        <Appnav />
        {/* <Studentlist/> */}
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/login" element={<App/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/add" element={<Addlist/>}/>
          <Route path="/stulist" element={<Studentlist/>}/>
        </Routes>

        {/* <Form1/> */}

        {/* <StudentManagement /> */}
        {/* <Registration/> */}
      </div>
        </AuthContextProvider>
    </StrictMode>
  </BrowserRouter>
);
