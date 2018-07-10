import React from 'react'
import PropTypes from 'prop-types'
import './PostItem.css'

function PostItem(props) {
    const handleTitleClick = () => {
        props.onTitleClick(props.post.id)
    }

    const {post} = props

    return (
        <li className='item'>
            <div className='title' onClick={handleTitleClick}>
                {post.title}
            </div>
            <div>作者：<span>{post.author}</span></div>
            <div>发表时间：<span>{post.createdAt}</span></div>
        </li>
    )
}

PostItem.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
        createdAt: PropTypes.string,
    }).isRequired,
    onTitleClick: PropTypes.func.isRequired
}

PostItem.defaultProps = {}

export default PostItem
