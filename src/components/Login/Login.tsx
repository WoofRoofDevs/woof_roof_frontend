import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  auth,
  signInWithGoogle,
} from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './login.css';

export const Login = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate('/dashboard');
  }, [user, loading]);

  return (
    <div className="login">
      <button className="login__btn login__google" onClick={signInWithGoogle}>
        Login with Google
      </button>
    </div>
  );
};
