"use client";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { app } from "../fairbase";
import Singup from "../../../component/Singup";
function page() {
  const createUser = (email, password) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, (email = email), (password = password))
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential);
        // ...
        console.log("sign up");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };
  const singInUser = (email, password) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential && userCredential.user) {
          const user = userCredential.user;
          console.log(userCredential);
          console.log("signin");
        } else {
          console.error("User authentication failed");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };
  const singoutUser = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
        // Additional logic after sign out, if needed
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  return (
    <>
      <div>Hello</div>
      {/* <Singup /> */}
      <button onClick={() => createUser("ammarailyas361@gmail.com", "542hj4")}>
        Sing up
      </button>
      <button onClick={() => singInUser("maha175@gmail.com", "542hj4")}>
        Sign In
      </button>
      <button onClick={singoutUser}>Sign out</button>
    </>
  );
}

export default page;
