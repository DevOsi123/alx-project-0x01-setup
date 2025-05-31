import { User } from '../../interfaces/User';

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold">{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.address.city}, {user.address.street}</p>
    </div>
  );
}
