import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";


/*-- REGISTER --*/
export const register = async (password, name, email, phone, address) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      phone,
      address,
      createdAt: new Date(),
    });

    console.log("회원가입 성공");
  } catch (error) {
    console.log("회원가입 에러:", error.message);
  }
};


/*-- LOGIN --*/
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("로그인 성공:", userCredential.user);
  } catch (error) {
    console.log("로그인 에러:", error.message);
  }
};


/*-- LOGOUT --*/
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("로그아웃 성공");
  } catch (error) {
    console.log("로그아웃 에러:", error.message);
  }
};


/*-- LOGIN CHECK --*/
export const authStateListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};