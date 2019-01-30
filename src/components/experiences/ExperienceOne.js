import React from 'react'




class ExperienceOne extends React.Component {

    
    render() {
       
        return (
            <div>
            <section id="experience" className="main style2 special" >
            <div className="grid-wrapper">
            <div className="col-12">
                    <header className="major">
                        <h2>Iaas Cloud and Virtualisation & Infrastructure Services</h2>
                    </header>
                    <p>
                        Barclays <br/>
                        May 2016 - Present <br/>
                        London, United Kingdom
                    </p>
                    <p>
                        <b>Managing technical engineers architecting/completing various projects:</b>
                    </p>
                    <ul style={{listStyle: "none"}}>
                        <b>
                            <li> + Upgrading 74 VMWare Virtual Centers and 5000 + ESXi Hosts from version 5.0 to 5.5 </li>
                            <li> + Patching 5000+ ESXi 5.5 Hosts and Virtual Centers to latest VMWare patch release </li>
                            <li> + Upgrading 12 SQL Server 2008 instances to SQL Server 2012 pre req. for vSphere 6.5 </li>
                            <li> + Architect/Upgrading 74 Virtual Centers and 5000+ Hosts from vSphere 5.5 to vSphere 6.5 </li>
                            <li> + Hardware upgrade of 584 M2 UCS Blades to M4 UCS Blades </li>
                            <li> + 1600 V2V / Hardware Decomissioning </li>
                            <li> + Windows 2003 remediation </li>
                            <li> + Setting up L1/L2/L3 Support model for External Cloud AWS</li>
                            <li> + Looking at ways how to improve service management/delivery globally (Service Now/Service First)</li>
                            <li> + Service Delivery manager L3 EMEA region </li> 
                        </b>
                    </ul>
                    
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

export default ExperienceOne

