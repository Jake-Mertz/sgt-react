import React from 'react';

function Grade(props) {
  return (
    <tr element={props}>
      <td>{this.state.grades.name}</td>
      <td>{this.state.grades.course}</td>
      <td>{this.state.grades.grade}</td>
    </tr>
  );
}

export default Grade;
