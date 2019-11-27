import React, { Component } from 'react';
import { leftpostsubcards } from '../../Data';


class Postsubcards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postsubcards: leftpostsubcards
        }
    }
    render() {
        let { postsubcards } = this.state;
        return (
            <div className='postsubcardscontainer'>
                {
                    postsubcards.map((index, i) => {
                        return ( <div className='postsubcardscontent'>
                            <div className='postsubcardsimgcontainer'>
                                <img src={index.imageonline} alt={index.name} className='postsubcardsimg'></img>
                            </div>
                            <div className='postsubcardstext'> 
                                <h4>{index.title}</h4>
                                <span className='postsubcardsauthor'>{index.author} | {index.date}</span>
                            </div>
                        </div>)
                    })
                }

            </div>
        );
    }
}

export default Postsubcards;
