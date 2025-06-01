// components/common/UserCard.tsx
import React from 'react';
import { UserProps } from '../../interfaces';

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const {
    name,
    username,
    email,
    phone,
    website,
    address,
    company,
  } = user;

  // Create initials for avatar fallback
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  // Safe website URL
  const websiteUrl = website.startsWith('http') ? website : `https://${website}`;

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="flex p-6 gap-6 items-center">
        {/* Avatar Circle */}
        <div className="flex-shrink-0 w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-md">
          {initials}
        </div>

        {/* User Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-extrabold text-indigo-900">{name}</h2>
          <span className="inline-block bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold tracking-wide">
            @{username}
          </span>

          <p className="mt-3 text-gray-700">
            <strong>Email:</strong> {email}
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> {phone}
          </p>

          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md transition-colors duration-200 font-medium"
            aria-label={`Visit ${name}'s website`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.5a1.5 1.5 0 010 3H14m0-3v6m0-6L10 7m4 3L10 17" />
            </svg>
            Visit Website
          </a>
        </div>
      </div>

      <div className="bg-indigo-100 p-4 text-indigo-900 rounded-b-xl">
        <h3 className="font-semibold mb-2">Address</h3>
        <p>
          {address.street}, {address.suite}
        </p>
        <p>
          {address.city}, {address.zipcode}
        </p>
      </div>

      <div className="bg-purple-100 p-4 rounded-b-xl">
        <h3 className="font-semibold mb-1">Company</h3>
        <p className="font-bold text-purple-800">{company.name}</p>
        <blockquote className="italic text-purple-600 border-l-4 border-purple-400 pl-4 mt-2">
          “{company.catchPhrase}”
        </blockquote>
      </div>
    </div>
  );
};

export default UserCard;
