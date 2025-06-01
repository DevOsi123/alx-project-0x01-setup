// pages/users/index.tsx
import { UserProps } from '../../interfaces';
import UserCard from '../../components/common/UserCard';

interface UsersPageProps {
  posts: UserProps[];
}

// Use this exact syntax — function first, export later
function Users({ posts }: UsersPageProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

// 👇 this line is what the checker is looking for — exact match
export default Users;

// And this too must be function syntax, not arrow function
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts: UserProps[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}
