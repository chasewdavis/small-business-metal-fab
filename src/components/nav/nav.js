import React, { Component } from 'react';
import './nav.css';

let didScroll = false;
let stopped = true;

window.onscroll = doThisStuffOnScroll;

function doThisStuffOnScroll() {
    didScroll = true;
}

export default class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {
            stopped: true
        }
    }

    componentDidMount(){
        console.log('component mounted')
        setInterval( () => {
            if(didScroll) {
                if(stopped){
                    console.log('started scroll')
                    this.setState({stopped:false})
                }
                didScroll = false;
                stopped = false;
                console.log('scrolling');
            }else{
                if(!stopped){
                    stopped = true;
                    console.log('stopped scrolling')
                    this.setState({stopped:true})
                }
            }
        }, 100);
    }

    render(){
        
        return (
            <div className={this.state.stopped?'nav shaddow':'nav'}>
                <h1>Wiesner Metal Fab</h1>
                <div className='gap'></div>
                <button>HOME<div/><div/></button>
                <button>ABOUT<div/><div/></button>
                <button>PROJECTS<div/><div/></button>
                <button>CONTACT<div/><div/></button>
            </div>
        )
    }
}