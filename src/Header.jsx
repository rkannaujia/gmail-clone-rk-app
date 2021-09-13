import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useSelector } from 'react-redux';
import { logout ,selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

function Header() {

  const user = useSelector(selectUser);
  const dispatch =useDispatch();
  const signOut = () =>{
    auth.signOut().then(() =>{
      dispatch(logout())
    })
    
  }
    return (
        <div className="header">
          <div className="header_left">
              <IconButton>
              <MenuIcon /> 
             </IconButton> 
             <img src="https://images.news18.com/ibnlive/uploads/2020/11/1604413203_gmail_logo.jpg" alt="" />  
          </div>
          <div className="header_middle">
            <SearchIcon />
            <input placeholder="Search mail"  type="text" />
            <IconButton>
            <ArrowDropDownIcon className="header_inputCaret" />
            </IconButton>
            
          </div>
            <div className="header_right">
            <IconButton>
            <AppsIcon />
            </IconButton>
            <IconButton>
            <NotificationsIcon />
            </IconButton>

            <Avatar onClick={signOut} src={user?.photoUrl} />
            </div>
        </div>
    )
}

export default Header
