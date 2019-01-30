import React from 'react'

class Contact extends React.Component {
    render() {
        return (
            <section id="contact" className="main style2 special">
            <div className="container">
                <header className="major">
                    <h2>Contact Me</h2>
                </header>
                <p>Sed lacus nascetur ac ante amet sapien.</p>
                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" style={{paddingLeft: "5em", paddingRight: "5em"}}>
                    <div className="field half first">
                        <label htmlFor="name" style={{color:"white"}}>Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email" style={{color:"white"}}>Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message" style={{color:"white"}}>Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions" style={{paddingTop: "2em"}}>
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </div>
        </section>

        )
    }
}

export default Contact
