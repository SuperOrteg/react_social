import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { fetchUserLoggedIn } from '../../redux/Todo';

const Signup = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = {
		  username: event.target.username.value,
		  email: event.target.email.value,
		  password: event.target.password.value
		};

		fetch('http://localhost:1337/auth/local/register', {
		  method: 'post',
		  headers: {
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(data)
		})
	      .then(res => res.json())
	      .then(
	        (result) => {
	          setIsLoaded(true);
	          Cookies.set('Log', result.jwt);
	          dispatch(fetchUserLoggedIn());
	        },
	        (error) => {
	          setIsLoaded(true);
	          setError(error);
	        }
	      );
	};

	return (
		<div className="form-signin">
		<form onSubmit={handleSubmit}>
			<h1 className="h3 mb-3 fw-normal">Please sign up</h1>
			<div className="form-floating mb-2">
				<input className="form-control" type="text" name="username" />
				<label>Username</label>
			</div>
			<div className="form-floating mb-2">
				<input className="form-control" type="email" name="email" />
				<label>Mail</label>
			</div>
			<div className="form-floating mb-2">
				<input className="form-control" type="password" name="password" />
				<label>Password</label>
			</div>
			<div className="form-floating mb-2">
				<input className="form-control" type="password" name="passwordConfirmation" />
				<label>Password confirmation</label>
			</div>
				<input className="w-100 btn btn-lg btn-primary" type="submit" value="Sign Up" />
		</form>
		</div>
	)
};

export default Signup;