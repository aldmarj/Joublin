import React from "react";
import { Link } from 'react-scroll'

const ListLink = props => (
  <li style={{ display: `inline-block`  }}>
    <Link 
      activeClass="active"
      to={props.to}
      spy={true}
      smooth={true}
      offset={0}
      duration= {1000}
      onClick={props.close}
      >
        {props.children}
    </Link>
  </li>
)

export default ({ children, close }) => (
  <div>
    <nav id="site-menu-contents">
      <ul id="mainMenu">
        <li className="menuButton"><ListLink  to="header" close={close}>Home </ListLink></li>
        <li className="menuButton"><ListLink className="button" to="about"  close={close}>About</ListLink></li>
        <li className="menuButton"><ListLink  to="experience" close={close}>Experience</ListLink></li>
        <li className="menuButton"><ListLink to="certificates" close={close}>Certifications</ListLink></li>
        <li className="menuButton"><ListLink to="contact" close={close}>Contact</ListLink></li>
      </ul>
    </nav>
    {children}
  </div>
)