import React from 'react';

function Grade(props) {
  const { name, course, grade, id } = props;
  const deleteGrade = function () { props.deleteGrade(id); };
  return (
    <tr>
      <td>{ name }</td>
      <td>{ course }</td>
      <td>{ grade }</td>
      <td><button onClick={deleteGrade}>Delete</button></td>
    </tr>

  );
}

export default Grade;
