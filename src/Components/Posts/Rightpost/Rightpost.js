import React, { Component } from 'react';
import Socialcards from './Socialcards';
import Popularpost from './Popularpost';
import Instagramcards from './Instagramcards';

class Rightpost extends Component {
    render() {
        return (
            <div>
                <Socialcards/>
                <Popularpost/>
                <Instagramcards/>
            </div>
        );
    }
}

export default Rightpost;
