import { Todo } from "@prisma/client";
import { Switch } from "@headlessui/react";

const List: React.FC<{
  todos: Todo[] | undefined;
  handleDeletion: (id: string) => void;
  handleCheckbox: (id: string, checked: boolean) => void;
}> = ({ todos, handleDeletion, handleCheckbox }) => {
  const handleTodoDeletion = (id: string) => handleDeletion(id);
  const handleTodoCheckbox = (id: string, checked: boolean) => {
    handleCheckbox(id, checked);
  };

  return (
    <>
      <div className="mt-6 flex flex-col rounded border-2 border-purple-300 p-4">
        {todos &&
          todos.map((todo) => (
            <div key={todo.id} className="flex gap-4 p-2">
              <Switch
                checked={todo.active}
                onChange={() => handleTodoCheckbox(todo.id, todo.active)}
                className={`${todo.active ? "bg-purple-600" : "bg-purple-300"}
          relative inline-flex h-[28px] w-[52.2px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <>
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`${
                      todo.active ? "translate-x-6" : "translate-x-0"
                    }
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </>
              </Switch>
              <div>{todo.text}</div>
              <button onClick={() => handleTodoDeletion(todo.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-red-700 ml-auto"
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
