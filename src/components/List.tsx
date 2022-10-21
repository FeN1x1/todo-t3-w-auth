import { Todo } from "@prisma/client";

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
    <div className="flex flex-col">
      {todos &&
        todos.map((todo) => (
          <div key={todo.id} className="flex gap-4 p-2">
            <input
              type="checkbox"
              checked={todo.active}
              onChange={() => handleTodoCheckbox(todo.id, todo.active)}
            />
            <div>{todo.text}</div>
            <button onClick={() => handleTodoDeletion(todo.id)}>delete</button>
          </div>
        ))}
    </div>
  );
};

export default List;
