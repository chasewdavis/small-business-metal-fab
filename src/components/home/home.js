import React, { Component } from 'react';
import './home.css';
import Nav from '../nav/nav.js';
import { Link } from 'react-router-dom';
import Slider from '../slider/slider.js';
let interval;

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            scrolling: false,
            slider_imgs: [0,1,2],
            slider_index: 0,
            in_transition: false
        }
    }

    componentDidMount(){
        let nav = document.getElementsByClassName('nav')[0];
        let height = nav.offsetHeight;
        let spacing = document.getElementsByClassName('spaceForNav')[0];
        spacing.setAttribute('style', `height:${height}px`);

        interval = setInterval( () => this.autoPlay(), 3000)
    }

    stopAutoPlay(){
        clearInterval(interval);
    }

    autoPlay(){
        let nextIndex = this.state.slider_index;
        if( this.state.slider_imgs.length - 1 === this.state.slider_index ){
            nextIndex = 0;
        }else{
            nextIndex++;
        }
        this.newSlide(nextIndex);
    }

    newSlide(index){

        if(!this.state.in_transition){

        this.setState({in_transition:true})

        setTimeout( () => {
            this.setState({slider_index:index})
        }, 500)

        setTimeout( () => {
            this.setState({in_transition:false})
        }, 1000)

        }
    }

    btns(){
        let btns = this.state.slider_imgs.map( (e, i) => {
            return i === this.state.slider_index ? <button className='fill' key={i}></button> : <button onClick={() => { this.stopAutoPlay() ; this.newSlide(i)}} className='open' key={i}></button>
        })
        return btns
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
                    <div className='blurb blurb_mid'>
                    <h2>Family Owned and Operated Since 1988</h2>
                    <h3>Wiesner Metal Fab LLC can handle a full range of fabrication needs
from small repairs to large complex structural steel jobs. </h3>
                    </div>
                </div>


                <div className='landing'>
                    <div className='right_slider'>
                        <Slider index={this.state.slider_index}/>
                    </div>
                    <div className='slider_btns'>
                        {this.btns()}
                    </div>
                    <div className={this.state.in_transition? 'overlay overlay_transition' : 'overlay'}>
                        <div className='gradient_dark'></div>
                        <div className='block_dark'></div>
                    </div>
                    <div className='blurb blurb_tall left'>
                        <h2>Agricultural, Nursery & Industrial Equipment</h2>
                        <h3>Offering a full range of fabrication needs
from small repairs to large complex structural steel jobs.</h3>
                        <Link to='/projects'>
                            <button className='accent'>
                                See Our Work
                            </button>
                        </Link>
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
                    <div className='blurb blurb_mid left'>
                    <h2>Family Owned and Operated Since 1988</h2>
                    <h3>Wiesner Metal Fab LLC can handle a full range of fabrication needs
from small repairs to large complex structural steel jobs. </h3>
                    </div>
                </div>
    
                <footer>
                    Designed and Crafted by Chase Davis © 2018
                </footer>
            </div>
        )
    }
}