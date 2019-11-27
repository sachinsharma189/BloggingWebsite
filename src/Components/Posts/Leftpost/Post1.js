import React, { Component } from 'react';
import { leftpost } from '../../Data';


class Post1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: leftpost
        }
    }
    render() {
        let { posts } = this.state;
        return (
            <div className='postcontainer'>
                {
                    // posts.map((index, i) => {
                    //     if (index.id == 1) {
                    //         return (<div className='postcontent'>
                    //             <div className='postimgcontainer'>
                    //                 <img src={index.imageonline} alt={index.name} className='postimg'></img>
                    //             </div>
                    //             <div className='posttext'>
                    //                 <div className='postviews'>
                    //                     <span className='category' style={{ background: `${index.background}` }}>{index.name}</span>
                    //                     <span><i class="fas fa-eye"></i> {index.views}</span>
                    //                 </div>
                    //                 <div className='contentcontainer'>
                    //                     <h2 className='posttitle'>{index.title}</h2>
                    //                     <b>{index.author} | {index.date}</b>
                    //                     <p>{index.content}</p>
                    //                 </div>
                    //             </div>
                    //         </div>)
                    //     }
                    // })

                    // posts[this.props.id-1]
                    <div className={'postcontent'}>
                        <div className='postimgcontainer'>
                            <img src={posts[this.props.id-1].imageonline} alt={posts[this.props.id-1].name} className='postimg'></img>
                        </div>
                        <div className='posttext'>
                            <div className='postviews'>
                                <span className='category' style={{ background: `${posts[this.props.id-1].background}` }}>{posts[this.props.id-1].name}</span>
                                <span><i class="fas fa-eye"></i> {posts[this.props.id-1].views}</span>
                            </div>
                            <div className='contentcontainer'>
                                <h2 className='posttitle'>{posts[this.props.id-1].title}</h2>
                                <b>{posts[this.props.id-1].author} | {posts[this.props.id-1].date}</b>
                                <p>{posts[this.props.id-1].content}</p>
                            </div>
                        </div>
                    </div>
                }

            </div>
        );
    }
}

export default Post1;
