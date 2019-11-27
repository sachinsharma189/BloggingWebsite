import React, { Component } from 'react';
import { leftpostcards } from '../../Data';


class Postcards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postcards: leftpostcards
        }
    }
    render() {
        let { postcards } = this.state;
        return (
            <div className='postcardscontainer'>
                {
                    postcards.map((index, i) => {
                            return (<div className='postcardscontent'>
                                <div className='postcardsimgcontainer'>
                                    <img src={index.imageonline} alt={index.name} className='postcardsimg'></img>
                                </div>
                                <div className='postcardtext'>
                                    <div className='postcardviews'>
                                        <span className='category' style={{ background: `${index.background}` }}>{index.name}</span>
                                        <span><i class="fas fa-eye"></i> {index.views}</span>
                                    </div>
                                    <div className='contentcontainer'>
                                        <h3 className='postcardtitle'>{index.title}</h3>
                                        <b>{index.author} | {index.date}</b>
                                        <p>{index.content}</p>
                                    </div>
                                </div>
                            </div>)
                    })
                }

            </div>
        );
    }
}

export default Postcards;
