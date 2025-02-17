import LikeButton from './likebutton';

function PostCard({ post }) {
	return (
		<div style={styles.card}>
			<img src={post.profileImage} alt={post.username} style={styles.profileImage} />
			<h3 style={styles.username}>{post.username}</h3>
			<p style={styles.content}>{post.content}</p>
			<LikeButton isLikedInitially={post.isLiked} />
		</div>
	);
}

const styles = {
	card: {
		border: '1px solid #ddd',
		borderRadius: '8px',
		padding: '16px',
		margin: '10px',
		width: '300px',
		textAlign: 'center',
		boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
		backgroundColor: '#fff',
	},
	profileImage: {
		width: '50px',
		height: '50px',
		borderRadius: '50%',
		marginBottom: '10px',
	},
	username: {
		fontSize: '18px',
		marginBottom: '5px',
	},
	content: {
		fontSize: '14px',
		color: '#333',
		marginBottom: '10px',
	},
};

export default PostCard;