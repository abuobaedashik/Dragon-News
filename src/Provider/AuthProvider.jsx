import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

 export const Authcontex =createContext()
const AuthProvider = ({children}) => {
    const[user,setuser] =useState(null)
    const auth = getAuth(app);
   
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logOutUser =()=>{
        return signOut(auth)
    }
    const SignInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
  
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
      setuser(currentUser)
    })
    return ()=>{
        unsubscribe()
    }
   },[auth])
  
    const authInfo ={
      user,
      setuser,
      createUser,
      logOutUser,
      SignInUser
   }
    return <Authcontex.Provider value={authInfo}>{children}</Authcontex.Provider>
};

export default AuthProvider;