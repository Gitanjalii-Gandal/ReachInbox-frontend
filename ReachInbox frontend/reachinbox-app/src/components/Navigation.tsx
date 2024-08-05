// src/components/Navigation.tsx
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/onebox">Onebox</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navigation;
