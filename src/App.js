import React, { Component } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import PostList from './PostList'

const ResponsiveReactGridLayout = WidthProvider(Responsive)
ResponsiveReactGridLayout.defaultProps = {
    className: 'layout',
    rowHeight: 30,
    onLayoutChange: function(){},

    //只针对大中小三个屏幕尺寸进行断点，粗略对应电脑、平板、手机
    //breakpoints: {lg: 1200, md:900, sm:400},
    cols: {lg: 12, md: 9, sm: 3},
}

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            layouts: {
                lg: largeLayout(),
                md: mediumLyaout(),
                sm: smallLayout()
            }
        }
    }
    render() {
        const boxStyle = {
            borderRadius: '5px',
            //boxShadow: '3px 3px 1px gray'
            textAlign: 'center'
        }

        return (
            <ResponsiveReactGridLayout
                layouts={this.state.layouts}
            >
                <div key='list'
                    className='static'
                >
                    <PostList></PostList>
                </div>
                <div key='detail'
                    style={{ ...boxStyle, border: '3px solid #FF4949' }}
                >
                    <PostDetail></PostDetail>
                </div>
                <div key='note'
                    style={{ ...boxStyle, border: '3px solid #F7BA2A' }}
                >
                    <PostNoteList></PostNoteList>
                </div>
                <div key='discussion'
                    style={{ ...boxStyle, border: '3px solid #20A0FF' }}
                >
                    <PostDiscussionList></PostDiscussionList>
                </div>
            </ResponsiveReactGridLayout>
        )
    }

}

//三列，列表-左，详情-中，笔记-右上，讨论-右下
function largeLayout() {
    return [
        {
            i: 'list',
            static: true,
            x: 0,
            y: 0,
            w: 3,
            h: 9
        },
        {
            i: 'detail',
            static: false,
            x: 3,
            y: 0,
            w: 6,
            h: 12
        },
        {
            i: 'note',
            static: false,
            x: 9,
            y: 0,
            w: 3,
            h: 6
        },
        {
            i: 'discussion',
            static: false,
            x: 9,
            y: 0,
            w: 3,
            h: 6
        },
    ]
}

//两列，列表-左，详情-右上，笔记-右下左，讨论-右下右
function mediumLyaout() {
    return [
        {
            i: 'list',
            static: true,
            x: 0,
            y: 0,
            w: 3,
            h: 9
        },
        {
            i: 'detail',
            static: false,
            x: 3,
            y: 0,
            w: 6,
            h: 12
        },
        {
            i: 'note',
            static: false,
            x: 3,
            y: 0,
            w: 3,
            h: 6
        },
        {
            i: 'discussion',
            static: false,
            x: 6,
            y: 0,
            w: 3,
            h: 6
        },
    ]
}

//单列，列表-详情-笔记-讨论
function smallLayout() {
    return [
        {
            i: 'list',
            static: true,
            x: 0,
            y: 0,
            w: 3,
            h: 9
        },
        {
            i: 'detail',
            static: false,
            x: 0,
            y: 0,
            w: 3,
            h: 12
        },
        {
            i: 'note',
            static: false,
            x: 0,
            y: 0,
            w: 3,
            h: 6
        },
        {
            i: 'discussion',
            static: false,
            x: 0,
            y: 0,
            w: 3,
            h: 6
        },
    ]
}


function PostDetail() {
    return (
        <div>
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