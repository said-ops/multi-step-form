import React from 'react'
import useInfoStore from '../store/personalInfoStore'


function Footer({currentStep,setStep}) {

  const setError=useInfoStore(state=>state.setError)
  const {name,email,phone}=useInfoStore(state=>state.formData)
  const setErrorMsg =useInfoStore(state=>state.setErrorMsg)

  const handleNextStep=()=>{
    if(currentStep==='personal info'){

      let hasNameError = false
      let hasEmailError = false
      let hasPhoneError = phone===''

      let nameErrorMsg =''
      let emailErrorMsg =''
      let PhoneErrorMsg = ''
      //name validation
      if(name===''){
        hasNameError=true
        nameErrorMsg='This field is required'
      }
      else if(name.length>20){
        hasNameError=true
        nameErrorMsg='Name must be 20 characters or less'
      }
      //email validation
      if(email===''){
        hasEmailError=true
        emailErrorMsg='This field is required'
      }
      else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        hasEmailError=true
        emailErrorMsg='Invalid email address'
      }
      
      //set the error and its msg
      setError(hasNameError,hasEmailError,hasPhoneError)
      setErrorMsg(nameErrorMsg,emailErrorMsg,PhoneErrorMsg)
    
      if(!hasNameError&&!hasEmailError&&!hasPhoneError) setStep('select plan')   
    }
    if(currentStep==='select plan'){setStep('select plan')}
  }

  const backStep = ()=>{
    if(currentStep==='personal info'){setStep('personal info')}
    if(currentStep==='select plan'){setStep('personal info')}
  }

  return (
    <footer>
        <button className={`back ${currentStep==='personal info' ? 'hide-back' : ''}`} onClick={backStep}>Go Back</button>
        <button className='next' onClick={handleNextStep} >Next Step</button>
    </footer>
  )
}

export default Footer