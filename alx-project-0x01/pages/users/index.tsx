// import { GetStaticProps } from 'next';
// import { useState } from 'react';
// import { fetchUsers } from '../../utils/fetchUsers';
// import { User } from '../../interfaces/User';
// import UserCard from '../../components/users/UserCard';
// import Modal from '../../components/common/Modal';
// import UserForm from '../../components/users/UserForm';

// export const getStaticProps: GetStaticProps = async () => {
//   const users = await fetchUsers();
//   return { props: { users } };
// };

// export default function UsersPage({ users }: { users: User[] }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [userList, setUserList] = useState(users); // local state for new users

//   return (
//     <div className="p-6 space-y-4">
//       <h1 className="text-2xl font-bold">Users</h1>

//       <button
//         onClick={() => setIsModalOpen(true)}
//         className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
//       >
//         Add User
//       </button>

//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <UserForm
//           onSubmit={(newUser) => {
//             console.log('User submitted:', newUser);
//             setUserList((prev) => [...prev, { ...newUser, id: prev.length + 1 }]);
//             setIsModalOpen(false);
//           }}
//         />
//       </Modal>

//       {userList.map((user) => (
//         <UserCard key={user.id} user={user} />
//       ))}
//     </div>
//   );
// }


import { GetStaticProps } from 'next';
import { useState } from 'react';
import { User } from '../../interfaces/User';
import UserCard from '../../components/users/UserCard';
import Modal from '../../components/common/Modal';
import UserForm from '../../components/users/UserForm';

export async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data;
}

export const getStaticProps: GetStaticProps = async () => {
  const users = await fetchUsers();
  return { props: { users } };
};

export default function UsersPage({ users }: { users: User[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userList, setUserList] = useState(users); // local state for new users

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Users</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Add User
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <UserForm
          onSubmit={(newUser) => {
            console.log('User submitted:', newUser);
            setUserList((prev) => [...prev, { ...newUser, id: prev.length + 1 }]);
            setIsModalOpen(false);
          }}
        />
      </Modal>

      {userList.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
