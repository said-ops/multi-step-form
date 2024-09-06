import React from 'react'
// import { handleSubmit } from './PersonalInfo'

function Footer({currentStep,setStep}) {

  const handleNextStep=()=>{
    if(currentStep==='personal info'){setStep('select plan')}
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