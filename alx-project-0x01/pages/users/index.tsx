import { GetStaticProps } from 'next';
import { useState } from 'react';
import UserCard from '../../components/common/UserCard';
import { User } from '../../interfaces';

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

interface UsersPageProps {
  users: User[];
}

export default function UsersPage({ users }: UsersPageProps) {
  const [userList, setUserList] = useState(users);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Users</h1>
      {/* Your Add User button and modal here if needed */}

      {userList.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
