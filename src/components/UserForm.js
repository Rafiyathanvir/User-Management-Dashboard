import React, { useState, useEffect } from 'react';

const UserForm = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    company: '',
    address: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        email: initialData.email,
        phone: initialData.phone,
        website: initialData.website,
        company: initialData.company.name,
        address: `${initialData.address.street}, ${initialData.address.city}`,
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      id: initialData?.id, // Include user ID if editing
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-md max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-sm md:text-base">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border w-full px-4 py-2 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm md:text-base">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border w-full px-4 py-2 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm md:text-base">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="border w-full px-4 py-2 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm md:text-base">Website</label>
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="border w-full px-4 py-2 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm md:text-base">Company</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="border w-full px-4 py-2 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm md:text-base">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="border w-full px-4 py-2 rounded-md"
        />
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-1/2 mr-2"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded-md w-1/2 ml-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserForm;
