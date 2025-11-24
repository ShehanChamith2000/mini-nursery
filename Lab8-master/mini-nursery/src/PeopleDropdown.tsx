import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/UserService';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface PeopleDropdownProps {
  onSelect: (user: User) => void;
}

const PeopleDropdown: React.FC<PeopleDropdownProps> = ({ onSelect }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load users');
        setLoading(false);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = Number(e.target.value);
    setSelectedUserId(userId);
    const user = users.find((u) => u.id === userId);
    if (user) {
      onSelect(user);
    }
  };

  const selectedUser = users.find((u) => u.id === selectedUserId);

  return (
    <div>
      {loading && <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && (
        <>
          <select className="form-select" onChange={handleChange} value={selectedUserId ?? ''}>
            <option value="" disabled>Select a user</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          {selectedUser && (
            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">{selectedUser.name}</h5>
                <p className="card-text"><strong>Username:</strong> {selectedUser.username}</p>
                <p className="card-text"><strong>Email:</strong> {selectedUser.email}</p>
                <p className="card-text"><strong>Phone:</strong> {selectedUser.phone}</p>
                <p className="card-text"><strong>Website:</strong> {selectedUser.website}</p>
                <p className="card-text"><strong>Company:</strong> {selectedUser.company.name}</p>
                <p className="card-text"><strong>Address:</strong> {selectedUser.address.street}, {selectedUser.address.suite}, {selectedUser.address.city}, {selectedUser.address.zipcode}</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PeopleDropdown;
