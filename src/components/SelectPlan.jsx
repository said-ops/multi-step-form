import React from 'react'

function SelectPlan() {
  return (
    <div className="step-container">
        <div className="step-heading">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing</p>
        </div>
        <div className="plan-options">
            <div className="card">
                <img src="../src/assets/images/icon-arcade.svg" alt="" />
                <div className="card-body">
                    <div className="card-title">Arcade</div>
                    <div className="option-price"> $9/mo </div>
                    <div className="discount"> 2 months free</div>
                </div>
            </div>
            <div className="card">
                <img src="../src/assets/images/icon-advanced.svg" alt="" />
                <div className="card-body">
                    <div className="card-title">Advanced</div>
                    <div className="option-price"> $12/mo </div>
                    <div className="discount"> 2 months free</div>
                </div>
            </div>
            <div className="card">
                <img src="../src/assets/images/icon-pro.svg" alt="" />
                <div className="card-body">
                    <div className="card-title">Pro</div>
                    <div className="option-price"> $15/mo </div>
                    <div className="discount"> 2 months free</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SelectPlan