import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';
import { Button } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {login} from './features/userSlice';


function Login() {

    const dispatch = useDispatch();
    const SignIn = () => {
          auth.signInWithPopup(provider)
          .then(({user}) => {
              dispatch(login({
                  displayName: user.displayName,
                  email: user.email,
                  photoUrl: user.photoURL,
              })
              );
          })
          .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://images.news18.com/ibnlive/uploads/2020/11/1604413203_gmail_logo.jpg" alt="" />
                <Button variant="contained" color="primary" onClick={SignIn}>Login</Button>
            </div>
            
        </div>
    )
}

export default Login
