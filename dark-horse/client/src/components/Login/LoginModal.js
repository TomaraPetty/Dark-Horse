import React, { useEffect, useContext, useState } from 'react';
import firebase from '../Firebase/Firebase';
import { signInWithGoogle } from '../Firebase/Firebase';
// import { auth } from '../Firebase/Firebase';
import './styles.css';

const LoginModal = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!props.show) {
    return null;
  }

  return (
    <div id="modal" onClick={props.onClose}>
      <div id="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={props.onClose}
          type="button"
          className="close"
          data-dismiss="modal"
          aria-hidden="true"
        >
          ×
        </button>
        <div id="modal-header">
          <h4>Sign In</h4>
        </div>
        <form onSubmit={(e) => e.preventDefault() && false}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <input id="submit" type="submit" value="SIGN IN" onClick={login} />
          <button onClick={signInWithGoogle}>Login with Google</button>
        </form>
      </div>
    </div>
  );
  async function login() {
    try {
      await firebase.login(email, password);
      window.location.href = '/';
      console.log('logged in');
    } catch (error) {
      alert(error.message);
    }
  }
};

export default LoginModal;
