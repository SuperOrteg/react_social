import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";

const Users = () => {
  const { userSlug } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState('');
  const token = Cookies.get('Log');


  useEffect(() => {
	fetch(`http://localhost:1337/users/${userSlug}`, {
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
  }, [userSlug])

  return (
  	<div className="Users">
	  	<h1>{profile.username}</h1>
	  	<h2>{profile.email}</h2>
	  	<p>{profile.created_at}</p>
	  	<Link to="/users/modify">Modify MyProfile</Link>
  	</div>
  	)
};

export default Users;