import React from 'react'
import "./style.css"
import advertisers from "../../images/advertisers.png"

const CreatorToConsumer = () => {
    return (
        <>

            <section className='creator-section'>
                <div className="col1">
                    <h1>Creator-To-Consumer<br />
                        Decentralize Platform</h1>
                    <h6>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit,sed do eiusmod tempor incididunt.</h6>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia

                    </p>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                        sed quia non numquam eius modi tempora incidunt ut labore</p>

                </div>
                <div className="col2">
                    <div className="row">
                        <div className="icon-container">
                            <img src={advertisers} alt="" />
                            <h3>Advertisers</h3>
                        </div>
                        <div className="icon-container">
                            <img src={advertisers} alt="" />
                            <h3>Consumer</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="icon-container">
                            <img src={advertisers} alt="" />
                            <h3>Researchers</h3>
                        </div>
                        <div className="icon-container">
                            <img src={advertisers} alt="" />
                            <h3>Developer</h3>
                        </div>
                    </div>
                </div>

            </section></>

    )
}

export default CreatorToConsumer