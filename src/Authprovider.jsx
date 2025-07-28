// import { createContext, useState } from "react";
import React, { createContext, useState } from "react";
// ...existing code...

export const AuthContext=createContext(null);
 export default function AuthContextProvider({children})
{
    const [login,setlogin]=useState(false);
    const [user,setuser]=useState(null)
    const[students,setstudent]=useState([])
    const[loginadmin,setloginadmin]=useState([])
    return(

        <AuthContext.Provider value={{login,user,students,setstudent,loginadmin,setloginadmin}}> 

            {children}

        </AuthContext.Provider>
    )
}
// export default AuthContextProvider;