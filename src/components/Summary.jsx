import React from 'react'
import usePlanStore from '../store/planStore'
import useAddOnsStore from '../store/addOnsStore'
import useInfoStore from '../store/personalInfoStore'

function Summary() {

    const {option,title,price,yearly} =usePlanStore(state=>state.planInfo)
    const addOns=useAddOnsStore(state=>state.addOns)
    const setStep=useInfoStore(state=>state.setStep)

    const handleClick=()=>{
        setStep('select plan')
    }
    const getTotal=()=>{
        let total=0
       if(option){
        total=parseInt(yearly)
        addOns.map(addOn=>{
            if(addOn.added) total=total+parseInt(addOn.yearly)
        })
       }
       else if(!option){
        total=parseInt(price)
        addOns.map(addOn=>{
            if(addOn.added) total=total+parseInt(addOn.price)
        })
       }

       return total
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
                        <span className='plan-name'>{`${title}(${!option?'Monthly':'Yearly'})`}</span>
                        <span className='change' onClick={()=>handleClick()}>Change</span>
                    </div>
                    <span className='plan-price'>{`+$${!option?price:yearly}/${!option?'mo':'yr'}`}</span>
                </div>
                {addOns.map((addOn,index)=>{
                    if(addOn.added){
                        return(
                            <div className="display-addons" key={index}>
                               <span className='addons-title'>{addOn.title}</span>
                               <span className='addons-price'>{`+$${!option?addOn.price:addOn.yearly}/${!option?'mo':'yr'}`}</span>
                           </div>
                           )
                    }
                })}
            </div>
            <div className="total">
                    <span className='total-text'>Total (per {!option?'month':'year'})</span>
                    <div className="total-number">{`+$${getTotal()}/${!option?'mo':'yr'}`}</div>
            </div>
    </div>
  )
}

export default Summary