import AppBar from "@material-ui/core/AppBar";
import { makeStyles, IconButton, MenuItem, Menu } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { useState } from "react";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  logo: {
    padding: "1rem",
    marginLeft: "5rem",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  desktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  listItems: {
    listStyleType: "none",
    display: "inline",
    "& li": {
      display: "inline",
      padding: "1.5rem",
      fontSize: "large",
      lineHeight: "0.5rem",
      "&:hover": {
        color: "#525252",
        transition: "0.5s",
      },
    },
  },
  contact: {
    border: "3px solid #00dbd0",
    borderRadius: "25px",
  },
  mobile: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const BrandLogo = () => <img src="/organic.png" className={classes.logo} />;
  const rightItems = ["Home", "Products", "Blog", "About Us"];
  return (
    <AppBar color="transparent" elevation={0} position={"static"}>
      <Toolbar>
        <BrandLogo />
        <h1>organic</h1>
        <div className={classes.grow} />
        <div className={classes.desktop}>
          <ul className={classes.listItems}>
            {rightItems.map((item) => (
              <li>{item}</li>
            ))}
            <li className={classes.contact}>Contact</li>
          </ul>
        </div>
        <div className={classes.mobile}>
          <IconButton onClick={handleClick}>
            <MoreIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {rightItems.map((item) => (
              <MenuItem onClick={handleClose}>{item}</MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};
