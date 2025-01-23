import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Card";
import TaskInput from "../components/TaskInput";
import TaskContainer from "../components/TaskContainer";
import Task from "../components/Task";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState(() => {
    const savedTasks = localStorage.getItem("todo");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [check, setCheck] = useState(() => {
    const savedChecked = localStorage.getItem("checked");
    return savedChecked ? JSON.parse(savedChecked) : [];
  });

  const updatingLocalStorage = (storageName, storageContent) => {
    localStorage.setItem(storageName, JSON.stringify(storageContent));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get a copy of all todos
    const allTodos = [...todo];
    // Push new todo
    const taskObj = {
      id: crypto.randomUUID(),
      title: inputValue,
      date: new Date(),
    };

    allTodos.push(taskObj);
    // Update the todo state
    setTodo(allTodos);
    updatingLocalStorage("todo", allTodos);
    // Clean input
    setInputValue("");
  };

  const handleDelete = (state, setState, index) => {
    const allState = [...state];
    const updateState = allState.filter((duty) => duty !== allState[index]);

    updatingLocalStorage("todo", updateState);

    setState(updateState);
  };

  const handleCheck = (index) => {
    const allCheck = [...check];
    const allTodos = [...todo];
    const newCheck = allTodos[index];

    handleDelete(todo, setTodo, index);

    allCheck.push(newCheck);
    setCheck(allCheck);
    updatingLocalStorage("checked", allCheck);
  };

  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="main__container">
        <Card>
          <TaskInput
            value={inputValue}
            onChangeValue={(e) => setInputValue(e.target.value)}
            submitTask={(e) => handleSubmit(e)}
          />
          <TaskContainer title={`Task to do - ${todo.length}`}>
            {todo.map((duty, index) => (
              <Task
                key={duty.id}
                taskId={duty.id}
                task={duty.title}
                isDeleted={true}
                isCheck={true}
                onCheck={() => handleCheck(index)}
                onDelete={() => handleDelete(todo, setTodo, index)}
              />
            ))}
          </TaskContainer>
          <TaskContainer title={`Done - ${check.length}`}>
            {check.map((duty, index) => (
              <Task
                key={duty.id}
                taskId={duty.id}
                task={duty.title}
                isDeleted={true}
                isCheck={false}
                onDelete={() => handleDelete(check, setCheck, index)}
              />
            ))}
          </TaskContainer>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default Home;
