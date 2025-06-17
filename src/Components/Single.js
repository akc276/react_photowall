import { useParams } from 'react-router-dom';
import Photo from './Photo';
import Comments from './Comments';

function Single(props) {
    const id = Number(useParams().id);
    const post = props.posts.find((post) => post.id === id);
    const index = props.posts.findIndex((post) => post.id === id);
    const comments = props.comments[id] || [];
    if (props.loading === true) {
        return <div className='loader'>Loading...</div>;
    } else if (post) {
        return (
            <div className='single-photo'>
                <Photo post={post} {...props} index={index} comments={comments}/>
                <Comments id={id} {...props} comments={comments}/>
            </div>
        )
    } else {
        return <h1>... No post found</h1>;
    }
    
}

export default Single;
