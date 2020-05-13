import React from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel, Container } from 'react-bootstrap';
import './Stylesheets/Comission.css';

class Comission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameForm: '',
      strings: '6',
      top: 'flame-maple',
      finish: 'sunburst',
      details: ''
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("Thank you for your order " + this.state.nameForm)
    }



  render() {
    return (
      <Container>
        <form onSubmit={this.mySubmitHandler} className="comissionform">
        <p>
          <label>
            Name:
            <input type="text" name="nameForm" placeholder="First and last name"value={this.state.nameForm} onChange={this.myChangeHandler} />
          </label>
        </p>
        <p>
          <label className="formelement">
          Number of strings:
            <select name="strings" value={this.state.strings} onChange={this.myChangeHandler}>
              <option value="6">6 String</option>
              <option value="7">7 String</option>
              <option value="8">8 String</option>
            </select>
          </label>
        </p>
        <p>
          <label className="formelement">
          Top Wood:
            <select name="top" value={this.state.top} onChange={this.myChangeHandler}>
              <option value="flame-maple">Flame Maple Top</option>
              <option value="zebrawood">Zebrawood Top</option>
              <option value="quilted-maple">Quilted Maple Top</option>
              <option value="buckeye-burl">Buckeye Burl Top</option>
              <option value="walnut">Walnut Top</option>
            </select>
          </label>
        </p>
        <p>
          <label className="formelement">
          Finish:
          <select name="finish" value={this.state.finish} onChange={this.myChangeHandler}>
            <option value="sunburst">Sunburst</option>
            <option value="tobacco-burst">Tobacco Burst</option>
            <option value="ocean">Ocean Gradient</option>
            <option value="fire">Fire Gradient</option>
            <option value="dark">Dark Gradient</option>
            <option value="custom">Custom (Describe in textbox below)</option>
          </select>
          </label>
        </p>
        <p>
          <label className="formelement">
          Describe Your Orders Special details:
            <p className="detailform">
              <textarea type="text" name="details" placeholder="Inlays, finish and hardware can all be customized" value={this.state.details} onChange={this.myChangeHandler} />
            </p>
          </label>
        </p>
        <input type="submit" value="Submit" />
        </form>
      </Container>
    );
  }
}


export default Comission
