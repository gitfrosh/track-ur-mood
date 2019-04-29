import Link from "next/link";
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
  Divider
} from "react95";

import logoIMG from "../static/logo.png";

// const LogoIcon = Logo.LogoIcon;

export default class MyMenu extends Component {
  static async getInitialProps() {
    // const res = await fetch('http://localhost:4000/photos')
    // const images = await res.json()
    // return { images }
  }

  handleClose = e => {
    console.log(e.target.getAttribute('id'));
    const menuClicked = e.target.getAttribute('id');
    this.props.setMenu(menuClicked);
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  };

  componentWillMount() {
    this.setState({
      //images: this.props.images
      open: false
    });
  }
  render() {
    const string = "Start";
    // const logoIcon =
    return (
      <div style={{ position: "relative", display: "inline-block" }}>
        {this.state.open && (
          <List
            horizontalAlign="left"
            verticalAlign="bottom"
            open={this.state.open}
            onClick={this.handleClose}
          >
            <ListItem id="1">🙃 Track ur Mood</ListItem>
            <ListItem id="2">📃 My account</ListItem>
            <Divider />

            <ListItem id ="3" disabled>🔚 Logout</ListItem>
          </List>
        )}
        <Button
          onClick={this.handleClick}
          active={this.state.open}
          style={{ fontWeight: "bold" }}
        >
          <span
            // className={baseClass}
            style={{ display: "inline-block", height: "22px" }}
          >
            <img src={logoIMG} style={{ height: "100%", width: "auto" }} />
          </span>
          Start
        </Button>
      </div>
    );
  }
}
