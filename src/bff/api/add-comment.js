const generateDate = () =>
	new Date(Math.random() * 1000000000000 + 1999999999999)
		.toISOString()
		.substring(0, 16)
		.replace('T', ' ');

export const addComment = (userId, postId, content) =>
	fetch('http://localhost:3005/comments', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			author_id: userId,
			post_id: postId,
			publishedAt: generateDate(),
			content,
		}),
	});
