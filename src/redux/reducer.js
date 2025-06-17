import initial_posts from '../data/posts';
import { combineReducers } from 'redux';

export function posts(state = initial_posts, action) {
    console.log("Action received in posts reducer:", action);
    switch (action.type) {
        case 'REMOVE_POST':
            console.log("typeof action.index: lsls ", action.index, typeof action.index == 'number');
            if (typeof action.index == 'number') {
                const new_slice = [...state.slice(0, action.index), ...state.slice(action.index + 1)]
                console.log("Removing post, new slice:", new_slice);
                return new_slice;
            } else {
                console.error("Invalid parameter to addPost, only int supported:", action.post);
                return state;
            }
        case 'ADD_POST':
                console.log("Adding post:", action.post);
                return [action.post, ...state ];
        case 'ADD_POSTS':
            console.log("Adding posts:", action.posts);
            return [...state, ...action.posts];
        case 'LOAD_POSTS':
            console.log("Loading posts:", action.posts);
            return action.posts;
        default:
            return state;
    }
}

export function comments(state = {}, action) {
    console.log("Action received in comments reducer:", action);
    switch (action.type) {
        case 'ADD_COMMENT':
            let new_comments =  {...state };
            if (state[action.postId]) {
                // If comments for this post already exist, append the new comment
                new_comments =  {
                    ...state,
                    [action.postId]: [...state[action.postId], action.comment]
                };
            } else {
                new_comments = {
                    [action.postId]: [action.comment],
                    ...state,
                }
            }

            console.log("Adding comment, new comments:", action.postId, new_comments);
            return new_comments
        case 'LOAD_COMMENTS':
            console.log("Loading comments:", action.comments);
            return action.comments;
        case 'REMOVE_COMMENT':
            return state.filter((comment) => comment.id !== action.id);
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    posts,
    comments
});

export default rootReducer;
