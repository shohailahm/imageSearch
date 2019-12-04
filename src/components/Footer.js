import React, { Component } from 'react'
import './header.css';
import Tag from './Tag';
const tags=['coffee','tea','marshmello','gold','silver','kitchen','phones','computer','books'];
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <a className="white" href="#">Search<span className="black">It</span></a> 
                <div className="ft-content">
                 
                 <div className="tagsContainer">
                    <h5 style={{color:'#fff'}}>Popular Searches</h5>
                    <div className="footerTags">
                        

                      
                        {
                         tags.map((tag)=>(<li key={tag}>{tag}</li>))
                        }
                    
                    </div> 
                 </div>
                
                </div>
                 
            </div>
        )
    }
}
