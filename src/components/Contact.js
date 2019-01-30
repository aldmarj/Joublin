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
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
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
