import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

import axios from "axios";
import dayjs from "dayjs";

export default function StudentFeedback() {
  const [allComment, setAllComment] = useState([]);

  async function getData() {
    try {
      const res = await axios("http://localhost:5000/comment");
      const data = await res.data;
      console.log(data);
      setAllComment(data);
    } catch (err) {
      console.log("Error occured from getdata method: ", err);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar />
      <h2 className="text-2xl mt-4 font-semibold text-center">
        All Student Feedback
      </h2>
      {/* start alert */}
      <div
        className="flex items-center p-4 mt-6 mb-6 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 w-3/4 m-auto"
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
          <span className="font-medium">Important!</span> Please submit your
          feedback regarding your teacher and remember your message can not be
          change.
        </div>
      </div>
      {/* end alert */}

      {/* table section start */}

      <section>
        <div className="border rounded-lg mx-5 mt-10 overflow-hidden shadow-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="bg-slate-900 rounded-lg text-white">
                <th scope="col" className="pl-5 w-16 py-3">
                  S #
                </th>

                <th scope="col" className="pl-5 py-3">
                  TEACHER NAME
                </th>
                <th scope="col" className="pl-5 py-3">
                  COMMENT
                </th>
                <th scope="col" className="py-3">
                  CREATED AT
                </th>
                <th scope="col" className="pr-5 w-32 py-3">
                  RANK
                </th>
              </tr>
            </thead>
            <tbody>
              {allComment &&
                allComment.map((coment, ind) => {
                  return (
                    <tr
                      key={ind}
                      className="bg-white border-b hover:bg-gray-100 odd:bg-white even:bg-gray-50"
                    >
                      <td className="pl-5 py-3">{ind + 1}</td>

                      <td className="pl-5 font-medium text-gray-900">
                        {/* {prod.productname.substring(0, 35)}... */}
                        {coment.teacher}
                      </td>

                      <td className="pl-5 font-medium text-gray-900">
                        {/* {prod.productname.substring(0, 35)}... */}
                        {coment.comments}
                      </td>

                      <td className="py-3">
                        {dayjs(coment.createdAt).format("DD-MMM-YYYY")}
                      </td>
                      <td className="mr-6 py-3">{coment.rating}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
