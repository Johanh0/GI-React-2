import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "../css/components/detail.css";

const Detail = () => {
  const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("todoSelected");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="main__container--detail">
        <Card>
          <h1>{task.title}</h1>
          <p>{task.date}</p>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default Detail;
