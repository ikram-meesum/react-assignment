import React from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import Content from "../component/Content";
import Hero from "../component/Hero";
import CatLink from "../component/MainCategory";
import Layout from "../component/Layout";

export default function Home() {
  return (
    <main className="">
      {/* <Navbar />
      <Hero /> */}
      <Layout />
      <CatLink />
      <Content />

      {/* Footer Section */}
      <div>Footer Section</div>
    </main>
  );
}
