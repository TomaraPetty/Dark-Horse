import react from 'react';
import firebase from '../Firebase/Firebase';

const LoginBtn = (props) => {
  return (
    <div>
      <ul>
        <li>
          <a onClick={props.onClick}>Login</a>
        </li>
        <li>
          <a onClick={logout}>Logout</a>
        </li>
      </ul>
    </div>
  );
  async function logout() {
    await firebase.logout();
    window.location.href = '/';
    console.log('logged out');
  }
};

export default LoginBtn;
