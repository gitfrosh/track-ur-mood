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

import Mood from "../pages/mood";

export default class Main extends Component {
  static async getInitialProps() {
    // const res = await fetch('http://localhost:4000/photos')
    // const images = await res.json()
    // return { images }
  }

  render() {
    console.log(this.props)
    return (
      <Window style={{ width: '100%', height: '100%', marginTop: '45px' }}>
        <WindowHeader>🙄 track-ur-mood.exe</WindowHeader>
        <WindowContent>
            {this.props.menu === 1 && <Mood />}
            {this.props.menu === 2 && 'Profile'}
            {/* {this.props.menu === 2 && 'Account'} */}
        </WindowContent>
      </Window>
    );
  }
}
