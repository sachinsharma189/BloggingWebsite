import React, { Component } from 'react';

class Postnav extends Component {
    render() {
        return (
            <div className='navcontainer'>
                <nav className='postnav'>
                    <div className='lefttextnav'>Style Hunter</div>
                    <div>
                        <ul>
                            <li>World</li>
                            <li>People</li>
                            <li>Food</li>
                            <li>Animals</li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Postnav;
