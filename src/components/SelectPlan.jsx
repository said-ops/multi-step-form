import React, { useState } from 'react'
import usePlanStore from '../store/planStore'

function SelectPlan() {

    const [selectedCard,setSelected]=useState(0)
    const handleClickedoption = (index)=>{
        setSelected(index)
    }
    const cards = [
        {img:'../src/assets/images/icon-arcade.svg',title:'Arcade',price:'$9/mo',yearly:'$90/yr'},
        {img:'../src/assets/images/icon-advanced.svg',title:'Advanced',price:'$12/mo',yearly:'$120/yr'},
        {img:'../src/assets/images/icon-pro.svg',title:'Pro',price:'$15/mo',yearly:'$150/yr'},
    ]

    const {option,title,price,yearly}=usePlanStore(state=>state.planInfo)
    const setPlanInfo=usePlanStore(state=>state.setPlanInfo)

    const handleChecked = (e)=>{
        
        setPlanInfo(!option,cards[selectedCard].title,cards[selectedCard].price,cards[selectedCard].yearly)
        console.log(option,title,price,yearly)
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
                            <div className="option-price"> {!option?card.price:card.yearly} </div>
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