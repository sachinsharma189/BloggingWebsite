import React, { Component } from 'react';
import { bannercardimgs } from '../Data';

class Bannercard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerdata: bannercardimgs
        }
    }
    render() {
        let { bannerdata } = this.state;
        return (
            <div className='bannercardcontainer'>
                {
                    bannerdata.map((index, i) => {
                        console.log("Index--->>", index.name);
                        console.log("I--->>>", i);
                        return (
                            <div className='bannercard' style={{ background: `${index.gradient}` }}>
                                <div className='imgcontainer'>
                                    <img src={index.imageonline} className='cardimg' alt={index.name}></img>
                                </div>
                                <div className='carddetails'>
                                    <div className='cardtag'>
                                        <div className='cardname' style={{ background: `${index.background}` }}>
                                            <span>{index.name}</span>
                                        </div>
                                        <div className='cardviews'><i class="fas fa-eye"></i>{index.views}</div>
                                    </div>
                                    <h3>{index.title}</h3>
                                    <b>{index.author} | {index.date}</b>
                                </div>
                            </div>)
                    }
                    )
                }

            </div>
        );
    }
}

export default Bannercard;
