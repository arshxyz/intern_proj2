import { Grid, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  leftColumn: {
    marginLeft: "6rem",
    "& div": {
      textAlign: "left",
    },
    [theme.breakpoints.down("md")]: {
      margin: "0 0 0 1rem",
      padding: "0 0 6rem 0",
    },
  },
  mainBanner: {
    padding: "50px 10px 0 25px",
  },
  customBtn: {
    backgroundColor: "#00dbd0",
    display: "block",
    padding: "0 2rem 0 2rem",
    height: "3rem",
    color: "white",
    borderRadius: "8px",
    fontWeight: "700",
    "&:hover": {
      backgroundColor: "#00dba1",
    },
  },
  rightImage: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },

    // position: "absolute",
  },
  overlaplogo: {
    width: "350px",
    height: "350px",
    position: "absolute",
    transform: "translate(-200px)",
    // zIndex: "-1",
    border: "3px solid #00dbd0",
  },
}));

export const Jumbotron = () => {
  const classes = useStyles();
  return (
    <Grid container justify={"flex-start"} className={classes.mainBanner}>
      <Grid
        item
        sm={false}
        md={5}
        className={classes.leftColumn}
        alignContent={"flex-start"}
      >
        <div>
          <p>fdfd</p>
          <p>fdfd dddddddddd</p>
          <p>fdfd ddddddddddfffffffffffffffffffffffff</p>
          <Button className={classes.customBtn}> Explore Now </Button>
        </div>
      </Grid>
      <Grid item className={classes.rightImage}>
        <img
          src="/flower.png"
          style={{ zIndex: "1", position: "relative" }}
        ></img>
        <img src="/organic.png" className={classes.overlaplogo} />
      </Grid>
    </Grid>
  );
};
