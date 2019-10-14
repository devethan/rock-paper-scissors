import React, { useState } from "react";
import { Box, Grid, Button } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const commonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
};

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1
  },
  contentWrapper: {
    ...commonStyle
  },
  container: {
    width: 360
    // height: "50vh"
  },
  middleContainer: {
    ...commonStyle,
    width: 360,
    height: "40vh",
    color: theme.palette.common.white,
    border: "1px solid white"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.common.white,
    border: "1px solid white"
  }
}));

export const ModalContainer = () => {
  const classes = useStyles();
  const [view, setView] = useState(false);
  const matches = useMediaQuery("(min-width:375px)");
  return (
    <Box flexGrow className={classes.contentWrapper}>
      {!matches ? (
        <Box className={classes.paper}>화면이 좀 더 넓은 기기가 필요해요.</Box>
      ) : (
        <>
          <Button className={classes.paper} onClick={() => setView(!view)}>
            Switch
          </Button>
          {view ? <ModalBox /> : <ContentBox />}
        </>
      )}
    </Box>
  );
};

const ContentBox = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid container>
        <Grid item xs>
          <Box className={classes.paper}>1</Box>
        </Grid>
        <Grid item xs>
          <Box className={classes.paper}>2</Box>
        </Grid>
        <Grid item xs>
          <Box className={classes.paper}>3</Box>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.middleContainer}>
        <Box>123</Box>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Box className={classes.paper}>1</Box>
        </Grid>
        <Grid item xs>
          <Box className={classes.paper}>2</Box>
        </Grid>
        <Grid item xs>
          <Box className={classes.paper}>3</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ModalBox = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:375px)");
  return (
    <Grid container className={classes.container}>
      <Grid item xs>
        <Box className={classes.paper}>Modal Container</Box>
        <Box
          className={classes.paper}
        >{`(min-width:375px) matches: ${matches}`}</Box>
      </Grid>
    </Grid>
  );
};
