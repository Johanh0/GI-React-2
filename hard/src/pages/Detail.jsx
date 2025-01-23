import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "../css/components/detail.css";

const Detail = () => {
  const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("todo");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const savedTasks = localStorage.getItem("todo");
      setTask(savedTasks ? JSON.parse(savedTasks) : []);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="main__container--detail">
        <Card>
          <h1>{task[0]?.title}</h1>
          <p>{task[0]?.date}</p>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default Detail;
