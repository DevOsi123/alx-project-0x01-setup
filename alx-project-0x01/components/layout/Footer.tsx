import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} My Next.js App. All rights reserved.</p>
      </div>
    </footer>
  );
}
