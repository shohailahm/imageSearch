import React from 'react'

export default function Tag({tag,clickable,onClickTag,nomargin}) {
    return (
       
    <h5 onClick={clickable?()=>onClickTag(tag):()=>{}} style={{color:'gold',marginRight:nomargin?0:3,marginLeft:nomargin?0:3}}>{tag}</h5>
       
    )
}
