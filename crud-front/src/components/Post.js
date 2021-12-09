function Post(props) {
	const { post } = props;
	
	return (
		<div className="post">
			<div className="post-header">
				<img className="user-img" src="http://placehold.it/32x32" alt="img" />
				<div className="post-info">
					<p className="user-name">Ivan Ivanov</p>
					<p className="post-date">{post.created}</p>
				</div>
			</div>

			<div className="post-content">{post.content}</div>

			<div className="post-footer">
				<button className="btn like-btn">Нравится</button>
				<button className="btn comment-btn">Комментировать</button>
			</div>

			{props.children}
		</div>
	)
}

export default Post;