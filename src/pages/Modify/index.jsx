import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { fetchUserLoggedIn } from '../../redux/Todo';

const Modify = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState('');
  const token = Cookies.get('Log');

	useEffect(() => {
	fetch(`http://localhost:1337/users/me`, {
	  method: 'get',
	  headers: {
	  	'Authorization': `Bearer ${token}`,
	    'Content-Type': 'application/json'
	  },
	})
	  .then(res => res.json())
	  .then(
	    (result) => {
	      setIsLoaded(true);
	      setProfile(result);
	    },
	    (error) => {
	      setIsLoaded(true);
	      setError(error);
	    }
	  );
	}, [])

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = {
		  username: event.target.username.value,
		  email: event.target.email.value,
		  password: event.target.password.value
		};

		fetch('http://localhost:1337/users/me', {
		  method: 'put',
		  headers: {
		  	'Authorization': `Bearer ${token}`,
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(data)
		})
	};

	return (
		<div className="form-signin">
		<form onSubmit={handleSubmit}>
			<h1 className="h3 mb-3 fw-normal">Modify your profile</h1>
			<div className="form-floating mb-2">
				<input className="form-control" type="text" name="username" defaultValue={profile.username}/>
				<label>Username</label>
			</div>
			<div className="form-floating mb-2">
				<input className="form-control" type="email" name="email" defaultValue={profile.email}/>
				<label>Mail</label>
			</div>
			<div className="form-floating mb-2">
				<input className="form-control" type="password" name="password" required />
				<label>Password</label>
			</div>
			<div className="form-floating mb-2">
				<input className="form-control" type="password" name="passwordConfirmation" required />
				<label>Password confirmation</label>
			</div>
				<input className="w-100 btn btn-lg btn-primary" type="submit" value="Modify" />
		</form>
		</div>
	)
};

export default Modify;