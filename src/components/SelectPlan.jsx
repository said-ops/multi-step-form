import React from 'react'
import usePlanStore from '../store/planStore'

function SelectPlan() {

    
    const {option,title,price,yearly}=usePlanStore(state=>state.planInfo)
    const setPlanInfo=usePlanStore(state=>state.setPlanInfo)
    const cards = usePlanStore(state=>state.cards)
    const selectedCard=usePlanStore(state=>state.selectedCard)
    const setSelected=usePlanStore(state=>state.setSelected)

    const handleChecked = (e)=>{
        setSelected(selectedCard)
        const selected = cards[selectedCard];
        setPlanInfo(!option,selected.title,selected.price,selected.yearly)
        console.log(option,selected.title,selected.price,selected.yearly)
    }
    const handleClickedoption = (index)=>{
        setSelected(index)
        const selected = cards[index];
        setPlanInfo(option,selected.title,selected.price,selected.yearly)
        console.log(option,selected.title,selected.price,selected.yearly)
       
   }

  return (
    <div className="step-container">
        <div className="step-heading">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing</p>
        </div>
        <div className="plan-options">
            {cards.map((card,index)=>{
                return(
                    <div className={`card ${selectedCard===index  ? 'selected-card' : '' }` }
                         key={index} 
                         onClick={()=>handleClickedoption(index)}
                    >
                        <img src={card.img} alt="" />
                        <div className="card-body">
                            <div className="card-title">{card.title}</div>
                            <div className="option-price"> {`$${!option?card.price:card.yearly}/${!option?'mo':'yr'}`} </div>
                            {option&&<div className="discount"> 2 months free</div>}
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="toggle-container">
            <input type="checkbox"
             id='toggle' 
             checked={option}
             onChange={e=>handleChecked(e)}
             />
            <span className='monthly'>Monthly</span>
            <label htmlFor="toggle">
                <span className='toggle-inner'></span>
                <span className='toggle-button'></span>
            </label>
            <span className='yearly'>Yearly</span>
        </div>
    </div>
  )
}

export default SelectPlan