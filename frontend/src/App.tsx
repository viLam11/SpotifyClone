import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin, type TokenResponse } from '@react-oauth/google';
import axios from 'axios';
// import { Amplify, Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);

interface UserProfile {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
}

function App() {
  const [user, setUser] = useState<TokenResponse | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get<UserProfile>(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        })
        .then((res) => {
          setProfile(res.data);
          console.log(res.data)
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
  };

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      {profile ? (
        <div>
          {profile?.picture && (
            <img src={profile.picture} alt="user image" />
          )}
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button className='border rounded-md p-2 hover:bg-gray-400 hover:transition' onClick={() => login()}>Sign in with Google 🚀</button>
      )}
    </div>
  );
}

export default App;
