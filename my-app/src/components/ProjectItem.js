import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {

    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>:  {this.props.project.catagory}

      </li>
    );
  }
}

export default ProjectItem;
