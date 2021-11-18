import User from "../components/User";
import {GetStaticPropsResult} from "next";

interface Props {
  users: any;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data,
    }
  };
}

export default function UsersPage({users}: Props) {
  return (
    <>
      <h1>List of users:</h1>
      <ul>
        {users && users.map((user: any) => (
          <User user={user} key={user.id}/>
        ))}
      </ul>
    </>
  );
}
