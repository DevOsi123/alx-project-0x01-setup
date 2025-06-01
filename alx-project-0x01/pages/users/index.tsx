// pages/users/index.tsx
import { GetStaticProps } from 'next';
import UserCard from '../../components/common/UserCard';
import { UserProps } from '../../interfaces';

interface UsersPageProps {
  posts: UserProps[];
}

// Export getStaticProps exactly like this
export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
};

// Export default React component named Users
export default function Users({ posts }: UsersPageProps) {
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
