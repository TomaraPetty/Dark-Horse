import React, { useEffect, useContext, useState } from 'react';
import firebase from '../Firebase/Firebase';
import { signInWithGoogle } from '../Firebase/Firebase';
import googleImg from '../../images/google.png';
import facebookImg from '../../images/facebook.png';
import twitterImg from '../../images/twitter.png';
import yahooImg from '../../images/yahoo.png';
import './styles.css';

const LoginModal = (props) => {
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
          <h3>Login</h3>
        </div>
        <div className="logins">
          <button className="google" onClick={signInWithGoogle}>
            <img className="img-login" src={googleImg}></img>
            Login with Google
          </button>
          <br></br>
          <button className="facebook">
            <img className="img-login" src={facebookImg}></img>
            Login with Facebook
          </button>
          <br></br>
          <button className="twitter">
            <img className="img-login" src={twitterImg}></img>
            Login with Twitter
          </button>
          <br></br>
          <button className="yahoo">
            <img className="img-login" src={yahooImg}></img>
            Login with Yahoo
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
