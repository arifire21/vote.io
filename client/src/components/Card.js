import React from 'react'

export default function Card(props) {
  return (
    // <>
    <div className='vote'>

      <div className='voteTitle'>{props.title}</div>
      <div className="voteBody">
        <div className='voteContent'>
          {props.content}
        </div>
      </div>


    </div>

    // </>  

  )
}