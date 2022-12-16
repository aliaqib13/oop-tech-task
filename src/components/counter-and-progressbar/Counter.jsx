import React from 'react'
import "./counter.css"

const Counter = () => {
    return (
        <>
            <div className="counter-wrapper">
                <div className="counter">
                    <h3>Pre-sale is Live Now</h3>
                    <div className="couter-txt">
                        <p>Pre-Sale ends in</p>
                        <h4 className='clock'><span>30:</span><span>23:</span><span>59:</span><span>59<span /></span></h4>
                        <p className='clock-title'>DHMS</p>
                    </div>


                </div>
                <div className="progress-bar">
                    <h4>Pre Sale</h4>
                    <div className="prog-back"> <div className='progress'></div></div>
                    <div className="prog-title"><p >Softcap reached</p> <p >124,000 Sold</p></div>


                </div></div></>
    )
}

export default Counter