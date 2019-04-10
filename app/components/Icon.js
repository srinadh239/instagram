import React, { Component } from 'react';

class Icon extends Component {
  render() {
    const { icon, className, ...restProps } = this.props;
    const updatedclass = `icon ${this.props.icon} ${className}`;
    return <div className={updatedclass} {...restProps} />;
  }
}

export default Icon;
