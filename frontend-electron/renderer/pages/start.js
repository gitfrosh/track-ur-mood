import styled from "styled-components";
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
  LogoIcon,
  ListItem,
  Divider
} from "react95";
import MyMenu from '../components/menu'

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const open = true;

export default () => (
  <div className="App">
    <ResetStyles />
    <ThemeProvider theme={themes.default}>
      <AppBar>
        <Toolbar style={{ justifyContent: "space-between" }}>
        <MyMenu />

          <TextField
            placeholder="Search..."
            width={150}
            style={{ marginLeft: 4 }}
          />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  </div>
);
