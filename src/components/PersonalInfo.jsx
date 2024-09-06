import React from 'react'
import useInfoStore from '../store/personalInfoStore'


function PersonalInfo() {

    const {name,email,phone} = useInfoStore(state=>state.formData)
    const setFormData = useInfoStore(state=>state.setFormData)
    const {errorName,errorEmail,errorPhone}=useInfoStore(state=>state.errorInfo)
    const setError =useInfoStore(state=>state.setError)
    const {nameErrorMsg,emailErrorMsg,phoneErrorMsg}=useInfoStore(state=>state.errorMsg)

    //handle change for each input

    const handleNameChange = (e)=>{
        setFormData(e.target.value,email,phone)
        if(e.target.value!=='')setError(false,errorEmail,errorPhone)
    }
    const handleEmailChange = (e)=>{
        setFormData(name,e.target.value,phone)
        if(e.target.value!=='')setError(errorName,false,errorPhone)
    }
    const handlePhoneChange = (e)=>{
        setFormData(name,email,e.target.value)
        if(e.target.value!=='')setError(errorName,errorEmail,false)
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
                    <span className={errorName?'disp-error':'hide-error'}>{nameErrorMsg}</span>
                </div>
                <input type="text" 
                       name='name' 
                       id='name' 
                       placeholder='e.g. Stephen King'
                       value={name}
                       onChange={e=>handleNameChange(e)}
                       />

                <div className='error'>
                    <label htmlFor="email">Email Address</label>
                    <span className={errorEmail?'disp-error':'hide-error'}>{emailErrorMsg}</span>
                </div>
                <input type="text"
                       name='email' 
                       id='email' 
                       placeholder='e.g. stephenking@lorem.com'
                       value={email}
                       onChange={e=>handleEmailChange(e)}
                       />

                <div className='error'>
                    <label htmlFor="phone">Phone number</label>
                    <span className={errorPhone?'disp-error':'hide-error'}>{phoneErrorMsg}</span>
                </div>
                <input type="text"
                       name='phone' 
                       id='phone' 
                       placeholder='e.g. +1 234 567 890' 
                       value={phone}
                       onChange={e=>handlePhoneChange(e)}
                       />
            </form>
        </div>
    </>
  )
}

export default PersonalInfo