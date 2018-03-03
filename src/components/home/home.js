import React, { Component } from 'react';
import './home.css';
import Nav from '../nav/nav.js';

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            scrolling: false
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
            <div className='home'>
                <Nav location='home'/>
                <div className='spaceForNav'></div>
                <div className='landing'>
                    <div className='img weld left'></div>
                    <div className='overlay'>
                        <div className='angled'></div>
                    </div>
                    <div className='blurb'>
                        <h2>Custom Built Metal Fabrication</h2>
                        <h3>Offering a full range of fabrication needs
from small repairs to large complex structural steel jobs.</h3>
                    </div>
                </div>


                <div className='landing'>
                
                </div>

                

                <div className='landing'>
                    <div className='img saw right'></div>
                    <div className='overlay'>
                        <div className='gradient'></div>
                        <div className='block'></div>
                    </div>
                    <div className='blurb left'>
                    <h2>Family Owned and Operated Since 1988</h2>
                    <h3>Wiesner Metal Fab LLC can handle a full range of fabrication needs
from small repairs to large complex structural steel jobs. </h3>
                    </div>
                </div>

                <div className='landing'>
                
                </div>
    
                <footer>
                    Designed and Crafted by Chase Davis © 2018
                </footer>
            </div>
        )
    }
}