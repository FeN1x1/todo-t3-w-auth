import { useState } from "react";
import Input from "../components/Input";
import { trpc } from "../utils/trpc";

const TodoHome = () => {
  const [input, setInput] = useState("");
  const many = trpc.example.getAll.useQuery();
  // const mutateTest = trpc.example.writeOne.useMutation();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleOnClick = () => {
    mutateTest.mutate({ id: number.toString() });
  };
  return (
    <div>
      <div>
        <Input
          value={input}
          handleOnChange={handleOnChange}
          onClick={handleOnClick}
        />
        {input}
      </div>
    </div>
  );
};

export default TodoHome;
