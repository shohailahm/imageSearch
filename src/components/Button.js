import React, { Component } from 'react'
import './button.css';

export default class Button extends Component {
    render() {
        return (
        <button onClick={()=>this.props.onClick()} className="button">{this.props.title}</button>
        )
    }
}
