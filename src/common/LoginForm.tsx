// LoginForm.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import axios from 'axios'

const LoginForm = () => {
  //const token = useSelector((state) => state.token.value)
  const dispatch = useDispatch()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogin = async () => {
    axios
    .post("http://localhost:8080/auth/signin", {
      username: username,
      password: password
    })
    .then((res) => {
      console.log(res.data.userType)      
      //setResult(`token: ${res.data.token}`)
      localStorage.setItem('token', res.data.token.token);
      if(res.data.userType === 'ROLE_ADMIN'){
        navigate('/agentboard');
      }else if(res.data.userType === 'ROLE_USER'){
        navigate('/playerboard/sabong');
      }else if(res.data.userType === 'ROLE_GC'){
        navigate('/gcboard');
      }
    })
    .catch(error => {
      console.log("ERRORR")
      setOpen(true);
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

    </div>
    
  );
};

export default LoginForm;
