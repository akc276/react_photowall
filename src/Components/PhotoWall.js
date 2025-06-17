import React from "react";
import Photo from "./Photo";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function PhotoWall(props) {
    const posts = props.posts;
    return (
      <div>
        <Link className="addIcon" to="/AddPhoto" ></Link>
        {/* <button className="addIcon" onClick={props.onNavigate}> + </button> */}
        <div className="photoGrid">
          {posts.map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}
        </div>
      </div>
    );
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
};


export default PhotoWall;
