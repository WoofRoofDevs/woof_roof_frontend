import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';
import { auth, db, logout } from '../../firebase/firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';

export const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const fetchUserName = async() => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const docSnapshots = await getDocs(q);
      const data = docSnapshots.docs[0].data();

      setName(data.name);
    } catch (err) {
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
