import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/users">Users</Link>
    </nav>
  );
}
