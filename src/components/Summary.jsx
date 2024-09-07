import React from 'react'
import usePlanStore from '../store/planStore'
import useAddOnsStore from '../store/addOnsStore'

function Summary() {

    const planInfo =usePlanStore(state=>state.planInfo)
    const addOns=useAddOnsStore(state=>state.addOns)

    const handleClick=()=>{
        console.log(planInfo)
        console.log(addOns)
    }
    
  return (
    <div className="step-container">
            <div className="step-heading">
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming</p>
            </div>
            <div className="recipe">
                <div className="display-plan">
                    <div className="display-text">
                        <span className='plan-name'>Arcade(Monthly)</span>
                        <span className='change' onClick={()=>handleClick()}>Change</span>
                    </div>
                    <span className='plan-price'>+$9/mo</span>
                </div>
                <div className="display-addons">
                    <span className='addons-title'>Online service</span>
                    <span className='addons-price'>+$1/mo</span>
                </div>
            </div>
            <div className="total">
                    <span className='total-text'>Total(per month)</span>
                    <div className="total-number">+$12/mo</div>
            </div>
    </div>
  )
}

export default Summary