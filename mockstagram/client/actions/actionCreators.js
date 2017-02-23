// Increment
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

// Add commeny
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

// remove comment
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		postId,
		i
	}
}
