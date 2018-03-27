import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      projects:[]
    }
  }

  componentWillMount(){
    this.setState({
      projects:[
        {
          title:"business",
          catagory:"web design"
        },
        {
          title:"social site",
          catagory:" mobile app design"
        },
        {
          title:"ebusiness",
          catagory:"web develpment"
        }
      ]
    })
  }

  render() {
    return (
      <div className="App">

  <Projects projects={this.state.projects}/>
    <AddProject/>

      </div>
    );
  }
}

export default App;
