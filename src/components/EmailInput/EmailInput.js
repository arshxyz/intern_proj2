import { InputBase, makeStyles, Button, Grid } from "@material-ui/core";
import "./Input.css";

const useStyles = makeStyles((theme) => ({
  emailInput: {
    width: "25vw",
    // padding: "0 0 3rem 0",
    marginRight: "0",
    [theme.breakpoints.down("md")]: {
      width: "60vw",
    },
  },
  customBtn: {
    backgroundColor: "#00dbd0",
    display: "block",
    padding: "0 2rem 0 2rem",
    height: "3rem",
    color: "white",
    borderRadius: "20px",
    fontWeight: "700",
    "&:hover": {
      backgroundColor: "#00dba1",
    },
  },
  emailContainer: {
    padding: "3rem",
  },
}));

export const EmailInput = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" wrap className={classes.emailContainer}>
      <Grid item sm="12" md="4">
        <InputBase
          className={classes.emailInput}
          placeholder="Email address"
          // inputProps={{ 'aria-label': 'naked' }}
        />
      </Grid>
      <Grid item>
        <Button className={classes.customBtn}>Subscribe</Button>
      </Grid>
    </Grid>
  );
};
