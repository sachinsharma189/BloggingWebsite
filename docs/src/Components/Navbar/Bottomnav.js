import React, { Component } from 'react';
import companylogo from '../../Assets/logotext.png'
import companylogo1 from '../../Assets/logotext1.png'
import companylogo2 from '../../Assets/logotext2.png'

class Bottomnav extends Component {
    render() {
        return (
            <div className='bottomnavbackground'>
                <div className='bottomnavcontainer'>
                    <nav className='bottomnav'>
                        <div className='logocontainer'>
                            <img src={companylogo} alt='meteor' className='companylogo'></img>
                            <img src={companylogo1} alt='meteor' className='companylogo'></img>
                            <img src={companylogo2} alt='meteor' className='companylogo'></img>
                        </div>
                        <ul className='bottomnavul'>
                            <li className='bottmnavlist'>Fashion</li>
                            <li className='bottmnavlist'>Style Hunter</li>
                            <li className='bottmnavlist'>Lifestyle</li>
                            <li className='bottmnavlist'>Celebrity</li>
                            <li className='bottmnavlist'>Videos</li>
                            <li className='bottmnavlist'>Interviews</li>
                            <li className='bottmnavlist'> <i class="fas fa-search"></i></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Bottomnav;
