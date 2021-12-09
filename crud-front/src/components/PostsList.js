import { Link } from 'react-router-dom';
import Post from '../components/Post';
import PostsContext from '../contexts/PostsContext';
import { useContext } from 'react';

function PostsList() {
	const { posts } = useContext(PostsContext);

	return (
		<div className="posts-list">
			{
				posts.map(o => <Link to={`/posts/${o.id}`} key={o.id}><Post post={o} /></Link>)
			}
		</div>
	)
}

export default PostsList;