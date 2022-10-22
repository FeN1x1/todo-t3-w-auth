import { Todo } from "@prisma/client";
import Toggle from "./Toggle";

const List: React.FC<{
  todos: Todo[] | undefined;
  handleDeletion: (id: string) => void;
  handleCheckbox: (id: string, checked: boolean) => void;
}> = ({ todos, handleDeletion, handleCheckbox }) => {
  const handleTodoDeletion = (id: string) => handleDeletion(id);

  return (
    <>
      <div className="mt-6 flex flex-col rounded border-2 border-purple-300 p-4">
        {todos &&
          todos.map((todo) => (
            <div key={todo.id} className="flex gap-4 p-2">
              <Toggle
                active={todo.active}
                id={todo.id}
                handleCheckbox={handleCheckbox}
              />
              <div>{todo.text}</div>
              <button onClick={() => handleTodoDeletion(todo.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-auto text-red-700"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default List;
