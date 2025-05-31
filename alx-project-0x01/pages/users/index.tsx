// pages/users/index.tsx
import { GetStaticProps } from 'next';
import { useState } from 'react';
import UserCard from '../../components/common/UserCard';
import { UserProps } from '../../interfaces';

interface UsersPageProps {
  users: UserProps[];
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await response.json();

  return {
    props: {
      users,
    },
  };
};

export default function UsersPage({ users }: UsersPageProps) {
  const [userList, setUserList] = useState(users);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Users</h1>
      {userList.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
