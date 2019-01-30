import React from 'react'




class ExperienceTwo extends React.Component {

    
    render() {
       
        return (
            <div>
            <section id="experience" className="main style2 special" >
            <div className="grid-wrapper">
            <div className="col-12">
                    <header className="major">
                        <h2>Resident Architect</h2>
                    </header>
                    <p>
                        VCE <br/>
                        April 2016 <br/>
                        London, United Kingdom
                    </p>
                    <p>
                        Configure | Supporting vBlock 320 and vBlock 340 for one of VCE’s clients Jaguar / Landrover. 
                        This includes CISCO UCS Compute, VMWare and EMC VNX | vPlex storage. 
                    </p>
                    <button onClick={() => {
                       this.props.handleClick("AllExperience");
                   }}
                   >
                    All Experience
                   </button>
                </div>

                
            </div>
        </section>
        </div>

        )
    }
}

export default ExperienceTwo