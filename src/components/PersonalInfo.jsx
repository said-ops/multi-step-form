import React from 'react'
import Footer from './Footer'

function PersonalInfo() {

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('submit')
    }
  return (
    <>
        <div className="step-container">
            <div className="step-heading">
                <h1>Personal info</h1>
                <p>Please provide your name,email adress and phone number</p>
            </div>
            <form action="#">

                <div className='error'>
                    <label htmlFor="name">Name</label>
                    <span>This field is required</span>
                </div>
                <input type="text" name='name' id='name' placeholder='e.g. Stephen King' />

                <div className='error'>
                    <label htmlFor="email">Email Address</label>
                    <span>This field is required</span>
                </div>
                <input type="text" name='email' id='email' placeholder='e.g. stephenking@lorem.com' />

                <div className='error'>
                    <label htmlFor="phone">Phone number</label>
                    <span>This field is required</span>
                </div>
                <input type="text" name='phone' id='phone' placeholder='e.g. +1 234 567 890' />
            </form>
        </div>
    {/* footer goes here */}
        <Footer handleSubmit={handleSubmit}/>
    </>
  )
}

export default PersonalInfo