import React from 'react';
import { User } from '../../interfaces';

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition-shadow bg-white">
      <h2 className="text-xl font-semibold text-blue-700 mb-1">{user.name}</h2>
      <p className="text-gray-700 text-sm mb-1">Email: {user.email}</p>
      <p className="text-gray-700 text-sm mb-1">Phone: {user.phone}</p>
      <p className="text-gray-700 text-sm mb-1">Website: <a href={`https://${user.website}`} className="text-blue-500 underline">{user.website}</a></p>
      <div className="text-sm text-gray-600 mt-2">
        <p>📍 {user.address.city}, {user.address.street}</p>
        <p>🏢 {user.company.name}</p>
      </div>
    </div>
  );
}
