import React, { Component } from "react";
import { Fieldset } from "react95";

import Fingerprint2 from "fingerprintjs2";

export default class StarRating extends Component {
  static async getInitialProps() {
    // const res = await fetch('http://localhost:4000/photos')
    // const images = await res.json()
    // return { images }
  }

  state = {
    fingerprint: "loading .."
  };

  componentWillMount() {
    const that = this;
    setTimeout(function() {
        var that2 = that;
      Fingerprint2.get(function(components) {
        var that3 = that2;
        var values = components.map(function(component) {
          return component.value;
        });
        var murmur = Fingerprint2.x64hash128(values.join(""), 31);
        that3.setState({
          fingerprint: murmur
        });
      });
    }, 500);
  }
  render() {
    const string = "Start";
    // const logoIcon =
    return (
      <Fieldset label="Your Fingerprint">{this.state.fingerprint}</Fieldset>
    );
  }
}
