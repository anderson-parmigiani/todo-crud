import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = ({ todo, updateTodo, removeTodo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="flex gap-4 border-b border-b-gray-400">
      <button
        onClick={() => updateTodo(id)}
        className={`h-5 w-5 rounded-full border-2
        ${
          completed
            ? "flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : "inline-block flex-none"
        }`}
      >
        {completed && <IconCheck />}
      </button>

      <p
        className={`grow text-gray-600 transition-all duration-1000 dark:text-gray-400 ${completed && "line-through"}`}
      >
        {title}
      </p>

      <button onClick={() => removeTodo(id)} className="flex-none">
        <IconCross />
      </button>
    </article>
  );
};

export default TodoItem;
