import React, {Component} from 'react'
import PostItem from './PostItem'
import './PostList.css'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }

        this.timer = null
        this.onTitleClick = this.onTitleClick.bind(this)
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                posts: [
                    {
                        id: 1,
                        title: '文章标题一',
                        author: '王二',
                        createdAt: '2016-01-01 10:00'
                    },
                    {
                        id: 2,
                        title: '文章标题二',
                        author: '张三',
                        createdAt: '2017-01-01 10:00'
                    },
                    {
                        id: 3,
                        title: '文章标题三',
                        author: '李四',
                        createdAt: '2018-01-01 10:00'
                    }
                ]
 
            })
        }, 10)
    }

    componentWillUnmount() {
        if(this.timer) {
            clearTimeout(this.timer)
        }
    }

    render() {
        return (
            <div className='container'>
                文章列表
                <ul>
                    {this.state.posts.map(item => 
                        <PostItem
                            key = {item.id}
                            post = {item}
                            onTitleClick = {this.onTitleClick}
                        />)}
                </ul>
            </div>
        )
    }

    onTitleClick(id) {
        console.log('点击了标题，文章ID：' + id)

    }
}

export default PostList