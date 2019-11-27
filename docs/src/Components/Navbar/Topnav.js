import React, { Component } from 'react';

class Topnav extends Component {
    render() {
        return (
            <div className='topnavbackground'>
                <div className='topnavcontainer'>
                    <nav>
                        <ul>
                            <li className='leftnav'>45 C Greater Noida</li>
                            <li className='leftnav'>Monday, June 17</li>
                            <li className='leftnav'>Blog</li>
                            <li className='leftnav'>Forums</li>
                            <li className='leftnav'>Contact</li>
                            <li className='leftnav'>Buy Now !</li>
                        </ul>
                        <ul>
                            <li className='rightnav'><i class="fab fa-pinterest"></i></li>
                            <li className='rightnav'><i class="fab fa-facebook-f"></i></li>
                            <li className='rightnav'><i class="fab fa-instagram"></i></li>
                            <li className='rightnav'><i class="fab fa-google-plus-g"></i></li>
                            <li className='rightnav'><i class="fas fa-user"></i> Sign in</li>  
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Topnav;
