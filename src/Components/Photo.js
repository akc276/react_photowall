import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

function Photo(props) {
    const post = props.post;
    console.log("Photo component props: ", props);
    const comment_length = props.comments[post.id] ? props.comments[post.id].length : 0;
    const navigate = useNavigate();
    return (
        <figure className="figure">
            <Link to={`/Single/${post.id}`} className="photo-link">
                <img className="photo" src={post.imageLink} alt={post.description}/>
            </Link>
            <figcaption>
                <p>{post.description}</p>
            </figcaption>
            <div className="button-container">
                <button className="remove-photo" onClick={() => {
                    props.startRemovingPost(props.index, post.id)
                    navigate('/');
                }}>Remove</button>
                <Link className="button" to={`/Single/${post.id}`}>
                    <div className='comment-count'>
                        <div className="speech-bubble"></div>
                        {comment_length}
                    </div>
                </Link>
            </div>
        </figure>
    );
}


Photo.propTypes = {
    post: PropTypes.object .isRequired
};

export default Photo;

