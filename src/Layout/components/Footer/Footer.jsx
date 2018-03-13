import React from 'react';
import { render } from 'react-dom';

const GetYear = () => {
    var year = new Date().getFullYear();
    return (
        <div>
            <p>Copyright © iTechArt alexey.luschitskiy. {year}</p>
        </div>
    )
 }

export default class Footer extends React.Component{
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
        <GetYear/>
      );
    }
  }