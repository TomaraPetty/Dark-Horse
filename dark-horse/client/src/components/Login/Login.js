import React, { useState } from 'react';
import LoginModal from './LoginModal';
import LoginBtn from './LoginBtn';
import './styles.css';

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <LoginBtn onClick={() => setShow(true)} />
      <LoginModal onClose={() => setShow(false)} show={show} />
    </div>
  );
};

export default Login;
