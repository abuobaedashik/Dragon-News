import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

 export const Authcontex =createContext()
const AuthProvider = ({children}) => {
    const [allnews,setallnews]=useState([])
    const[user,setuser] =useState(null)
    const[loading,setloading] =useState(true)
    const auth = getAuth(app);
   
    const createUser =(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logOutUser =()=>{
        setloading(true)
        return signOut(auth)
    }
    const SignInUser =(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile =(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/category/08')
        .then(res => res.json())
        .then(data=>setallnews(data.data))
    })
  
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
      setuser(currentUser)
      setloading(false)
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
      SignInUser,
      loading,
      updateUserProfile,
      allnews
   }
    return <Authcontex.Provider value={authInfo}>{children}</Authcontex.Provider>
};

export default AuthProvider;