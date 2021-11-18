import {GetServerSidePropsContext, GetServerSidePropsResult} from "next";
import {useState} from "react";
import {useRouter} from "next/router";

interface Props {
  todoList: any;
}

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Props>> {
  const completed = context.query.completed;
  const queryString = completed ? "completed=true" : "";
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos?${queryString}`);
  const data = await res.json();

  return {
    props: {
      todoList: data,
    }
  };
}

export default function Todos({todoList}: Props) {
  const router = useRouter();
  const [todos, setTodos] = useState(todoList);

  async function fetchCompletedTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?completed=true");
    const data = await res.json();
    setTodos(data);
    router.push("/todos?completed=true", undefined, {shallow: true}).then();
  }

  return (
    <>
      <button onClick={fetchCompletedTodos}>Show Completed Todo's</button>
      <h1>List of todo's</h1>
      {todos?.map((todo: any) => {
        return (
          <div key={todo.id}>
            <h2>{todo.id} {todo.title} | {todo.completed ? "✅" : "❌"}</h2>
            <hr/>
          </div>
        );
      })}
    </>
  );
}
