import { Droppable, Draggable } from "@hello-pangea/dnd";
import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

const TodoList = ({ todos, updateTodo, removeTodo }) => {
  return (
    <Droppable droppableId="todos">
      {(droppableProvider) => (
        <div
          ref={droppableProvider.innerRef}
          {...droppableProvider.droppableProps}
          className="mt-4 overflow-hidden rounded-t-md bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4"
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
              {(draggableProvider) => (
                <TodoItem
                  todo={todo}
                  updateTodo={updateTodo}
                  removeTodo={removeTodo}
                  ref={draggableProvider.innerRef}
                  {...draggableProvider.dragHandleProps}
                  {...draggableProvider.draggableProps}
                />
              )}
            </Draggable>
          ))}

          {droppableProvider.placeholder}
        </div>
      )}
    </Droppable>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  updateTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
