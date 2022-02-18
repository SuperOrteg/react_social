import React from 'react';
import { Link } from "react-router-dom";

const PostList = ({ text, user, id }) => {
	const userLink = `/users/${id}`

	return (
			<div className="card">
				<div className="card-body">
					<p className="card-text">{text}</p>
					<Link className="btn btn-primary" to={userLink}>{user}</Link>
				</div>
			</div>
		)
}

export default PostList;