import { useState } from 'react';

function LikeButton({ isLikedInitially }) {
	const [isLiked, setIsLiked] = useState(isLikedInitially);

	const handleLikeToggle = () => {
		setIsLiked(!isLiked);
	};

	return (
		<button
			onClick={handleLikeToggle}
			style={{
				padding: '8px 12px',
				border: 'none',
				borderRadius: '5px',
				cursor: 'pointer',
				backgroundColor: isLiked ? '#ff4d4d' : '#ddd',
				color: isLiked ? '#fff' : '#000',
				transition: 'background-color 0.3s',
			}}
		>
			{isLiked ? 'Unlike' : 'Like'}
		</button>
	);
}

export default LikeButton;