import React, { Component } from 'react';
import Leftpost from './Leftpost/Leftpost';
import Rightpost from './Rightpost/Rightpost';

class Mainpost extends Component {
    render() {
        return (
            <div className='mainpostback'>
                <div className='mainpostcontainer'>
                    <div className='leftpost'>
                        <Leftpost />
                    </div>
                    <div className='rightpost'>
                        <Rightpost />
                    </div>
                </div>
            </div>
        );
    }
}

export default Mainpost;
