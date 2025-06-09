import Link from 'next/link';
import { Ghost } from 'lucide-react';
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <Ghost size={64} className="text-gray-500 mb-4" />
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-md font-medium">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
