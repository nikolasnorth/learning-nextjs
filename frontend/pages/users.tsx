interface UsersPageStaticProps {
  users: any;
}

export default function UsersPage({users}: UsersPageStaticProps) {
  return (
    <>
      <h1>List of users:</h1>
      <ul>
        {users && users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps(): Promise<{ props: UsersPageStaticProps }> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data,
    }
  };
}
