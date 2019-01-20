import React from 'react'

import barclays from '../assets/images/barclays-logo-1.png'
import Contact from './Contact';
import Header from './Header';


class Experience extends React.Component {

    constructor(){
        super();
        this.state = {
         buttonId: null
        }
        this.setButton = this.setButton.bind(this);
      }
      setButton(id){
        this.setState({buttonId: id});
      }
    
    render() {
        
        return (
            <div>
                {this.state.buttonId === 1 && <Contact/>}
                {this.state.buttonId === 2 && <Header/>}
                {this.state.buttonId !== 1  && this.state.buttonId !== 2 && <Contact/>}
            <section id="experience" className="main style2 special" >
            <div className="grid-wrapper">
            <div className="col-12">
                    <header className="major">
                        <h2>Experience</h2>
                    </header>
                    <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                </div>

                <div className="col-4">
                    <span className="image fit"><img src={barclays} alt="" /></span>
                    <h3>VMWare Certified Professional</h3>
                    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                    <input className={this.state.buttonId === 1? "button1 orange" : 
                    "button1"} onClick={() => this.setButton(1)} value="Comic" 
                    type="button" ref="button" />
                </div>
                <div className="col-4">
                    <span className="image fit"><img src={barclays} alt="" /></span>
                    <h3>MCSE</h3>
                    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                    <input className={this.state.buttonId === 2? "button2 orange" : 
                    "button2"} onClick={() => this.setButton(2)}  value="Contest" 
                    ref="button1" type="button" />
                </div>
                <div className="col-4">
                    <span className="image fit"><img src={barclays} alt="" /></span>
                    <h3>Microsoft Certified Trainer</h3>
                    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                    
                </div>
                <div className="col-4">
                    <span className="image fit"><img src={barclays} alt="" /></span>
                    <h3>MCTS</h3>
                    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                    
                </div>
                <div className="col-4">
                    <span className="image fit"><img src={barclays} alt="" /></span>
                    <h3>Master Certified Novell Engineer</h3>
                    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                    
                </div>
                <div className="col-4" style={{alignItems: `center`}}>
                    <span className="image fit"><img src={barclays} alt="" /></span>
                    <h3>Certified Novell Engineer</h3>
                    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                   
                </div>
            </div>
        </section>

        </div>

        )
    }
}

export default Experience

