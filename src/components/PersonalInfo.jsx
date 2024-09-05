import React from 'react'

function PersonalInfo() {

    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <>
        <div className="step-container">
            <div className="step-heading">
                <h1>Personal info</h1>
                <p>Please provide your name,email adress and phone number</p>
            </div>
            <form action="#" onSubmit={e=>handleSubmit(e)}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='name' placeholder='e.g. Stephen King' />
                <label htmlFor="email">Email Adress</label>
                <input type="text" name='email' id='email' placeholder='e.g. stephenking@lorem.com' />
                <label htmlFor="phone">Phone number</label>
                <input type="text" name='phone' id='phone' placeholder='e.g. +1 234 567 890' />
            </form>
        </div>
    </>
  )
}

export default PersonalInfo