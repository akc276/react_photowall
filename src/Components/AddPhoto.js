import React, {Component} from "react";
import {useNavigate} from 'react-router-dom';


class AddPhoto extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.link.value;
        const description = event.target.description.value;
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }

        if (imageLink && description) {
            this.props.startAddingPost(post);
            this.props.navigate('/');
        }
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="url" placeholder="Link" name="link"/>
                    <input type="text" placeholder="Description" name="description"/>
                    <button type="submit">Post</button>
                </form>
            </div>
        )
    }
}

function AddPhotoWrapper(props) {
  const navigate = useNavigate();
  return <AddPhoto {...props} navigate={navigate} />;
}

export default AddPhotoWrapper;

