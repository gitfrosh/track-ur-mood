import styled from "styled-components";
import React, { Component } from "react";
import moment from "moment";
import fetch from "isomorphic-unfetch";
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
import fetchData from "../api";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const today = moment().format("YYYY-MM-DD");

export default class App extends Component {
  state = {
    mood: 0,
    menu: 0,
    today: today
  };

  // static async getInitialProps() {
  //   // const json = await res.json();
  //   // return { stars: json.stargazers_count };
  // }

  async componentWillMount() {
    try {
      const mood = await fetchData();
      this.setState({
        mood: mood,
        menu: 0
      });
    } catch (e) {
      console.log(e);
    }
  }

  setMenu = id => {
    this.setState({
      menu: parseInt(id)
    });
  };

  render() {
    const { menu, mood, today } = this.state;
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
            <Main menu={menu} mood={mood} today={today} />
          </>
        </ThemeProvider>
      </div>
    );
  }
}
