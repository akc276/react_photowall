
import Main from './Main';
import {connect} from 'react-redux';
import * as actions from '../redux/actions';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
    // {

    //     removePost: (index) => dispatch({ type: 'REMOVE_POST', index }),
    //     addPost: (post) => dispatch({ type: 'ADD_POST', post }),
    //     addPosts: (posts) => dispatch({ type: 'ADD_POSTS', posts }),
    //     addComment: (comment, postId) => dispatch({ type: 'ADD_COMMENT', comment, postId }),
    //     removeComment: (id) => dispatch({ type: 'REMOVE_COMMENT', id }),
    // };
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
