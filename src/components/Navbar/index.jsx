import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchUserLoggedOut } from '../../redux/Todo';

const Navbar = () => {
	const dispatch = useDispatch();

	return (
	  <header className="d-flex justify-content-center py-3">
	  <ul className="nav nav-pills">
         <li class="nav-item">
         	<Link className="nav-link" to="/">Home</Link>
         </li>
         <li class="nav-item">
         	<Link className="nav-link" to="/signin">Signin</Link>
         </li>
         <li class="nav-item">
         	<Link className="nav-link" to="/signup">Signup</Link>
         </li>
         <li class="nav-item">
         	<Link className="nav-link" to="/users/me">MyProfile</Link>
         </li>
         <li class="nav-item">
         	<Link className="nav-link" to="/" onClick={() => dispatch(fetchUserLoggedOut())} >Signout</Link>
         </li>
      </ul>
      </header>
      )};

export default Navbar;