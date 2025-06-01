// pages/users/index.tsx
import { GetStaticProps } from 'next';
import UserCard from '../../components/common/UserCard'; // ✅ path depends on where you placed it
import { UserProps } from '../../interfaces'; // ✅ make sure this interface is defined correctly

interface UsersPageProps {
  posts: UserProps[];
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const Users = await response.json();

  return {
    props: {
      Users,
    },
  };
};

export default function Users({ posts }: UsersPageProps) { // 👈 destructuring the prop passed from getStaticProps
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

