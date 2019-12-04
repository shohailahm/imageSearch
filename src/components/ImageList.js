import React, { Component } from 'react'
import ImageComponent from './Image'
import './imagelist.css';

export default class ImageList extends Component {
    
    open=(url,details)=>{
        this.props.onOpen(url,details);
    }

    render() {
        const {images}=this.props;
        return (
            <div className="listImages">{
                   images.length>1 && images.map((image,ind)=>(   
                   <ImageComponent clickable key={image.id} imgUrl={image && image.urls && image.urls.regular} onOpen={this.open} imageDetails={image}/>
                   ))
                }
                
            </div>
        )
    }
}
