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
    margin: "0 20% 0 auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },

  },
  overlaplogo: {
    width: "350px",
    height: "350px",
    position: "absolute",
    transform: "translate(-200px)",
    border: "3px solid #00dbd0",
  },

  infoHeading: {
    fontSize: "30px",
  },
  mainHeading: {
    fontSize: "48px",
    fontWeight: "700",
    padding: "0 0 1rem 0"
  },
  mainContent: {
    fontSize: "20px",
    padding: "1rem 0"
  },
}));

export const Jumbotron = () => {
  const classes = useStyles();
  return (
    <Grid container justify={"flex-start"} className={classes.mainBanner}>
      <Grid
        item
        sm={false}
        md={4}
        className={classes.leftColumn}
        alignContent={"flex-start"}
      >
        <div className={classes.mainBanner}>
          <div className={classes.infoHeading}>Healthy life with</div>
          <div className={classes.mainHeading}>Nature Organic</div>
          <div className={classes.mainContent}>Vegetables are the edible parts of a plant
            that is used in cooking or can be eaten now.</div>
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
