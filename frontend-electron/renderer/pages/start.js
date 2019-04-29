import styled from "styled-components";
import React, { Component } from "react";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import {
  reset,
  themes,
  List,
  Button,
  AppBar,
  Toolbar,
  Menu,
  TextField,
  Logo,
  ListItem,
  Divider
} from "react95";
import MyMenu from "../components/menu";
import Main from "../components/main";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

export default class App extends Component {
  componentWillMount() {
    this.setState({
      //images: this.props.images
      menu: 0
    });
  }
  
  setMenu = (id) => {
    this.setState({
      menu: parseInt(id)
    });
  }
  
  render() {
    const { menu } = this.state;
    return (
      <div className="App">
        <ResetStyles />
        <ThemeProvider theme={themes.default}>
          <>
            <AppBar style={{ zIndex: 100 }}>
              <Toolbar style={{ justifyContent: "space-between" }}>
                <MyMenu menu={this.state.menu} setMenu={this.setMenu} />

                <TextField
                  placeholder="Search..."
                  width={150}
                  style={{ marginLeft: 4 }}
                />
              </Toolbar>
            </AppBar>
            <Main menu={this.state.menu} />
          </>
        </ThemeProvider>
      </div>
    );
  }
}
