interface UserComponentProps {
  user: any;
}

export default function User({user}: UserComponentProps) {
  return <li key={user.id}>{user.name}</li>;
}
