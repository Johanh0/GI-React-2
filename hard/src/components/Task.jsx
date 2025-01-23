import { useNavigate } from "react-router-dom";
import checkSvg from "../assets/check.svg";
import trashSvg from "../assets/trash.svg";
const Task = ({ task, taskId, isDeleted, isCheck, onCheck, onDelete }) => {
  const navigate = useNavigate();

  const handleOpenTask = (id) => {
    if (!isCheck) return;

    const storageTodo = JSON.parse(localStorage.getItem("todo"));

    const todoSelected = storageTodo.find((duty) => duty.id === id);

    localStorage.setItem("todoSelected", JSON.stringify(todoSelected));
    console.log(todoSelected);
    navigate("/detail");
  };

  return (
    <div id={taskId} className="task">
      <div className="task__title">
        <p onClick={() => handleOpenTask(taskId)}>{task}</p>
      </div>
      <div className="task__btns">
        {isCheck && <img src={checkSvg} alt="check icon" onClick={onCheck} />}
        {isDeleted && (
          <img src={trashSvg} alt="check icon" onClick={onDelete} />
        )}
      </div>
    </div>
  );
};

export default Task;
