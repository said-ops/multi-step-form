import React from 'react'

function App() {
  return (
    <>
    <section className='form-container'>
      <div className='left'>
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-name">
            <span className='step-no'>Step 1</span>
            <span className='step-title'>YOUR INFO</span>
          </div>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-name">
            <span className='step-no'>Step 2</span>
            <span className='step-title'>SELECT PLAN</span>
          </div>
        </div>
        <div className="step">
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
        {/* compoents goes here */}
      </div>
    </section>
  
    </>
  )
}

export default App