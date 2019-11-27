import React, { Component } from 'react';
import { socialcards } from '../../Data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';


class Socialcards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socialiconcards: socialcards
        }
    }
    render() {
        const fb = <FontAwesomeIcon icon = {faFacebook} />
        let { socialiconcards } = this.state;
        return (
            <div className='socialcardscontainer'>
                { 
                    socialiconcards.map((index, i) => {
                        return (<div className='socialcardscontent' style={{ background: `${index.background}` }}>
                            <div className='socialiconcontainer'>
                                <div className ='socialicon'style={{ background: `${index.circlecolor}` }}>
                                <img src={index.icon} className='socialiconimg'></img>
                                </div>
                            </div>
                            <div className='socialcardstext'>
                                <b>{index.followers}</b>
                                <p>{index.text}</p>
                            </div>
                        </div>)
                    })
                }

            </div>
        );
    }
}

export default Socialcards;
