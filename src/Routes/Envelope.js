import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Env from '../Texts/env.txt';

class Envelope extends Component {
    componentDidMount = () => {
      this.handleClick();
    };
    handleClick = () => {
      fetch(Env)
        .then((r) => r.text())
        .then((text) => {
          console.log(text);
          this.setState({ text });
        });
    };
    render() {
      return (
        <div>
          <div className="pageBack">
            <Link to="/TextRotator" style={{textDecoration:"none"}}> 
              <p>{this.state?.text}</p>
            </Link>
          </div>
        </div>
      );
    }
  }
  
  export default Envelope;