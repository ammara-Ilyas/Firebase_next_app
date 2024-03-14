"use client";

import { getDatabase, ref, set } from "firebase/database";
import { app } from "./fairbase";
const db = getDatabase(app);
export default function Home() {
  function writeUserData() {
    const db = getDatabase();
    set(ref(db, "users/maha"), [
      {
        username: "maha",
        email: "maha123@gmail.com",
      },
      {
        username: "yahoo",
        email: "yahoo123@gmail.com",
      },
    ]);
  }
  return (
    <>
      <h2>Hello</h2>
      <button onClick={() => writeUserData(1, "Maha", "maha123@gmail.com")}>
        Put Data
      </button>
    </>
  );
}
