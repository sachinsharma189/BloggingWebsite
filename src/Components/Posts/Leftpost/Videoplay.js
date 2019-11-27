import React, { Component } from 'react';


class Videoplay extends Component {
    render() {
        return (
            <div className='videocontainer'>
                <iframe width="100%" height="350px" src="https://www.youtube.com/embed/Law7wfdg_ls" frameborder="0" allowfullscreen ng-show="showvideo"></iframe>
            </div>
        );
    }
}

export default Videoplay;
