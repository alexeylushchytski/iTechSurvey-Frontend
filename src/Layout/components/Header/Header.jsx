import React from 'react';
import { render } from 'react-dom';

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
      super(props);
      // Set initial state
      this.state = {
        data: []
      }
    }
    // Lifecycle method
    componentDidMount(){

    }
    
    render(){
      // Render JSX
      return (
        <div>
          <EnvelopePicture/>
          <About/>
        </div>
      );
    }
}