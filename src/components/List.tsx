import { Todo } from "@prisma/client";
import { trpc } from "../utils/trpc";

const List: React.FC<{ todos: Todo[] | undefined }> = ({ todos }) => {
  const del = trpc.todo.delete.useMutation();
  console.log(todos);

  const handleOnClick = (id: string) => {
    del.mutate({ id: id });
  };
  return (
    <div className="flex flex-col">
      {todos &&
        todos.map((todo) => (
          <div key={todo.id} className="flex gap-4 p-2">
            <div>{todo.text}</div>
            <button onClick={() => handleOnClick(todo.id)}>delete</button>
          </div>
        ))}
    </div>
  );
};

export default List;
