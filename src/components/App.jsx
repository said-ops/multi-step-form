import React from 'react'
import SelectPlan from './SelectPlan'
import Footer from './Footer'
import PersonalInfo from './PersonalInfo'
import AddOns from './AddOns'
import Summary from './Summary'
import useInfoStore from '../store/personalInfoStore'
import LastStep from './LastStep'
import Confirming from './Confirming'


function App() {

  const currentStep=useInfoStore(state=>state.currentStep)
  const setStep=useInfoStore(state=>state.setStep)
  
  return (
    <>
    <section className='form-container'>
      {/* display cuurent step */}
      <div className='left'>
        <div className={`step ${currentStep==='personal info'&&'current-step'}`}>
          <div className={`step-number ${currentStep==='personal info'&&'step-no-selected'}`}>1</div>
          <div className="step-name">
            <span className='step-no'>Step 1</span>
            <span className='step-title'>YOUR INFO</span>
          </div>
        </div>
        <div className={`step ${currentStep==='select plan'&&'current-step'}`}>
          <div className={`step-number ${currentStep==='select plan'&&'step-no-selected'}`}>2</div>
          <div className="step-name">
            <span className='step-no'>Step 2</span>
            <span className='step-title'>SELECT PLAN</span>
          </div>
        </div>
        <div className={`step ${currentStep==='add ons'&&'current-step'}`}>
          <div className={`step-number ${currentStep==='add ons'&&'step-no-selected'}`}>3</div>
          <div className="step-name">
            <span className='step-no'>Step 3</span>
            <span className='step-title'>ADD-ONS</span>
          </div>
        </div>
        <div className={`step ${currentStep==='finishing up'&&'current-step'}`}>
          <div className={`step-number ${currentStep==='finishing up'&&'step-no-selected'}`}>4</div>
          <div className="step-name">
            <span className='step-no'>Step 4</span>
            <span className='step-title'>SUMMARY</span>
          </div>
        </div>
      </div>
      {/* display step conditionally */}
      <div className="right">
        {/* components goes here */}
        {currentStep==='personal info'&& <PersonalInfo/>}
        {currentStep==='select plan'&& <SelectPlan/>}
        {currentStep==='add ons'&& <AddOns/>}
        {currentStep==='finishing up'&& <Summary/>}
        {currentStep==='confirming'&& <Confirming/>}
        {currentStep==='thank you'&& <LastStep/>}
        {/* footer goes here */}
        <Footer  currentStep={currentStep} setStep={setStep}/>
      </div>

    </section>
  
    </>
  )
}

export default App