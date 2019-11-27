import React, { Component } from 'react';
import { rightpostcards } from '../../Data';


class Rightpostcards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rightpost: rightpostcards
        }
    }
    render() {
        let { rightpost } = this.state;
        return (
            <div className='rightpostcontainer'>
                {
                    rightpost.map((index, i) => {
                        return ( <div className='rightpostcontent'>
                            <div className='rightpostimgcontainer'>
                                <img src={index.imageonline} alt={index.name} className='rightpostsimg'></img>
                            </div>
                            <div className='rightposttext'> 
                                <p>{index.title}</p>
                                <span className='rightpostauthor'>{index.author} | {index.date}</span>
                            </div>
                        </div>)
                    })
                }

            </div>
        );
    }
}

export default Rightpostcards;
