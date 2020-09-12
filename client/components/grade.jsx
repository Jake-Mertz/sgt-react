import React from 'react';

function Grade(props) {
  const { name, course, grade } = props;
  return (
    <tr>
      <td>{ name }</td>
      <td>{ course }</td>
      <td>{ grade }</td>
    </tr>
  );
}

export default Grade;
