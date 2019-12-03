import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div style={{display:'flex',justifyContent:'flex-start',width:'100%'}}>
                 <a className="white" href="#">Search<span className="black">It</span></a>
            </div>
        )
    }
}
