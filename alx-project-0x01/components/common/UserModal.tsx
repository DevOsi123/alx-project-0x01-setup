// components/common/UserModal.tsx
import React, { useState } from 'react';
import { UserProps } from '@/interfaces';

interface UserModalProps {
  onClose: () => void;
  onSubmit: (newUser: UserProps) => void;
}

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState<Partial<UserProps>>({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
    },
    company: {
      name: '',
      catchPhrase: '',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const field = name.split('.')[1];
      setForm((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else if (name.startsWith('company.')) {
      const field = name.split('.')[1];
      setForm((prev) => ({
        ...prev,
        company: { ...prev.company, [field]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    const newUser: UserProps = {
      ...(form as UserProps),
      id: Date.now(), // dummy unique ID
    };
    onSubmit(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-xl relative">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>

        <div className="grid grid-cols-2 gap-4">
          <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 rounded" />
          <input name="username" placeholder="Username" onChange={handleChange} className="border p-2 rounded" />
          <input name="email" placeholder="Email" onChange={handleChange} className="border p-2 rounded" />
          <input name="phone" placeholder="Phone" onChange={handleChange} className="border p-2 rounded" />
          <input name="website" placeholder="Website" onChange={handleChange} className="border p-2 rounded" />

          <input name="address.street" placeholder="Street" onChange={handleChange} className="border p-2 rounded" />
          <input name="address.suite" placeholder="Suite" onChange={handleChange} className="border p-2 rounded" />
          <input name="address.city" placeholder="City" onChange={handleChange} className="border p-2 rounded" />
          <input name="address.zipcode" placeholder="Zip Code" onChange={handleChange} className="border p-2 rounded" />

          <input name="company.name" placeholder="Company Name" onChange={handleChange} className="border p-2 rounded" />
          <input name="company.catchPhrase" placeholder="Catch Phrase" onChange={handleChange} className="border p-2 rounded" />
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
