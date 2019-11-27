import React, { Component } from 'react';
import companylogo from '../../Assets/logotext.png'
import companylogo1 from '../../Assets/logotext1.png'
import companylogo2 from '../../Assets/logotext2.png'


class Hamburger extends Component {
    render() {
        return (
            <div className='hamburger'>
                <header>
                    <a href="#main-menu"
                        id="main-menu-toggle"
                        class="menu-toggle"
                        aria-label="Open main menu">
                        <span class="sr-only">Open main menu</span>
                        <span class="fa fa-bars" aria-hidden="true"></span>
                    </a>

                    {/* <h1 class="logo">hamburgers</h1> */}
                    <div className='logocontainer'>
                        <img src={companylogo} alt='meteor' className='companylogo'></img>
                        <img src={companylogo1} alt='meteor' className='companylogo'></img>
                        <img src={companylogo2} alt='meteor' className='companylogo'></img>
                    </div>

                    <nav id="main-menu" class="main-menu" aria-label="Main menu">
                        <a href="#main-menu-toggle"
                            id="main-menu-close"
                            class="menu-close"
                            aria-label="Close main menu">
                            <span class="sr-only">Close main menu</span>
                            <span class="fa fa-close" aria-hidden="true"></span>
                        </a>
                        <ul>
                            <li><a href="#">Fashion</a></li>
                            <li><a href="#">Style Hunter</a></li>
                            <li><a href="#">Lifestyle</a></li>
                            <li><a href="#">Celebrity</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">Interviews</a></li>
                        </ul>
                    </nav>
                    <a href="#main-menu-toggle"
                        class="backdrop"
                        tabindex="-1"
                        aria-hidden="true" hidden></a>
                </header>

            </div>
        );
    }
}

export default Hamburger;
