import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Student Grade Table'
    };
  }

  render() {
    return this.state.title;
  }
}

export default Header;
