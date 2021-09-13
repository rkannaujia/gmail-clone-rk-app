import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice'
import { selectUser } from './features/userSlice';
import Login from './Login';
import {useDispatch } from 'react-redux';
import { auth } from './firebase';
import {login} from './features/userSlice';


function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
     auth.onAuthStateChanged(user => {
       if(user) {
         //the user is logged in
         dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
         }))
       }
     })
  }, [])

  return (
    <Router>

      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app_body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}

        </div>
      )}

    </Router>
  );
}

export default App;
