import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isEmpty } from 'lodash';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';

export const Login = () => {
  const [isLoggedIn, setLoginStatus] = useState(false);

  const getAllUsers = async() => {
    const data = await axios.get('/user/authenticated/getAll');
  };

  const responseGoogle = async(response: CredentialResponse) => {
    const bodyObject = {
      jwtToken: response.credential,
    };

    try {
      if (isEmpty(response.errors)) {
        await axios.post('/login/user', bodyObject);
        setLoginStatus(true);
      }
    } catch (e) { /* empty */ }
  };

  const logout = async() => {
    try {
      await axios.get('/logout/user');
      setLoginStatus(false);
    } catch (e) { /* empty */ }
  };

  useEffect(() => {
    async function getStatus() {
      try {
        const data = await axios.get('/user/checkLoginStatus');

        if (isEmpty(data.error)) {
          setLoginStatus(true);
        }
      } catch (e) {
        setLoginStatus(false);
      }
    }
    getStatus();
  }, []);

  return (
    <div className="login">
        <GoogleLogin
          render={(renderProps) => (
            <button
              className="btn g-sigin"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <p>Continue with Google</p>
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <button onClick={getAllUsers}>Get All Users in db</button>
        {isLoggedIn && <button onClick={logout}>Logout</button>}
    </div>
  );
};
