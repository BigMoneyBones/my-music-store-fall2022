import React, { useState } from 'react';
// import {useContext} from 'react;
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../layout/Layout';
import UsernameField from '../textFields/UsernameField';
import PasswordField from '../textFields/PasswordField';
import { signIn, signOut } from '../../redux-state/userSlice';
// import Axios from '../../utils/Axios';
// import { sampleUserData } from '../../mockData';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (prop) => (event) => {
    setUserData({ ...userData, [prop]: event.target.value });
  };

  // const onSubmit = async () => {
  //   // Call the back end with the credentials data
  //   const response = await Axios.post('/sign-in', { credentials: signInForm });

  //   const fetchedUser = response.data.user;
  //   // Insert the response user into the state

  //   dispatch(signIn(fetchedUser));
  // };

  const onLogin = () => {
    dispatch(signIn(userData));
    navigate('/home');
  };

  const onLogout = () => {
    dispatch(signOut());
  };

  return (
    <Layout>
      {!user ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          style={{ marginTop: '25vh' }}
        >
          <UsernameField
            userData={userData}
            value={userData.username}
            handleChange={handleChange}
          />
          <PasswordField
            userData={userData}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            value={userData.password}
            handleChange={handleChange}
          />
          <br />
          <Button variant="contained" color="success" onClick={onLogin}>
            Login
          </Button>
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          style={{ marginTop: '35vh' }}
        >
          <Button variant="contained" color="error" onClick={onLogout}>
            Logout
          </Button>
        </Box>
      )}
    </Layout>
  );
}

export default LoginPage;
