import React, { Component } from 'react'
import './modal.css';
import ImageComponent from './Image';
import Button from './Button';
export default class Modal extends Component {
    close=()=>{
        this.props.onClose()
    }
    onClick=()=>{

    }
    render() {
        return (
            <div id="myModal" className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.close}>&times;</span>
              <ImageComponent imgUrl={this.props.image} height="400px"/>
              <div className="center">
              <a href={this.props.image} download="new.jpg" target="_blank">
                   <Button title={"Download"} onClick={this.onClick}/>
              </a>
              </div>
              
            </div>
          
          </div>
        )
    }
}
