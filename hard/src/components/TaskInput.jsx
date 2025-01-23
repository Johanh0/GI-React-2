import "../css/components/taskInput.css";

const TaskInput = ({ value, onChangeValue, submitTask }) => {
  return (
    <form className="task__form" onSubmit={submitTask}>
      <input
        onChange={onChangeValue}
        type="text"
        value={value}
        placeholder="Add a new task"
      />
      <input type="submit" value="+" />
    </form>
  );
};

export default TaskInput;
