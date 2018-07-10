import React, { Component } from 'react'
import GridLayout from 'react-grid-layout'
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import PostList from './PostList'

class App extends Component {
    render() {
        const boxStyle = {
            borderRadius: '5px',
            //boxShadow: '3px 3px 1px gray'
            textAlign: 'center'
        }

        return (
            <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
                <div key='list'
                    data-grid={{ x: 0, y: 0, w: 3, h: 2, static: true }}
                >
                    <PostList></PostList>
                </div>
                <div key='detail'
                    data-grid={{ x: 3, y: 0, w: 6, h: 12}}
                    style={{ ...boxStyle, border: '3px solid #FF4949' }}
                >
                    <PostDetail></PostDetail>
                </div>
                <div key='note'
                    data-grid={{ x: 9, y: 0, w: 3, h: 6 }}
                    style={{ ...boxStyle, border: '3px solid #F7BA2A' }}
                >
                    <PostNoteList></PostNoteList>
                </div>
                <div key='discussion'
                    data-grid={{ x: 9, y: 0, w: 3, h: 6 }}
                    style={{ ...boxStyle, border: '3px solid #20A0FF' }}
                >
                    <PostDiscussionList></PostDiscussionList>
                </div>
            </GridLayout>
        )
    }
}

function PostDetail() {
    return (
        <div>
            <p>
                <h1>文章标题</h1>
                文章详情<br /> 
                文章详情<br /> 
                文章详情<br />
                文章详情<br />
                文章详情<br />
                文章详情<br />
                文章详情<br /> 
                文章详情<br /> 
                文章详情<br />
                文章详情<br />
                文章详情<br />
                文章详情<br />
                文章详情<br /> 
                文章详情<br /> 
                文章详情<br />
                文章详情<br />
                文章详情<br />
            </p>
        
        </div>
    )

}

function PostNoteList() {
    return (
        <div>文章笔记列表</div>
    )
}

function PostDiscussionList() {
    return (
        <div>文章讨论列表</div>
    )
}

export default App