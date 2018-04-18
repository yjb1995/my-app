import React, { Component } from 'react';
import './index.css';

class Test extends Component {
  render() {
    return (
      <div className="wrap">
        <button >Yes</button>
        <button className="ok">OK</button>
        <button className="cancel">Cancel</button>
        <p className="callout">尽管绝大多数开发者都知道有inherit 这个关键字，但还是很容易遗 忘它。inherit 可以用在任何CSS 属性中，</p>
      </div>
    );
  }
}

export default Test;
