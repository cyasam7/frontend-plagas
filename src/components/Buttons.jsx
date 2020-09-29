import { withStyles, Button } from "@material-ui/core";
import { red, yellow, green } from "@material-ui/core/colors";

export const ErrorButton = withStyles((theme) => ({
  root: {
    color: "#fff",
    margin: 5,
    backgroundColor: red[400],
    "&:hover": {
      backgroundColor: red[700],
    },
  },
}))(Button);

export const WarningButton = withStyles((theme) => ({
  root: {
    color: "#fff",
    margin: 5,
    backgroundColor: yellow[600],
    "&:hover": {
      backgroundColor: yellow[700],
    },
  },
}))(Button);
export const SuccessButton = withStyles((theme) => ({
  root: {
    color: "#fff",
    margin: 5,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);
