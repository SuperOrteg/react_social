import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { fetchUserLoggedIn } from '../../redux/Todo';

const CreatePost = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const token = Cookies.get('Log');

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = {
		  text: event.target.text.value,
		  user: token
		};

		fetch('http://localhost:1337/posts', {
		  method: 'post',
		  headers: {
		  	'Authorization': `Bearer ${token}`,
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(data)
		});

		console.log(data)
	};

	return (
		<div className="form-signin">
		<form onSubmit={handleSubmit}>
			<h1 className="h3 mb-3 fw-normal">Publish a post</h1>
			<div className="form-floating mb-2">
				<input className="form-control" type="textarea" name="text" />
				<label>Body</label>
			</div>
				<input className="w-100 btn btn-lg btn-primary" type="submit" value="Publish" />
		</form>
		</div>
	)
};

export default CreatePost;
