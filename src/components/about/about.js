import React, { Component } from 'react';
import Nav from '../nav/nav.js';
import './about.css';

export default class About extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    componentDidMount(){
        let nav = document.getElementsByClassName('nav')[0];
        let height = nav.offsetHeight;
        let spacing = document.getElementsByClassName('spaceForNav')[0];
        spacing.setAttribute('style', `height:${height}px`);
    }

    render(){
        return (
            <div className='about'>
                <Nav location='about'/>
                <div className='spaceForNav'/>
                about page
            </div>
        )
    }
}