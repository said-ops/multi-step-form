import React from 'react'
import useAddOnsStore from '../store/addOnsStore'
import usePlanStore from '../store/planStore'

function AddOns() {

    const {option}=usePlanStore(state=>state.planInfo)
    const addOns=useAddOnsStore(state=>state.addOns)
    const setAddOns=useAddOnsStore(state=>state.setAddOns)
  return (
    <div className="step-container">
        <div className="step-heading">
            <h1>Pick Add-Ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
        </div>
        <div className="add-ons">
            {addOns.map((a,i)=>{
                return(
                    <label htmlFor={i} key={i}>
                    <div className="item">
                        <input type="checkbox"  
                        id={i} 
                        checked={a.added}
                        onChange={()=>setAddOns(a.title)}
                        />
                        <div className="addon-text">
                            <span className='card-title'>{a.title}</span>
                            <p>{a.desc}</p>
                        </div>
                        <div className='addon-price'>{!option?a.price:a.yearly}</div>
                    </div>
                    </label>
                )
            })}
        </div>
    </div>
  )
}

export default AddOns