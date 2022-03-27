import React from 'react'

export default function Subcard(props) {
  return (
  // <>
    <div className='vote'>
        <div className ='voteTitleSub'>{props.subtitle}</div>
        <div className ='voteTable voteContent' >
          <table>
              <tr>
                <td>{props.name1}</td>
              </tr>
              <tr>
                <td>{props.name2}</td>
              </tr>
              <tr>
                <td>{props.name3}</td>
              </tr>
          </table>
         </div>
    </div>
  
  // </>  

  )
}