import React from 'react'
import "./about.css"
import poster from "../../images/poster.jpg"

const About = () => {
    return (
        <>
            <div className='container-box'>
                <section className='about-section'>
                    <h1>About LEMONET</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna.
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                        dolores et quas molestias.
                    </p>
                    <video width="700" height="400" poster={poster} controls>
                        <source src="movie.mp4" type="video/mp4" />

                        Your browser does not support the video tag.
                    </video>


                </section>
            </div>
        </>
    )
}

export default About