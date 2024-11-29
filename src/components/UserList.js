import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Phone</th>
            <th className="px-4 py-2 text-left"> website</th>
            <th className="px-4 py-2 text-left">company Name</th>

            <th className="px-4 py-2 text-left">City</th>

            <th className="px-4 py-2 text-left">Actions</th>

          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.phone}</td>
              <td className="px-4 py-2">{user.website}</td>
              <td className="px-4 py-2">{user.company.name}</td>
              <td className="px-4 py-2">{user.address.city}</td>

              <td className="px-4 py-2 ">
                <button
                  onClick={() => onEdit(user)}
                  className="bg-blue-500 text-white px-4 py-2  rounded-md mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="bg-red-500 text-white px-4 py-2   rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
