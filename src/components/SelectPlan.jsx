import React, { useState } from 'react'

function SelectPlan() {

    const [selectedCard,setSelected]=useState(null)
    const handleClickedoption = (index)=>{
        setSelected(index)
    }
    const cards = [{img:'../src/assets/images/icon-arcade.svg',title:'Arcade',price:'$9/mo'},
        {img:'../src/assets/images/icon-advanced.svg',title:'Advanced',price:'$12/mo'},
        {img:'../src/assets/images/icon-pro.svg',title:'Pro',price:'$15/mo'},]

  return (
    <div className="step-container">
        <div className="step-heading">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing</p>
        </div>
        <div className="plan-options">
            {cards.map((card,index)=>{
                return(
                    <div className={`card ${selectedCard===index ? 'selected-card' : ''}` }
                         key={index} 
                         onClick={()=>handleClickedoption(index)}
                    >
                        <img src={card.img} alt="" />
                        <div className="card-body">
                            <div className="card-title">{card.title}</div>
                            <div className="option-price"> {card.price} </div>
                            <div className="discount"> 2 months free</div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default SelectPlan