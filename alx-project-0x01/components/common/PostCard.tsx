import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`border rounded shadow p-4 bg-white ${className}`}>
      {children}
    </div>
  );
}
