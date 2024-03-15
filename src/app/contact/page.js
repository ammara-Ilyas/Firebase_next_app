"use client";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../fairbase";
import Singup from "../../../component/Singup";
function page() {
  const [user, setUser] = useState();
  const singInWithGeogle = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Singin");
        console.log(result);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };
  ////check login or not
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("You are logged");
        console.log(user);
        setUser(user);
      } else {
        console.log("You Are not logged");
        setUser(null);
      }
    });
  }, []);
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
        console.log(error);
      });
  };
  const singoutUser = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  return (
    <>
      {" "}
      <div style={{ textAlign: "center" }}>Sign In with Email</div>
      {user ? (
        <button onClick={singoutUser}>Sign out</button>
      ) : (
        <>
          <button
            onClick={() => createUser("ammarailyas361@gmail.com", "542hj4")}
          >
            Sing up
          </button>
          <button onClick={() => singInUser("maha175@gmail.com", "542hj4")}>
            Sign In
          </button>
          <button onClick={singInWithGeogle}>Sign in with Geogle</button>
        </>
      )}
    </>
  );
}

export default page;
