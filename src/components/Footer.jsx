import React from 'react'
import { handleSubmit } from './PersonalInfo'

function Footer() {
  return (
    <footer>
        <button className='back'>Go Back</button>
        <button className='next' onClick={e=>handleSubmit(e)}>Next Step</button>
    </footer>
  )
}

export default Footer