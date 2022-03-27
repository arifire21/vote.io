import React from 'react'

export default function Subcard(props) {
  return (
  // <>
    <div className='vote'>
        <div className ='voteTitleSub'>{props.subtitle}</div>
        <div className ='voteTable voteContent' >
         {props.children}
         </div>
    </div>
  
  // </>  

  )
}