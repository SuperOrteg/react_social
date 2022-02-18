import React, { useState, useEffect } from 'react';
import PostList from '../../components/PostList';

const Home = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [posts, setPosts] = useState(undefined);

	useEffect(() => {
	fetch(`http://localhost:1337/posts`, {
	  method: 'get',
	  headers: {
	    'Content-Type': 'application/json'
	  },
	})
	  .then(res => res.json())
	  .then(
	    (result) => {
	      setPosts(result);
	      console.log(result);
	      setIsLoaded(true);
	    },
	    (error) => {
	      setIsLoaded(true);
	      setError(error);
	      console.log(error);
	    }
	  );
	}, [])

	return (
		<div className="Home">
			<h1>Welcome on My Social Network. This website is a training to Redux and React. We use auth and routing to create a small social media website.</h1>
			<div className="row">
				{!isLoaded && <h4>Loading</h4>}
			    {isLoaded && posts.map((post) => <PostList text={post.text} user={post.user.username} id={post.id} key={post.id} />)}
			</div>
		</div>
		)
};

export default Home;