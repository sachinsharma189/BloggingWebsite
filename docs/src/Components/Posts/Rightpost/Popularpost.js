import React, { Component } from 'react';
import { rightpopularpost } from '../../Data';
import Postsubcards from '../Leftpost/Postsubcards';
import Rightpostcards from './Rightpostcards';



class Popularpost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rightpopularpostcards: rightpopularpost
        }
    }
    render() {
        let { rightpopularpostcards } = this.state;
        return (
            <div className='popularpostcontainer' >
            <h3 className='postheading'>Popular Posts</h3>
                {
                    rightpopularpostcards.map((index, i) => {
                        return (
                            <div className='popularpost' >
                            <div className='popularimgcontainer'>
                                <img src={index.imageonline} className='popularimg' alt={index.name}></img>
                            </div>
                            <div className='popularpostdetails'>
                                <div className='popularposttag'>
                                    <div className='popularpostname' style={{ background: `${index.background}` }}>
                                        <span>{index.name}</span>
                                    </div>
                                    <div className='popularpostviews'><i class="fas fa-eye"></i>{index.views}</div>
                                </div>
                                <p className='popularposttitle'>{index.title}</p>
                                <p className='popularpostauthor'>{index.author} | {index.date}</p>
                            </div>
                        </div>)
                    })
                }
                {/* <Postsubcards/> */}
                <Rightpostcards/>
            </div>
        );
    }
}

export default Popularpost;
