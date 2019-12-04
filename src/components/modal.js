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
      console.log(this.props);
        return (
            <div id="myModal" className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.close}>&times;</span>
              <div className="avatar-container">
                <img src={this.props.imageDetails.user.profile_image.small} className="avatar"/>
                <div>
                  <p>{this.props.imageDetails.user.first_name}</p>
                  <p >@{this.props.imageDetails.user.username}</p>
                </div>
              </div>
              <ImageComponent imgUrl={this.props.image} height="400px"/>
              <div className="center">
              <a href={this.props.image} download="new.jpg" target="_blank" className="bottom" >
                   <Button title={"Download"} onClick={this.onClick}/>
              </a>
              </div>
              
            </div>
          
          </div>
        )
    }
}
