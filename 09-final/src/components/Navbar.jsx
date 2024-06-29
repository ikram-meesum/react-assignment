import React, { useEffect, useState } from "react";
import { BiLogIn } from "react-icons/bi";

import { app } from "./firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const auth = getAuth(app);

  const [username, setUsername] = useState(null);
  // const [login, setLogin] = useState("Login");

  useEffect(() => {
    console.log("nabar");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("you are login", user);
        setUsername(user.email);
      } else {
        console.log("yor are loged out");
        setUsername(null);
      }
    });
  }, []);

  return (
    <>
      <header className="flex items-center justify-between py-4 shadow-lg bg-slate-900 text-white">
        <div>
          <a href="/">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-semibold sm:block ml-10">
                <span className="text-blue-400">final</span>
                <span>project</span>
              </div>
            </div>
          </a>
        </div>

        {/* <input
          type="search"
          id="default-search"
          // value={""}
          //onChange={(e) => setTodoText(e.target.value)}
          className="block w-72 p-2 ps-5 text-sm text-gray-300 rounded-lg bg-gray-800"
          placeholder="Search..."
          required
        /> */}

        <div className="flex space-x-4 mr-8">
          <div className="py-2 px-4 text-sm border flex border-gray-600 rounded">
            {username ? (
              <>
                <button
                  onClick={() => {
                    console.log("lo");
                    signOut(auth);
                  }}
                >
                  {/* <BiLogIn className="mt-1 mr-2" /> */}
                  {"Logout"}
                </button>
              </>
            ) : (
              <>
                <button>
                  {/* <BiLogIn className="mt-1 mr-2" /> */}
                  {"Login"}
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
