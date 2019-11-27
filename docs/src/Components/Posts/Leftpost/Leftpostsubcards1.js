import React, { Component } from 'react';
import { leftpostsubcards1 } from '../../Data';
import Leftpostsubcardright from './Leftpostsubcardright';


class Leftpostsubcards1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postsubcards1: leftpostsubcards1
        }
    }
    render() {
        let { postsubcards1 } = this.state;
        return (
            <div className='leftpostsubcardscontainer'>
                {
                    postsubcards1.map((index, i) => {
                            return (<div className='leftpostcardscontent'>
                                <div className='leftpostcardsimgcontainer'>
                                    <img src={index.imageonline} alt={index.name} className='leftpostcardsimg'></img>
                                </div>
                                <div className='leftpostcardtext'>
                                    <div className='leftpostcardviews'>
                                        <span className='category' style={{ background: `${index.background}` }}>{index.name}</span>
                                        <span><i class="fas fa-eye"></i> {index.views}</span>
                                    </div>
                                    <div className='leftcontentcontainer'>
                                        <h3 className='leftpostcardtitle'>{index.title}</h3>
                                        <b>{index.author} | {index.date}</b>
                                        <p>{index.content}</p>
                                    </div>
                                </div>
                            </div>)
                    })
                }
                <Leftpostsubcardright/>
            </div>
        );
    }
}

export default Leftpostsubcards1;
