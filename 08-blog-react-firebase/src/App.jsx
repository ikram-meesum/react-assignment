// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
// import Todo from "./component/TodoList.jsx";
// import SecondTask from "./component/SecondTask.jsx";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import MainCategory from "./component/MainCategory";
import Content from "./component/Content";

function App() {
  return (
    <main className="bg-gray-50">
      <section className="w-4/5 m-auto text-slate-500">
        {/* <Home /> */}
        <Navbar />
        <Hero />
        <MainCategory />
        <Content />
      </section>
    </main>
  );
}

export default App;
