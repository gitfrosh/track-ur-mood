import React, { Component } from "react";
import {
  reset,
  themes,
  List,
  Button,
  AppBar,
  Toolbar,
  Menu,
  LogoIcon,
  TextField,
  ListItem,
  Window,
  WindowContent,
  WindowHeader,
  Tabs,
  Tab,
  TabBody,
  Fieldset,
  NumberField,
  Checkbox,
  Divider
} from "react95";

import StarRating from "../components/star-rating";
import Fingerprint from "../components/fingerprint";

export default class Main extends Component {
  componentWillMount() {
    this.setState({
      //images: this.props.images
      activeTab: 0
    });
  }

  changeTab = e => {
    this.setState({
      activeTab: e
    });
  };

  render() {
    const { activeTab } = this.state;
    const { today, mood } = this.props;
    return (
      <>
        <Tabs value={activeTab} onChange={this.changeTab}>
          <Tab value={0}>Rate it!</Tab>
          <Tab value={1}>📈 Stats</Tab>
          <Tab value={2}>Fingerprint</Tab>
          <Tab value={3}>Random stuff</Tab>
        </Tabs>
        <div style={{ height: 300 }}>
          {activeTab === 0 && (
            <TabBody>
              <Fieldset label={`Rate your day (${today}):`}>
                <StarRating mood={mood} today={today} />
              </Fieldset>
            </TabBody>
          )}
          {activeTab === 1 && <TabBody>wow wow..</TabBody>}
          {activeTab === 2 && (
            <TabBody>
              <Fingerprint />
            </TabBody>
          )}
          {activeTab === 3 && (
            <TabBody>
              {" "}
              <Fieldset label="Order:">
                <div style={{ padding: "0.5em 0 0.5em 0" }}>Amount:</div>
                <NumberField
                  width={"100%"}
                  min={0}
                  value={0}
                  onChange={() => null}
                />
                <Checkbox
                  name="shipping"
                  value="fast"
                  label="Fast shipping"
                  onChange={() => null}
                  checked
                />
              </Fieldset>
            </TabBody>
          )}
        </div>
      </>
    );
  }
}
