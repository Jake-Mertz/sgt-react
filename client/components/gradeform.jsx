import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    // console.log(event.target);
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, course, grade } = this.state;
    this.props.addGrade(name, course, grade);
    this.setState({ name: '', course: '', grade: '' });
  }

  handleReset() {
    this.setState({ name: '', course: '', grade: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name}
            onChange={this.handleChange} id="name"/>
        </label>
        <label>
          Course:
          <input type="text" value={this.state.course}
            onChange={this.handleChange} id="course" />
        </label>
        <label>
          Grade:
          <input type="text" value={this.state.grade}
            onChange={this.handleChange} id="grade" />
        </label>
        <input type="submit" value="Submit" />
        <button onClick={this.handleReset}>Reset</button>
      </form>
    );
  }
}

export default GradeForm;
