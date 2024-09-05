import React, { useState } from 'react'
import useInfoStore from '../store/personalInfoStore'


function PersonalInfo() {

    const formData = useInfoStore(state=>state.formData)
    const setFormData = useInfoStore(state=>state.setFormData)
   
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
                <input type="text" 
                       name='name' 
                       id='name' 
                       placeholder='e.g. Stephen King'
                       value={formData.name}
                       onChange={e=>setFormData(e.target.value,formData.email,formData.phone)}
                       />

                <div className='error'>
                    <label htmlFor="email">Email Address</label>
                    <span>This field is required</span>
                </div>
                <input type="text"
                       name='email' 
                       id='email' 
                       placeholder='e.g. stephenking@lorem.com'
                       value={formData.email}
                       onChange={e=>setFormData(formData.name,e.target.value,formData.phone)}
                       />

                <div className='error'>
                    <label htmlFor="phone">Phone number</label>
                    <span>This field is required</span>
                </div>
                <input type="text"
                       name='phone' 
                       id='phone' 
                       placeholder='e.g. +1 234 567 890' 
                       value={formData.phone}
                       onChange={e=>setFormData(formData.name,formData.email,e.target.value)}
                       />
            </form>
        </div>
    </>
  )
}

export default PersonalInfo