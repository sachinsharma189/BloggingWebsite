import React, { Component } from 'react';
import Postnav from './Postnav';
import Post1 from './Post1';
import Postcards from './Postcards';
import Postnav1 from './Postnav1';
import Postsubcards from './Postsubcards';
import Postnav2 from './Postnav2';
import Postcards1 from './Postcards1';
import Leftpostsubcards1 from './Leftpostsubcards1';
import Videoplay from './Videoplay';

class Leftpost extends Component {
    render() {
        return (
            <div>
                <Postnav/>
                <Post1 id='1'/>
                <Postcards/>
                <Postnav1/>
                <Post1 id='2'/>
                <Postsubcards/>
                <Postnav2/>
                <Postcards1/>
                <Leftpostsubcards1/>
                <Postnav/>
                <Videoplay/>
                <Postsubcards/>
                
            </div>
        );
    }
}

export default Leftpost;
