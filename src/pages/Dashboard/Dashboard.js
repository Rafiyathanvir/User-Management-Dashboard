import React, { useEffect, useState } from "react";
import UserList from "../../components/UserList";
import axiosInstance from "../../api/api";
import Pagination from "../../components/Pagination";
import UserForm from "../../components/UserForm";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const itemsPerPage = 5;

  const fetchUsers = async () => {
    try {
      const { data } = await axiosInstance.get('/users');
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  const handleSaveUser = async (user) => {
    try {
      if (isEditing && selectedUser?.id) {
        await axiosInstance.put(`/users/${user.id}`, user);
        setUsers((prev) =>
          prev.map((u) => (u.id === user.id ? { ...u, ...user } : u))
        );
        setSuccessMessage("User edited successfully!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);

      } else {
        const { data } = await axiosInstance.post('/users', user);
        setUsers((prev) => [...prev, { ...user }]);
        setSuccessMessage("User added successfully!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);

      }
      setIsEditing(false);
      setSelectedUser(null);
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/users/${id}`);
      setUsers((prev) => prev.filter((user) => user.id !== id));
      setSuccessMessage("User Deleted Sucessfully!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);

    } catch (error) {
      console.error('Error deleting user:', error);
      setErrorMessage("An error occurred while saving the user.");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);

    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSelectedUser(null);
  };

  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-end items-end mb-4">
        {isEditing && (
          <button
            onClick={() => setIsEditing(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          >
            Back
          </button>
        )}

        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white  px-4 py-2 mb-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          >
            Add New User
          </button>
        )}
      </div>

      <h2 className="text-xl font-semibold mb-10 text-center">
        {isEditing ? "Edit User" : "Users Dashboard"}
      </h2>


      {isEditing ? (
        <UserForm
          initialData={selectedUser}
          onSubmit={handleSaveUser}
          onCancel={handleCancel}
        />
      ) : (
        <>
          <UserList
            users={paginatedUsers}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(users.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </>
      )}

      <div className="p-4 md:p-8">
        {successMessage && (
          <div className="mb-4 p-4 bg-blue-100 text-center text-blue-800 border border-blue-300 rounded-md">
            {successMessage}
          </div>
        )}

{errorMessage && (
          <div className="bg-red-500 text-white p-2 rounded-md mb-4">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
