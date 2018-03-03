import React, { Component } from 'react';
import './nav.css';
import wiesner from '../../media/wiesner.png';
import { Link } from 'react-router-dom';

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
                {/* <img src={wiesner} alt='wiesner logo'/> */}
                <h1>Wiesner Metal Fab</h1>
                <div className='gap'></div>
                <Link to='/'><button className={ this.props.location === 'home' ? 'nav_highlight' : 'default'}>HOME<div/><div/></button></Link>
                <Link to='/projects'><button className={ this.props.location === 'projects' ? 'nav_highlight' : 'default'}>PROJECTS<div/><div/></button></Link>
                <Link to='/about'><button className={ this.props.location === 'about' ? 'nav_highlight' : 'default'}>ABOUT<div/><div/></button></Link>
                <Link to='/contact'><button className={ this.props.location === 'contact' ? 'nav_highlight' : 'default'}>CONTACT<div/><div/></button></Link>
            </div>
        )
    }
}