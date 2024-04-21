import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img from './assets/Img.png'
function Club1() {
return (
  <>
  <div className='club-header'>
    <p>CLUB_NAME</p>
  </div>
  <div className="club-body"></div>
  <div className="club-footer">
  <Button variant='primary'><Link to={'/Header'} style={{color:'white'}}>Back</Link></Button>
  </div>
  </>
)
}

export default Club1
