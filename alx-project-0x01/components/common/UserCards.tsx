// components/common/UserCard.tsx
import React from 'react';
import { User } from '../../interfaces';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Username:</span> {user.username}
      </p>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Phone:</span> {user.phone}
      </p>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Website:</span>{' '}
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {user.website}
        </a>
      </p>
      <div className="mt-3">
        <h3 className="font-semibold">Address</h3>
        <p className="text-gray-700">
          {user.address.street}, {user.address.suite}
        </p>
        <p className="text-gray-700">
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>
      <div className="mt-3">
        <h3 className="font-semibold">Company</h3>
        <p className="text-gray-700">{user.company.name}</p>
        <p className="italic text-sm text-gray-500">{user.company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
