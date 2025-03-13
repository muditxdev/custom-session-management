import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold mb-6">Multi-Auth Demo</h1>
        <p className="text-gray-600 mb-8">
          This demo showcases multiple authentication contexts in Next.js App Router
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/auth/signin"
            className="block w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition duration-200"
          >
            User Login
          </Link>
          
          <Link
            href="/admin/auth/signin"
            className="block w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md transition duration-200"
          >
            Admin Login
          </Link>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Use these credentials:</p>
          <p>User: user@example.com / user123</p>
          <p>Admin: admin@example.com / admin123</p>
        </div>
      </div>
    </div>
  );
}