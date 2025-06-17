import React, {Component} from "react";

class Comments extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const comment = event.target.comment.value;
        if (comment) {
            // console.log(`Adding comment: ${comment} to post with ID: ${postId}`);
            this.props.startAddingComment(comment, this.props.id);
            event.target.comment.value = '';
        }
    }

    render() {
        return (
            <div className="comment">
                {
                    console.log(`Rendering comments: `, this.props.comments)
                }
                {
                    this.props.comments.map((comment, index) => {
                    
                        return (
                            <p key={index}>{comment}</p>
                        )
                })}
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Add a comment" name="comment"/>
                    <button type="submit">Post</button>
                </form>
            </div>
        );
    }
}

export default Comments;
