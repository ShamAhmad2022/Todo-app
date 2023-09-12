import React, { useState, useContext } from 'react';
import { When } from 'react-if';
import { LoginContext } from '../../Conext/AuthContext';

function Login() {
  const loginContext = useContext(LoginContext);
  
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginContext.login(formData.username, formData.password);
  };

  return (
    <>
      <When condition={loginContext.loggedIn}>
        <button className="btn btn-light" onClick={loginContext.logout}>Log Out</button>
      </When>

      <When condition={!loginContext.loggedIn}>
        <form className="d-flex" onSubmit={handleSubmit}>
          <input 
            className="form-control me-2" 
            type="text"
            placeholder="UserName"
            name="username"
            onChange={handleChange}
          />
          <input
            placeholder="password"
            className="form-control me-2"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <button className="btn btn-light" type="submit">Login</button>
        </form>

    {/* <form class="d-flex">
      <input class="form-control me-2" type="text" placeholder="Username" />
      <input class="form-control me-2" type="password" placeholder="Password" />
      <button class="btn btn-light" type="submit">signup</button>
    </form>*/}

      </When>
    </>
  );
}

export default Login;
