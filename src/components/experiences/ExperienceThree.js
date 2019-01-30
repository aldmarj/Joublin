import React from 'react'




class ExperienceThree extends React.Component {

    
    render() {
       
        return (
            <div>
            <section id="experience" className="main style2 special" >
            <div className="grid-wrapper">
            <div className="col-12">
                    <header className="major">
                        <h2>VMWare SME & Solutions Architect</h2>
                    </header>
                    <p>
                        Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.
                        Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.
                        Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.
                        Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.
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

export default ExperienceThree