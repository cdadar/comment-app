import React, { Component, PropTypes } from 'react'
import Comment from './Comment'

class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

    onDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }

    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment
                        comment={comment}
                        key={i}
                        index={i}
                        onDeleteComment={this.onDeleteComment.bind(this)} />)}
            </div>
        )
    }
}

export default CommentList