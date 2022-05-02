import { format } from "date-fns";

export const TodoCard = ({ todoInfo }) => {
  const { id, task, isCompleted, createdAt } = todoInfo;

  return (
    <div className="todo-card">
      <label>
        <input type="checkbox" checked={isCompleted} />
        <span className={`task-completed-${isCompleted}`}>{task}</span>
      </label>
      <small>{format(new Date(createdAt), "dd/MM/yyyy")}</small>
    </div>
  );
};
