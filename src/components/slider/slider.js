import React, { Component } from 'react';
import './slider.css';

import pro1 from '../../media/slides/pro1.jpg';
import pro2 from '../../media/slides/pro2.jpg';
import pro3 from '../../media/slides/pro3.jpg';

export default class Projects extends Component {
    constructor(props){
        super(props)

        this.state = {
            imgs: [pro1,pro2,pro3]
        }
    }

    componentDidMount(){
        
    }

    componentWillReceiveProps(newProps){
        // console.log('new props are... ', newProps);
    }

    render(){

        return (
            <div className='slider'>
                <img src={this.state.imgs[this.props.index]}/>
            </div>
        )
    }
}