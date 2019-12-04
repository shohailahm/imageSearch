import React from 'react';
import { getRandom } from '../unsplash/api';


export default class ImageComponent extends React.Component{
    
render(){
    const {clickable,height}=this.props;
    return(
        <img src={this.props.imgUrl} alt="random image" style={{width:'80%',height:height?height:100,border:'0.25px solid black',objectFit:'cover'}}  onClick={clickable?()=>{this.props.onOpen(this.props.imgUrl,this.props.imageDetails)}:()=>{}} />
    )
}
}