import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  ExitToApp,
  People,
  Business,
  History,
  CropDin,
  AllInbox,
  Equalizer,
} from "@material-ui/icons";
import { Link, Redirect } from "react-router-dom";
import { useUser } from "../Context/user-context";
const drawerWidth = 240;

const items = [
  {
    text: "Usuarios",
    icon: <People />,
    ruta: "/usuarios",
  },
  {
    text: "Empresas",
    icon: <Business />,
    ruta: "/empresas",
  },
  {
    text: "Areas",
    icon: <CropDin />,
    ruta: "/areas",
  },
  {
    text: "Estaciones",
    icon: <AllInbox />,
    ruta: "/estaciones",
  },
  {
    text: "Graficas",
    icon: <Equalizer />,
    ruta: "/graficas",
  },
  {
    text: "Historial",
    icon: <History />,
    ruta: "/historial",
  },
];
const cliente = [
  {
    text: "Historial",
    icon: <People />,
    ruta: "/Cliente",
  },
];

export default function Layout({ children }) {
  const classes = useStyles();
  const { logOut, isCliente } = useUser();
  const handleLogOut = () => {
    logOut();
  };
  if (isCliente) {
    return <Redirect to="Cliente" />;
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Sistema de Revision de Trampas
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {isCliente ? (
            <>
              {cliente.map((item, index) => (
                <Link key={index} to={item.ruta}>
                  <ListItem button>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                </Link>
              ))}
            </>
          ) : (
            <>
              {items.map((item, index) => (
                <Link key={index} to={item.ruta}>
                  <ListItem button>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                </Link>
              ))}
            </>
          )}
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText onClick={handleLogOut} primary="Salir" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
