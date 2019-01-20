import React from 'react'

import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'



class Certifications extends React.Component {
    render() {
        return (
            <section id="certificates" className="main style1 special">
            <div className="grid-wrapper">
                <div className="col-12">
                    <header className="major">
                        <h2>Certifications</h2>
                    </header>
                    <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                </div>

                <div className="col-4">
                    <span className="image fit"><img src={pic02} alt="" /></span>
                    <h3>VMWare Certified Professional</h3>
                    <p>Designed for IT professionals who install, configure, manage, and optimize VMware solutions.</p>
                    <p>VCP3-DCV, VCP4-DCV, VCP5-DCV and VCP6-DCV</p>
                </div>
                <div className="col-4">
                    <span className="image fit"><img src={pic03} alt="" /></span>
                    <h3>MCSE</h3>
                    <p>Microsoft Certified Systems Engineer (MCSE) is an IT professional who is certified in Microsoft Windows NT and 2000 operating systems (OS), Microsoft BackOffice Server products, networking and related desktop computer systems. In the IT industry, the MCSE certification serves as proof that an individual has the abilities, skills and knowledge required to administer certain IT roles.</p>
                </div>
                <div className="col-4">
                    <span className="image fit"><img src={pic04} alt="" /></span>
                    <h3>Microsoft Certified Trainer</h3>
                    <p>A Microsoft Certified Trainer (MCT) is a professional trainer who has been certified by Microsoft as an expert in terms of professional knowledge and with the ability to properly impart this knowledge to others, especially to non-technical people. MCTs are considered as the premier instructional and technical experts in all Microsoft technologies and they have the sole authority to deliver training for other Microsoft Certifications.</p>
                </div>
                <div className="col-4">
                    <span className="image fit"><img src={pic02} alt="" /></span>
                    <h3>MCTS</h3>
                    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                </div>
                <div className="col-4">
                    <span className="image fit"><img src={pic03} alt="" /></span>
                    <h3>Master Certified Novell Engineer</h3>
                    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                </div>
                <div className="col-4">
                    <span className="image fit"><img src={pic04} alt="" /></span>
                    <h3>Certified Novell Engineer</h3>
                    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                </div>
            </div>
        </section>

        )
    }
}

export default Certifications