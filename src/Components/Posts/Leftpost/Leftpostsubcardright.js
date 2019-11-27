import React, { Component } from 'react';
import { leftpostsubcardsright } from '../../Data';


class Leftpostsubcardright extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftpostsubcardsright1: leftpostsubcardsright
        }
    }
    render() {
        let { leftpostsubcardsright1 } = this.state;
        return (
            <div className='leftpostsubcardrightcontainer'>
                {
                    leftpostsubcardsright1.map((index, i) => {
                            return (<div className='leftpostsubcardrightcontent'>
                                <div className='leftpostsubcardrightimgcontainer'>
                                    <img src={index.imageonline} alt={index.name} className='leftpostsubcardrightimg'></img>
                                </div>
                                <div className='leftpostsubcardrighttext'>
                                    <div className='leftpostsubcardrightcontentcontainer'>
                                        <span className='leftpostsubcardrighttitle'>{index.title}</span>
                                        <br/> 
                                        <b>{index.author} | {index.date}</b>
                                    </div>
                                </div>
                            </div>)
                    })
                }

            </div>
        );
    }
}

export default Leftpostsubcardright;
