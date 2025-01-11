// pages/404.js

import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-4">
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>
      <h1 className="text-7xl font-extrabold text-gray-700">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">Oops! Page Not Found</h2>
      <p className="mt-2 text-gray-600">
        We're sorry, but the page you're looking for doesn't exist.
      </p>
      <p className="mt-5">
        <Link href="/">
          <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300">
            Back to Home
          </button>
        </Link>
      </p>
    </div>
  );
}
