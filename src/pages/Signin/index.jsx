import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { fetchUserLoggedIn } from '../../redux/Todo';

const Signin = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = {
		  identifier: event.target.email.value,
		  password: event.target.password.value
		};

		if(event.target.password.value === event.target.passwordConfirmation.value) {
		fetch('http://localhost:1337/auth/local', {
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
	      )} else {
	      	alert("Passwords don't match");
	      };
	};

	return (
		<div className="form-signin">
		<form onSubmit={handleSubmit}>
			<h1 className="h3 mb-3 fw-normal">Please sign in</h1>
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
				<input className="w-100 btn btn-lg btn-primary" type="submit" value="Sign In" />
		</form>
		</div>
	)
};

export default Signin;
