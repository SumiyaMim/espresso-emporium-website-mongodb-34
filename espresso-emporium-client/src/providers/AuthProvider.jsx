/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign in user
    const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }

    // sign out user
    const signOutUser = () => {
    setLoading(true)
    return signOut(auth)
    }

    // observer
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("user in the auth state changed", currentUser);
        setUser(currentUser);
        setLoading(false)
      });
      return () => {
        unSubscribe();
      };
    }, []);

    const userInfo = {user, loading, createUser, signInUser, signOutUser}

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
