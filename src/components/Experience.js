import React from 'react'




class Experience extends React.Component {

    
    render() {
       
        return (
            <div>
            <section id="experience" className="main style2 special" >
            <div className="grid-wrapper" style={{paddingBottom: "5em"}}>
            <div className="col-12" >
                    <header className="major">
                        <h2>Experience</h2>
                    </header>
                    <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                </div>

                <div className="col-4">
                    <h3>Iaas Cloud and Virtualisation</h3>
                    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                    <button onClick={() => {
                       this.props.handleClick("ExperienceOne");
                   }}
                   >
                    Read More
                   </button>
                </div>
                <div className="col-4">
                    <h3>Resident Architect</h3>
                    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                    <button onClick={() => {
                       this.props.handleClick("ExperienceTwo");
                   }}
                   >
                    Read More
                   </button>
                </div>
                <div className="col-4">
                    <h3>Solutions Architect</h3>
                    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                    <button onClick={() => {
                       this.props.handleClick("ExperienceThree");
                   }}
                   >
                    Read More
                   </button>
                </div>
                <div className="col-4">
                    <h3>P2V/V2V Project Technical Lead</h3>
                    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                    <button onClick={() => {
                       this.props.handleClick("ExperienceFour");
                   }}
                   >
                    Read More
                   </button>
                </div>
                <div className="col-4">
                    <h3>Infrastructure Management</h3>
                    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                    <button onClick={() => {
                       this.props.handleClick("ExperienceFive");
                   }}
                   >
                    Read More
                   </button>
                </div>
                <div className="col-4" style={{alignItems: `center`}}>
                    <h3>3rd Line Technical Specialist</h3>
                    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                    <button onClick={() => {
                       this.props.handleClick("ExperienceSix");
                   }}
                   >
                    Read More
                   </button>
                </div>
            </div>
        </section>
        </div>

        )
    }
}

export default Experience

