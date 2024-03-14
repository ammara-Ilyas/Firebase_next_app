"use client";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { app } from "../fairbase";
import Singup from "../../../component/Singup";
function page() {
  const createUser = () => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, "yahoo123@gmail.com", "%ffg45")
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };
  return (
    <>
      <div>Hello</div>
      {/* <Singup /> */}
      <button onClick={createUser}>Create user</button>
    </>
  );
}

export default page;
