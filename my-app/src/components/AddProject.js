import React, { Component } from 'react';

class AddProject extends Component {
  static defaultProps = {
    catagories:['web design',"mobile app design", "web development"]
  }
  render() {
    let catagoryOptions = this.props.catagories.map(catagory=>{
      return <option key={catagory} value="catagory">{catagory}</option>
    });

    return (
      <div>
        <h3>Add Projects</h3>
          <form>
            <div>
              <label> Title </label> <br/>
              <input type="text" ref="title"/>
            </div>

            <div>
              <label> Catagory </label> <br/>
              <select ref="catagory">
                {catagoryOptions}
              </select>
            </div>
          </form>

      </div>
    );
  }
}

export default AddProject;
