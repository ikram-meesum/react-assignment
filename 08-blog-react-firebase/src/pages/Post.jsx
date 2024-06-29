import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Layout from "../component/Layout";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

import { app } from "../component/connection";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// import { getAuth } from "firebase/auth";

export default function Post() {
  const [pImage, setPImage] = useState("");
  const [uname, setUname] = useState("");
  const [uimage, setImage] = useState("");

  let userid = sessionStorage.getItem("userid");

  useEffect(() => {
    let obj = JSON.parse(sessionStorage.getItem("userinfo"));
    // setUname(obj.fullname);
    // setImage(obj.pimage);
  }, []);

  // console.log("obj : ", obj.fullname);

  // const auth = getAuth(app);
  const imgDB = getStorage(app);
  const db = getFirestore(app);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const imageUpload = (e) => {
    console.log("img upload", e.target.files[0]);
    const imgs = ref(imgDB, `${nanoid()}`);
    uploadBytes(imgs, e.target.files[0]).then((data) => {
      console.log(data, "img");
      getDownloadURL(data.ref).then((value) => {
        console.log(value);
        setPImage(value);
      });
    });
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await addDoc(collection(db, "blogpost"), {
        title: data.title,
        description: data.description,
        // userid: `${userid}`,
        pimage: pImage,
        username: uname,
        userimage: uimage,
        createdAt: Date.now(),
      });

      console.log("post added: ", result.id);

      toast.success("Your post has been published");
      // sessionStorage.setItem("userid", result.id);
      // sessionStorage.setItem("title", data.title);
      // sessionStorage.setItem("profession", data.profession);
      // sessionStorage.setItem("image", pImage);
      reset();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      console.log("Error occured from add post method: ", err);
      alert("Error from add post: " + err);
    }
  };

  return (
    <main className="bg-gray-50">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#424B52",
            color: "white",
          },
        }}
      />
      <Layout />
      <section className="w-1/2 mx-auto">
        <h2 className="text-2xl font-bold uppercase my-5 text-slate-900 text-center">
          Create a new post
        </h2>

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
            fields are mandatory.
          </div>
        </div>

        {/* end alert */}

        <form className="lg:col-span-2 mt-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
            <div className="md:col-span-6">
              <label>Blog Title</label>
              <input
                type="text"
                {...register("title", { required: true })}
                // name="address"
                // id="address"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                // value=""
                placeholder="Enter blog title"
              />
              {errors.title && (
                <p className="text-red-500">Blog title is required.</p>
              )}
            </div>

            <div className="md:col-span-6">
              <label>Description</label>
              <textarea
                type="text"
                {...register("description", { required: true, minLength: 20 })}
                className="h-40 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="Blog description"
              />
              {errors.description && (
                <p className="text-red-500">
                  Description is atleast 20 characters.
                </p>
              )}
            </div>

            <div className="md:col-span-6">
              <label>Blog Post Image</label>
              <input
                className="block w-full text-sm border-gray-300 cursor-pointer bg-gray-50 focus:outline-none "
                type="file"
                onChange={(e) => imageUpload(e)}
              />
              <div className="mt-1 text-sm text-gray-500">
                This picture will be display on the post.
              </div>
            </div>

            <div className="md:col-span-6 mb-10 text-right">
              <div className="inline-flex items-end">
                <button
                  disabled={!pImage}
                  className={
                    !pImage
                      ? "bg-gray-200 text-slate-400 font-semibold py-2 px-6 rounded"
                      : `bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded`
                  }
                  //className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded`}
                >
                  PUBLISH
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
