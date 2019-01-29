import React from 'react'

import AboutFiller from '../assets/images/AboutFiller2.jpg'



class About extends React.Component {
    render() {
        return (
            <section id="about" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-12" style={{textAlign: "center"}}>
                            <header className="major">
                                <h2>About Me</h2>
                            </header>
                        </div>
                        <div className="col-6" >
                            <p>
                                I am an accomplished SC cleared Technical IT Consultant/Architect with versatile skills gained in my 27 years in the IT industry. I have worked globally in a diverse environment, i.e. Banking Industry, Government and Aerospace. I excel in the successful delivery of I.T services and technology projects from initial idea to completion. I have in-depth experience with user liaison, design, testing and successful implementation within budget and scope.
                            </p>
                            <p> 
                                Extensive experience with Virtualisation | VMWare products | LAN | WAN | Hardware | Back Office Software | Microsoft Systems Specialist | Hybrid Cloud.
                            </p>
                            
                        </div>
                        <div className="col-6" >
                            <span className="image fit"><img src={AboutFiller} alt="" /></span>
                        </div>
                    </div>
                        
                    
                </section>

        )
    }
}

export default About
