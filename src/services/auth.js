import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

export const registerWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("회원가입 성공:", userCredential.user.email);
    return {
      success: true,
      message: "회원가입이 완료되었습니다! 로그인을 진행해주세요.",
      user: userCredential.user,
    };
  } catch (error) {
    console.error("회원가입 에러:", error.code);
    let errorMessage = "회원가입에 실패했습니다. 다시 시도해주세요.";

    if (error.code === "auth/email-already-in-use") {
      errorMessage = "이미 가입된 이메일 주소입니다.";
    } else if (error.code === "auth/invalid-email") {
      errorMessage = "올바른 이메일 형식이 아닙니다.";
    } else if (error.code === "auth/weak-password") {
      errorMessage = "비밀번호가 너무 취약합니다. (최소 6자리 이상)";
    }

    return { success: false, message: errorMessage };
  }
};

export const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("로그인 성공:", userCredential.user.email);
    return {
      success: true,
      user: userCredential.user,
    };
  } catch (error) {
    console.error("로그인 에러:", error.code);
    let errorMessage = "로그인에 실패했습니다.";

    if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password" || error.code === "auth/invalid-credential") {
      errorMessage = "이메일 또는 비밀번호가 일치하지 않습니다.";
    } else if (error.code === "auth/invalid-email") {
      errorMessage = "올바른 이메일 형식이 아닙니다.";
    }

    return { success: false, message: errorMessage };
  }
};

export const logoutFromApp = async () => {
  try {
    await signOut(auth);
    console.log("로그아웃 성공");
    return { success: true };
  } catch (error) {
    console.error("로그아웃 에러:", error.message);
    return { success: false, message: "로그아웃 중 오류가 발생했습니다." };
  }
};

export const subscribeAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};