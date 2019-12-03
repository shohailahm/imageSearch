import React from 'react'

export default function Tag({tag,clickable,onClickTag}) {
    return (
       
    <h5 onClick={clickable?()=>onClickTag(tag):()=>{}} style={{color:'gold',marginRight:3,marginLeft:3}}>{tag}</h5>
       
    )
}
