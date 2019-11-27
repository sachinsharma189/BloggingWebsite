import React, { Component } from 'react';
import footerlogo1 from '../../Assets/footerlogo1.png';
import footerlogo2 from '../../Assets/footerlogo2.svg';
import footerlogo3 from '../../Assets/footerlogo3.png';

class Topfooter extends Component {
    render() {
        return (
            <div className='topfooter'>
                <div className='footerimgcontainer'>
                    <img src={footerlogo1} className='footerlogo1'></img>
                    <img src={footerlogo2} className='footerlogo2'></img>
                    <img src={footerlogo3} className='footerlogo3'></img>
                </div>
                <ul className='topfooterlist'>
                    <li className='topfooterlistcomponent'>Business</li>
                    <li className='topfooterlistcomponent'>Investing</li>
                    <li className='topfooterlistcomponent'>Technology</li>
                    <li className='topfooterlistcomponent'>Entrepreneurs</li>
                    <li className='topfooterlistcomponent'>Op/Ed</li>
                    <li className='topfooterlistcomponent'>Leadership</li>
                    <li className='topfooterlistcomponent'>Lifestyle</li>
                    <li className='topfooterlistcomponent'>Lists</li>
                </ul>
            </div>
        );
    }
}

export default Topfooter;
