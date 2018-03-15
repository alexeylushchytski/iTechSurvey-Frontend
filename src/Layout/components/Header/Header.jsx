import React from 'react';
import { render } from 'react-dom';
import { envelope } from '../../../../images/envelope.png';

const About = () => {
    return (
        <div>
            <a href="https://www.itechart.by/about">Company</a>
        </div>
    )
 }

 
 const EnvelopePicture = () => {
   return (
     <img src="/images/envelope.png"/>
   )
 }


export default class Header extends React.Component{
    constructor(props){
      // Pass props to parent class
      console.log(props);
      super(props);
      // Set initial state
      this.isAvailable = this.isAvailable.bind(this);
    }
    // Lifecycle method
    componentDidMount(){

    };

    
    
    isAvailable() {
        if (this.props.isHide) {
          return (
            <div id="header">
              <About/>
              <EnvelopePicture/>
              <button onClick={this.props.action}/>
            </div>
          )
        }
        else return(
          <div id="header">
              <EnvelopePicture/>
              <button onClick={this.props.action}/>
            </div>
        )
    }

    render(){
      // Render JSX
      return this.isAvailable();
    }
}