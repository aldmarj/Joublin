import React from 'react'


import Experience from './Experience';
import ExperienceOne from './experiences/ExperienceOne';
import ExperienceTwo from './experiences/ExperienceTwo';
import ExperienceThree from './experiences/ExperienceThree';
import ExperienceFour from './experiences/ExperienceFour';
import ExperienceFive from './experiences/ExperienceFive';
import ExperienceSix from './experiences/ExperienceSix';

class ExperienceContainer extends React.Component {

    state = {
        whichComponentToShow: "AllExperience"
    };

    handleClick(experience) {
        this.setState({ whichComponentToShow: experience });
        window.scrollTo(0, document.getElementById('experience').offsetTop);
      };
    
    render() {
       if (this.state.whichComponentToShow === 'AllExperience') {
           return (
               <div>
                   <Experience handleClick={this.handleClick.bind(this)}/>
               </div>
           )
        } else if (this.state.whichComponentToShow === 'ExperienceOne') {
           return (
               <div>
                   <ExperienceOne handleClick={this.handleClick.bind(this)}/>
               </div>
           )
        } else if (this.state.whichComponentToShow === 'ExperienceTwo') {
            return (
                <div>
                    <ExperienceTwo handleClick={this.handleClick.bind(this)}/>
                </div>
            )
        } else if (this.state.whichComponentToShow === 'ExperienceThree') {
            return (
                <div>
                    <ExperienceThree handleClick={this.handleClick.bind(this)}/>
                </div>
            )
        } else if (this.state.whichComponentToShow === 'ExperienceFour') {
            return (
                <div>
                    <ExperienceFour handleClick={this.handleClick.bind(this)}/>
                </div>
            )
        } else if (this.state.whichComponentToShow === 'ExperienceFive') {
            return (
                <div>
                    <ExperienceFive handleClick={this.handleClick.bind(this)}/>
                </div>
            )
        } else if (this.state.whichComponentToShow === 'ExperienceSix') {
            return (
                <div>
                    <ExperienceSix handleClick={this.handleClick.bind(this)}/>
                </div>
            )
        }

       return null;
    }
}

export default ExperienceContainer