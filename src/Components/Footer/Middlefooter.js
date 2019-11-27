import React, { Component } from 'react';


class Middlefooter extends Component {
    render() {
        return (
            <div className='middlefooter'>
                <div className='middlefootertextcontainer'>
                    <p className='middlefootertext'>
                        meteor is your news,entertainment,music
                        fashion website. We provide you with the latest
                        breaking news and videos straight from the
                        entertainment industry
                    </p>
                    <div className='socialiconcontainer'>
                        <div className='twitter'>
                            <i class="fab fa-twitter icons"></i>
                        </div>
                        <div className='facebook'>
                            <i class="fab fa-facebook-square icons"></i>
                        </div>
                        <div className='dribble'>
                            <i class="fas fa-basketball-ball icons"></i>
                        </div>
                        <div className='instagram'>
                            <i class="fab fa-instagram icons"></i>
                        </div>
                        <div className='pinterest'>
                            <i class="fab fa-instagram icons"></i>
                        </div>
                    </div>
                </div>
                <ul className='middlefooterlist1'>
                    <li className='middlefooterlistcomponent'>Culture</li>
                    <li className='middlefooterlistcomponent'>Business</li>
                    <li className='middlefooterlistcomponent'>Gadgets</li>
                    <li className='middlefooterlistcomponent'>Future</li>
                    <li className='middlefooterlistcomponent'>Startups</li>
                </ul>
                <ul className='middlefooterlist1'>
                    <li className='middlefooterlistcomponent'>Star</li>
                    <li className='middlefooterlistcomponent'>Screen</li>
                    <li className='middlefooterlistcomponent'>Binge</li>
                    <li className='middlefooterlistcomponent'>Culture</li>
                    <li className='middlefooterlistcomponent'>Media</li>
                </ul>
                <ul className='middlefooterlist1'>
                    <li className='middlefooterlistcomponent'>45</li>
                    <li className='middlefooterlistcomponent'>Congress</li>
                    <li className='middlefooterlistcomponent'>Security T</li>
                    <li className='middlefooterlistcomponent'>he Nine</li>
                    <li className='middlefooterlistcomponent'>Trumpmerica</li>
                </ul>
                <ul className='middlefooterlist1'>
                    <li className='middlefooterlistcomponent'>Video</li>
                    <li className='middlefooterlistcomponent'>Video News</li>
                    <li className='middlefooterlistcomponent'>Feature Shows</li>
                    <li className='middlefooterlistcomponent'>HLN</li>
                    <li className='middlefooterlistcomponent'>TV Shows</li>
                    <li className='middlefooterlistcomponent'>TV Schedule</li>
                    <li className='middlefooterlistcomponent'>Faces of CNN Worldwide</li>
                </ul>
            </div>
        );
    }
}

export default Middlefooter;
