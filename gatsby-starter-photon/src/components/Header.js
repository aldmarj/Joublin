import React from 'react'
import ParticleComponent from "./ParticleComponent";
import { Link, animateScroll as scroll } from 'react-scroll'



class Header extends React.Component {
    render() {
        return (
            <section id="header">
                
                <ParticleComponent/>
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h2>IT Consultant | Virtualisation | vBlock | Architect | Hybrid Cloud <br/>  
                        | VMWare SME | Cisco UCS | External Cloud AWS</h2>
                    <ul className="actions">
                        <li><Link
                                className="button scrolly"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                            >
                                Discover
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header

