import Link from "next/link";
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

const open = true;

const MyMenu = () => (
  <div style={{ position: "relative", display: "inline-block" }}>
    {open && (
      <List
        horizontalAlign="left"
        verticalAlign="bottom"
        open={open}
       // onClick={handleClose}
      >
        <ListItem>👨‍💻 Profivfle</ListItem>

        <ListItem>📁 My account</ListItem>

        <Divider />

        <ListItem disabled>🔙 Logout</ListItem>
      </List>
    )}
    {/* <Button active={open} style={{ fontWeight: "bold" }}>
      <LogoIcon style={{ marginLeft: -2, marginRight: 4 }} />
      Start
    </Button> */}
  </div>
);

export default MyMenu;
