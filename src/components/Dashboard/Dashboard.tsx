import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { auth, db, logout } from '../../firebase/firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';

export const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const fetchUserName = async() => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const docSnapshots = await getDocs(q);

      // if (docSnapshots.empty) {
      //   alert('User data not found');

      //   return;
      // }

      const data = docSnapshots.docs[0].data();

      console.log('Completed: ');
      console.log(data);
      console.log(docSnapshots);

      setName(data.name);
    } catch (err) {
      console.log('Error: ');
      console.error(err);
      alert('An error occurred while fetching user data');
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');
    fetchUserName();
  }, [user, loading]);

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};
