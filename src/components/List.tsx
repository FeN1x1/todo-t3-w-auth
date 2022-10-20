import { Todo } from "@prisma/client";
// import { trpc } from "../utils/trpc";

const List: React.FC<{
  todos: Todo[] | undefined;
  handleOnClick: (id: string) => void;
}> = ({ todos, handleOnClick }) => {
  //   const del = trpc.todo.delete.useMutation();
  //   console.log(todos);

  const handleTodoDeletion = (id: string) => handleOnClick(id);

  return (
    <div className="flex flex-col">
      {todos &&
        todos.map((todo) => (
          <div key={todo.id} className="flex gap-4 p-2">
            <div>{todo.text}</div>
            <button onClick={() => handleTodoDeletion(todo.id)}>delete</button>
          </div>
        ))}
    </div>
  );
};

export default List;
