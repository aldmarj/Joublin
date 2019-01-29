import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="http://uk.linkedin.com/in/andriesjoubert" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                    <li><a href="#" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Joublin 2019</li><li>Built By: <a href="http://uk.linkedin.com/in/aldmarjoubert">Aldmar Joubert</a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
