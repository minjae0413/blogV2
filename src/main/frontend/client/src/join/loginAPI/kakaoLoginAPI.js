import React, { Component } from 'react';
import Kakao from 'kakao-js-sdk';

// npm install kakao-js-sdk

class MyComponent extends Component {
  componentDidMount() {
    Kakao.init('c089c8172def97eb00c07217cae17495');
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default MyComponent;