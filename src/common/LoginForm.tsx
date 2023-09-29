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
        if (res.data.userType === 'ROLE_ADMIN') {
          navigate('/myagentboard/landing');
        } else if (res.data.userType === 'ROLE_USER') {
          navigate('/playerboard/sabong');
        } else if (res.data.userType === 'ROLE_GC') {
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


    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="button" onClick={handleLogin} className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>



















    /*<div>
      <div className="card">
        <h3>
          <div className="card-header">
            Sales Invoice/Delivery Receipt Create
          </div>
        </h3>
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">Sales Order No: </div>
              <div className="col-sm-3">
                <input
                  id="salesOrderNo"
                  name="salesOrderNo"
                  type="text"
                  className="form-control"
                //value={salesOrderNo}
                //onChange={(event) => setSalesOrderNo(event.target.value)}
                />
              </div>
              <div className="col-sm-2">Issue Date: </div>
              <div className="col-sm-3">
                <input
                  id="salesOrderNo"
                  name="salesOrderNo"
                  type="text"
                  className="form-control"
                //value={salesOrderNo}
                //onChange={(event) => setSalesOrderNo(event.target.value)}
                />


              </div>

            </div>

          </div>

        </div>


      </div>*/
















      /*<div>
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

    </div>*/
  );
};

export default LoginForm;
