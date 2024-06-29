import React, { useState } from "react";
import Layout from "../component/Layout";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import MainCategory from "../component/MainCategory";

import { app } from "../component/connection";
// import { collection, getFirestore, addDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

import {
  getDocs,
  doc,
  getFirestore,
  collection,
  getDoc,
  where,
  query,
} from "firebase/firestore";

export default function Login() {
  const [userInfo, setUserInfo] = useState({});
  // const auth = getAuth(app);
  const db = getFirestore(app);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // const snap = await getDoc(doc(db, "bloguser"));
    // const snap = collection(db, "bloguser");
    const res = query(
      collection(db, "bloguser"),
      where("email", "==", data.email),
      where("password", "==", data.password)
    );

    let id = "";
    const querySnapshot = await getDocs(res);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log("res", doc.id, " => ", doc.data());
      console.log("id", doc.id);
      id = doc.id;
      sessionStorage.setItem("userinfo", JSON.stringify(doc.data()));
    });
    if (id == "") {
      toast.error("Invalid user credential. Please try again");
    } else {
      toast.success("Login Successfully!");
      setTimeout(() => {
        navigate("/post");
      }, 3000);
    }

    // const res = query(
    //   snap,
    //   where("email", "==", data.email),
    //   where("password", "==", data.password)
    // );
    // console.log("result: ", res);

    // if (res.exists()) {
    //   // setProduct(res.data());
    // } else {
    //   console.log("No such document");
    // }

    // console.log(data); UOrEj5MuWlXC5rW37oH9nUnD8rK2
    // Following code is OK for google authentication but we need login from database
    // signInWithEmailAndPassword(auth, data.email, data.password)
    //   .then((value) => {
    //     console.log("login", value);
    //     console.log("userid: ", value.user.uid);
    //     sessionStorage.setItem("userid", value.user.uid);
    //     toast.success("Login Successfully!");
    //     setTimeout(() => {
    //       navigate("/");
    //     }, 5000);
    //   })
    //   .catch((err) => {
    //     console.log("Error occured from login", err);
    //   });
  };

  return (
    <section className="bg-gray-50">
      <div className="w-4/5 mx-auto">
        <Navbar />
        <Hero />
      </div>
      <div className="">
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#424B52",
              color: "white",
            },
          }}
        />
        {/* <Navbar />
        <Hero /> */}
        <main className="w-1/2 mx-auto">
          <div className="uppercase text-2xl text-slate-600 font-semibold text-center mt-6">
            Login please
          </div>

          {/* start alert */}
          <div
            className="flex items-center p-4 mt-8 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 w-full m-auto"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Important Message!</span>&nbsp; All
              fields are mandatory along with 6 characters of password.
            </div>
          </div>

          {/* end alert */}

          <form
            className="lg:col-span-2 mt-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label>Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  // name="address"
                  // id="address"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  // value=""
                  placeholder="Enter email"
                />
                {errors.email && (
                  <p className="text-red-500">Email is required.</p>
                )}
              </div>

              <div className="md:col-span-5">
                <label>Password</label>
                <input
                  type="text"
                  {...register("password", { required: true, minLength: 6 })}
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="Type secure code"
                />
                {errors.password && (
                  <p className="text-red-500">
                    Password is atleast 6 characters.
                  </p>
                )}
              </div>

              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button
                    // disabled={!pImage}
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded`}
                  >
                    LOGIN
                  </button>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </section>
  );
}
