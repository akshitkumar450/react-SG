import React from 'react'

const CommentDetail = (props) => {
    return (
        <div className="ui container comments">
            <div className="comment ">
                <a className="avatar" href='/'>
                    <img alt='avatar' src={props.image} />
                </a>
                <div className="content">
                    <a className="author" href='/'>{props.name}</a>
                    <div className="metadata">
                        <span className="date">Today at{props.date}</span>
                    </div>
                    <div className="text">
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentDetail
