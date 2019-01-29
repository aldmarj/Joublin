import React from "react";
import Popup from "reactjs-popup";

import "../assets/scss/main.scss";
import "../assets/scss/navbar.scss";
import "../assets/scss/menu.scss";

import NavBar from "./NavBar";
import Menu from "./Menu";

import Header from "./Header";
import About from "./About";
import ExperienceContainer from "./ExperienceContainer";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Footer from "./Footer";

const contentStyle = {
    background: "rgba(0, 0, 0, 0.8)",
    width: "100%",
    height: "100%",
    border: "none"
};

class Template extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: 'is-loading'
      }
    }

    componentDidMount () {
      this.timeoutId = setTimeout(() => {
          this.setState({loading: ''});
      }, 100);
    }

    componentWillUnmount () {
      if (this.timeoutId) {
          clearTimeout(this.timeoutId);
      }
    }

    render() {
        const { children } = this.props;

        return (
            <div className={`body ${this.state.loading}`}>
                <Popup
                    modal
                    contentStyle={contentStyle}
                    closeOnDocumentClick={false}
                    trigger={open => <NavBar open={open} />}
                >
                    {close => <Menu close={close} />}
                </Popup>
                <Header />
                <About />
                <ExperienceContainer />
                <Certifications />
                <Contact />
                {children}
                <Footer />
            </div>
        );
    }
}

export default Template;
