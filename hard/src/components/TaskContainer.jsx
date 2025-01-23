import "../css/components/taskContainer.css";

const TaskContainer = ({ title, children }) => {
  return (
    <div className="task__container">
      <div className="task__container--title">
        <h5>{title}</h5>
      </div>
      <div className="task__container--tasks">{children}</div>
    </div>
  );
};

export default TaskContainer;
