import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard'; // adjust path as needed
import { UserProps } from '@/interfaces';

interface UsersProps {
  users: UserProps[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6 bg-gray-50">
        <h1 className="text-4xl font-bold mb-8 text-center">Users List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
    </div>
  );
};

// Example static props function fetching users from an API or local data
export async function getStaticProps() {
  // Replace with your actual data source
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
