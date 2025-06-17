import { database } from '../database/config';
import { ref, update, get, remove, push } from 'firebase/database';
import { comments } from './reducer';

export function startAddingPost(post) {
    return (dispatch) => {
        const postRef = ref(database, 'posts/' + post.id);
        return update(postRef, post).then(() => {
            dispatch(addPost(post));
        }).catch((error) => {
            console.error("Error adding post:", error);
        });
    };
}

export function startLoadingPosts() {
    return (dispatch) => {
        const postRef = ref(database, "posts/");
        return get(postRef).then((snapshot) => {
            let posts = [];
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val());
            })
            dispatch(loadPosts(posts));
        }).catch((error) => {
            console.error("Error loading posts:", error);
        });
    }
}

export function startRemovingPost(index, id) {
    return (dispath) => {
        const updates = {
            [`posts/${id}`]: null,
            [`comments/${id}`]: null
        }
        return update(ref(database), updates).then(()=> {
            dispath(removePost(index));
            dispath(removeComment(id));
        }).catch((error) => {
            console.error("Error removing post and comment:", error);
        });    
    }
}

export function startAddingComment(comment, postId) {
    return (dispatch) => {
        const commentRef = ref(database, 'comments/'+postId);
        return push(commentRef, comment).then(() => {
            dispatch(addComment(comment, postId));
        }).catch((error) => {
            console.error("Error adding comment:", error);
        });
    }
}

export function startLoadingComments() {
    return (dispatch) => {
        const commentsRef = ref(database, "comments/");
        return get(commentsRef).then((snapshot) => {
            let comments = {};
            snapshot.forEach((childSnapshot) => {
                const postId = childSnapshot.key;
                comments[postId] = Object.values(childSnapshot.val()) || [];
            });
            dispatch(loadComments(comments));
        })
    }
}

export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}

export function loadComments(comments) {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}  

export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    };
}
export function addPosts(posts) {
    return {
        type: 'ADD_POSTS',
        posts
    };
}
export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    };
}
export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId,
    };
}
export function removeComment(id) {
    return {
        type: 'REMOVE_COMMENT',
        id
    };
}
export function incrementLikes(id) {
    return {
        type: 'INCREMENT_LIKES',
        id
    };
}