import React, { Component, PropTypes } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import wrapWithLoadData from './wrapWithLoadData'

class CommentApp extends Component {

    static propTypes = {
        data: PropTypes.any,
        saveData: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            comments:props.data            
        }
    }



    handeSubmitComment(comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        const comments = this.state.comments
        comments.push(comment)
        this.setState({ comments })
        this.props.saveData(comments)
    }

    hanleDeleteComment(index) {
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ comments })
        this.props.saveData(comments)
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handeSubmitComment.bind(this)} />
                <CommentList
                    comments={this.state.comments}
                    onDeleteComment={this.hanleDeleteComment.bind(this)} />
            </div>
        )
    }
}

CommentApp = wrapWithLoadData(CommentApp, 'comments')
export default CommentApp