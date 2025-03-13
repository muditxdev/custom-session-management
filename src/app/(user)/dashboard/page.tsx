export default function UserDashboard() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
        <p className="text-gray-600">
          Welcome to your user dashboard. This content is only visible to logged in users.
        </p>
        <div className="mt-8 p-4 bg-indigo-50 rounded-md">
          <h2 className="text-lg font-semibold mb-2">User Features</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>View your profile</li>
            <li>Manage your settings</li>
            <li>Access user-specific content</li>
          </ul>
        </div>
      </div>
    );
  }
  