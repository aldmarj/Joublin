import React from 'react'

import pic02 from '../assets/images/pic02.jpg'




class Certifications extends React.Component {
    render() {
        return (
            <section id="certificates" className="main style1">
            <div className="grid-wrapper">
                <div className="col-12" style={{textAlign: "center"}}>
                    <header className="major">
                        <h2>Certifications</h2>
                    </header>
                </div>

                <div className="col-6">
                    <span className="image fit"><img src={pic02} alt="" /></span>
                </div>
                <div className="col-6">
                    <p>
                        Microsoft Certified Systems Engineer (MCSE) is an IT professional who is certified in Microsoft Windows NT and 2000 operating systems (OS), Microsoft BackOffice Server products, networking and related desktop computer systems. In the IT industry, the MCSE certification serves as proof that an individual has the abilities, skills and knowledge required to administer certain IT roles.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum cursus quis elit ac mattis. Duis ac eros sit amet lorem elementum placerat in eget magna. Mauris vel est ac urna commodo auctor sit amet et tortor. Nam tincidunt mauris ut erat malesuada aliquam.
                    </p>
                </div>
            </div>
        </section>

        )
    }
}

export default Certifications