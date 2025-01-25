import { useNavigate } from "react-router-dom";
import checkSvg from "../assets/check.svg";
import trashSvg from "../assets/trash.svg";
import arrowSvg from "../assets/arrow.svg";
const Task = ({
  task,
  taskId,
  isDeleted,
  isCheck,
  isEdit,
  onCheck,
  onDelete,
  onEdit,
  editable,
}) => {
  const navigate = useNavigate();

  const handleOpenTask = (id) => {
    if (!isCheck) return;

    const storageTodo = JSON.parse(localStorage.getItem("todo"));
    const todoSelected = storageTodo.find((duty) => duty.id === id);

    localStorage.setItem("todoSelected", JSON.stringify(todoSelected));
    navigate("/detail");
  };

  return (
    <div id={taskId} className="task">
      <div className={`task__title ${!isCheck && "check"}`}>
        <p contentEditable={editable} onInput={onEdit}>
          {task}
        </p>
      </div>
      <div className="task__btns">
        {isCheck && <img src={checkSvg} alt="check icon" onClick={onCheck} />}
        {isDeleted && (
          <img src={trashSvg} alt="check icon" onClick={onDelete} />
        )}
        {isEdit && (
          <img
            src={arrowSvg}
            alt="edit icon"
            onClick={() => handleOpenTask(taskId)}
          />
        )}
      </div>
    </div>
  );
};

export default Task;
