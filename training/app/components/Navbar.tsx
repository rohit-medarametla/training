import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      {/* Left side: Logo or Site Title */}
      <div className="text-lg font-bold">
        <Link href="/">My Training Site</Link>
      </div>

      {/* Right side: Navigation Links */}
      <div className="flex gap-4">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
      </div>
    </nav>
  );
}