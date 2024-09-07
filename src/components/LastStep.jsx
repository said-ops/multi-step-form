import React, { useEffect } from 'react'

function LastStep() {

    useEffect(()=>{
        setTimeout(() => {
            window.location.reload()
        }, 5000);
    },[])
  return (
    <div className="thank-container">
        <img src="/multi-step-form/assets/images/icon-thank-you.svg" alt="thank you icon" />
        <div className="step-container">
            <div className="step-heading">
                <h1>Thank you!</h1>
                <p>Thanks for confirming your subscription!We hope you have fun using our platform.
                    If you ever need support,please feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </div>    
    </div>
  )
}

export default LastStep