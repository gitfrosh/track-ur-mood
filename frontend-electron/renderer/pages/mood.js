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

export default class Main extends Component {
  componentWillMount() {
    this.setState({
      //images: this.props.images
      activeTab: 0
    });
  }

  render() {
      const {activeTab} = this.state;
    return (
      <>
        <Tabs value={activeTab} onChange={this.handleChange}>
          <Tab value={0}>Shoes</Tab>
          <Tab value={1}>Accesories</Tab>
          <Tab value={2}>Clothing</Tab>
        </Tabs>
        <div style={{ height: 300 }}>
          {activeTab === 0 && (
            <TabBody>
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
          {activeTab === 1 && <TabBody>Accesories stuff here</TabBody>}
          {activeTab === 2 && <TabBody>Clothing stuff here</TabBody>}
        </div>
      </>
    );
  }
}
