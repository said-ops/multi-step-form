import React from 'react'

function Footer({handleSubmit}) {
  return (
    <footer>
        <button className='back'>Go Back</button>
        <button className='next' onClick={e=>handleSubmit(e)}>Next Step</button>
    </footer>
  )
}

export default Footer