import React, { Component } from 'react';
import Topfooter from './Topfooter';
import Middlefooter from './Middlefooter';


class Footer extends Component {
    render() {
        return (
            <div className='mainfooter'>
                <div className='mainfootercontainer'>
                <Topfooter/>
                <Middlefooter/>
                </div>
            </div>
        );
    }
}

export default Footer;
