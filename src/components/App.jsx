import React, { useState } from 'react'
import SelectPlan from './SelectPlan'
import Footer from './Footer'
import PersonalInfo from './PersonalInfo'
import AddOns from './AddOns'


function App() {

  const [currentStep,setStep]=useState('personal info')
  
  return (
    <>
    <section className='form-container'>

      <div className='left'>
        <div className={`step ${currentStep==='personal info'&&'current-step'}`}>
          <div className="step-number">1</div>
          <div className="step-name">
            <span className='step-no'>Step 1</span>
            <span className='step-title'>YOUR INFO</span>
          </div>
        </div>
        <div className={`step ${currentStep==='select plan'&&'current-step'}`}>
          <div className="step-number">2</div>
          <div className="step-name">
            <span className='step-no'>Step 2</span>
            <span className='step-title'>SELECT PLAN</span>
          </div>
        </div>
        <div className={`step ${currentStep==='add ons'&&'current-step'}`}>
          <div className="step-number">3</div>
          <div className="step-name">
            <span className='step-no'>Step 3</span>
            <span className='step-title'>ADD-ONES</span>
          </div>
        </div>
        <div className="step">
          <div className="step-number">4</div>
          <div className="step-name">
            <span className='step-no'>Step 4</span>
            <span className='step-title'>SUMMARY</span>
          </div>
        </div>
      </div>

      <div className="right">
        {/* components goes here */}
        {currentStep==='personal info'&& <PersonalInfo/>}
        {currentStep==='select plan'&& <SelectPlan/>}
        {currentStep==='add ons'&& <AddOns/>}
        {/* footer goes here */}
        <Footer  currentStep={currentStep} setStep={setStep}/>
      </div>

    </section>
  
    </>
  )
}

export default App