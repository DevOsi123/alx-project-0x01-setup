import { useState } from "react";

interface UserFormProps {
  onSubmit: (data: {
    name: string;
    email: string;
    address: {
      city: string;
      street: string;
    };
  }) => void;
}

export default function UserForm({ onSubmit }: UserFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      name,
      email,
      address: {
        city,
        street,
      },
    });

    // Clear the form
    setName("");
    setEmail("");
    setCity("");
    setStreet("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block">City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block">Street:</label>
        <input
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
