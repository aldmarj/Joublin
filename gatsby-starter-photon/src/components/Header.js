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
                    <h1>Hi, I'm <strong>Photon</strong>, another fine<br />
                    little freebie from <a href="http://html5up.net">HTML5 UP</a>.</h1>
                    <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
                    lobortis feugiat sapien sed etiam volutpat accumsan.</p>
                    <ul className="actions">
                        <li><Link
                                className="button scrolly"
                                activeClass="active"
                                to="one"
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

