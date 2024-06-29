import React, { useEffect, useState } from "react";
import imgNode from "../images/nodejs.png";
import imgReact from "../images/react.jpg";
import MyPic from "../assets/MYPIC.jpg";
import { format, render, cancel, register } from "timeago.js";

import { app } from "./connection";
import { getDocs, doc, getFirestore, collection } from "firebase/firestore";

export default function Content() {
  const [allPost, setAllPost] = useState([]);

  const alldata = [];
  const db = getFirestore(app);

  const getPost = async () => {
    console.log("all post");
    const ref = collection(db, "blogpost");
    const res = await getDocs(ref);

    res.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      alldata.push({ id: doc.id, ...doc.data() });
    });
    console.log("post: ", alldata);
    setAllPost(alldata);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {allPost.map((post, ind) => {
          return (
            <section key={ind} className="mb-10">
              <a href="#">
                <img
                  className="rounded-t-lg w-full h-44 rounded-lg shadow-xl"
                  src={post.pimage}
                  alt=""
                />
              </a>

              <h5 className="text-lg mb-2 mt-5 font-semibold tracking-tight text-gray-800 dark:text-white">
                {post.title.substring(0, 30)}...
              </h5>

              {/* <p className="text-sm mt-1">03-FEB-2024</p> */}
              <p>{post.description.substring(0, 70)} ...</p>
              <div className="flex justify-between mt-5">
                <div className="flex">
                  <img
                    className="rounded-full"
                    src={post.userimage}
                    height={50}
                    width={50}
                  />
                  <p className="text-sm text-slate-900 ml-2">
                    <span className="font-semibold">
                      {post.username.substring(0, 17)}.
                    </span>
                    <br />
                    {post.profession}
                  </p>
                </div>
                <p className="text-sm text-slate-900">
                  {format(post.createdAt, "en_US")}
                </p>
              </div>
            </section>
          );
        })}
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
