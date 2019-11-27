import React, { Component } from 'react';
import { instagramcards } from '../../Data';


class Instagramcards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rightinstagramcards: instagramcards
        }
    }
    render() {
        let { rightinstagramcards } = this.state;
        return (
            <div className='instagramcontainer'>
                {
                    rightinstagramcards.map((index, i) => {
                        return ( <div className='instagramcontent'>
                            <div className='instagramimgcontainer'>
                                <img src={index.imageonline} alt={index.name} className='instagramimg'></img>
                            </div>
                        </div>)
                    })
                }

            </div>
        );
    }
}

export default Instagramcards;
