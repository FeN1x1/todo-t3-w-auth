import { useState } from "react";

import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";

import { trpc } from "../utils/trpc";

import List from "../components/List";
import Input from "../components/Input";
import Radio from "../components/Radio";

export type TodoFilters = "All" | "Completed" | "Not Completed";

const Home: NextPage = () => {
  const { mutate: mutateCreate } = trpc.todo.create.useMutation({
    onSuccess: () => refetch(),
  });
  const { data: getAll, refetch } = trpc.todo.getAll.useQuery();
  const { mutate: mutateDelete } = trpc.todo.delete.useMutation({
    onSuccess: () => refetch(),
  });
  const { mutate: mutateUpdate } = trpc.todo.update.useMutation({
    onSuccess: () => refetch(),
  });

  const [input, setInput] = useState<string>("");
  const [radio, setRadio] = useState<TodoFilters>("All");

  const { data: session } = useSession();

  const handleCreateTodo = () => {
    if (input !== "") {
      mutateCreate({ text: input });
      setInput("");
    }
  };

  const handleCheckTodo = (id: string, checked: boolean) => {
    mutateUpdate({
      id,
      active: !checked,
    });
  };

  const filterTodos = () => {
    switch (radio) {
      case "All":
        return getAll;
      case "Completed":
        return getAll?.filter((todo) => todo.active);
      case "Not Completed":
        return getAll?.filter((todo) => !todo.active);
    }
  };

  return (
    <>
      <Head>
        <title>Create T3 App TODO</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center">
        {session ? (
          <div className="flex max-w-md flex-col">
            <Radio radio={radio} setRadio={setRadio} />
            <Input
              value={input}
              handleOnChange={(e) => setInput(e.target.value)}
              handleOnClick={handleCreateTodo}
            />
            <List
              handleDeletion={(id: string) => mutateDelete({ id })}
              handleCheckbox={handleCheckTodo}
              todos={filterTodos()}
            />
          </div>
        ) : (
          <div className="my-32 justify-center text-xl font-semibold">
            Please log in to see your todos
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
