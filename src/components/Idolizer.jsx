import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";

import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import ShuffleIcon from "@material-ui/icons/Shuffle";

import { getIdol } from "../utils/Randomizer";

/******************************************************************************/

/* CSS Styles */
const container = {
  height: "100vh",
  maxHeight: "100vh",
  overflow: "hidden",
  position: "relative"
};

const image = {
  border: "1px solid black",
  height: "45vh",
  // width: "45vh",
  marginTop: "20vh"
};

const imageFullscreen = {
  height: "100%",
  width: "100%"
};

const name = {
  marginTop: 15
};

const fabFullscreen = {
  position: "absolute",
  bottom: "16px",
  right: "16px",
  backgroundColor: "#BBB",
  color: "white",
  fontSize: "16px",
  padding: "12px 24px",
  border: "none",
  cursor: "pointer"
};

const fabShuffle = {
  position: "absolute",
  bottom: "16px",
  right: "80px",
  backgroundColor: "#BBB",
  color: "white",
  fontSize: "16px",
  padding: "12px 24px",
  border: "none",
  cursor: "pointer"
};

/******************************************************************************/

/* Class implementation */
export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { idol: getIdol(), fullscreen: false };
    console.log("Starting the editor");

    // Bind functions
    this.handleClickFullscreen = this.handleClickFullscreen.bind(this);
    this.handleClickShuffle = this.handleClickShuffle.bind(this);
  }

  /* Button callbacks */
  handleClickFullscreen() {
    this.setState({ fullscreen: !this.state.fullscreen });
  }

  handleClickShuffle() {
    this.setState({ idol: getIdol() });
  }

  render() {
    const idol = this.state.idol;
    const imageStyle = this.state.fullscreen ? imageFullscreen : image;
    return (
      <div style={container}>
        <img src={idol.image} alt="idol" style={imageStyle} />

        <Typography variant="h6" color="inherit" style={name}>
          {idol.name}
        </Typography>

        <Fab
          color="primary"
          style={fabShuffle}
          onClick={this.handleClickShuffle}
        >
          <ShuffleIcon />
        </Fab>

        <Fab
          color="primary"
          style={fabFullscreen}
          onClick={this.handleClickFullscreen}
        >
          {this.state.fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </Fab>
      </div>
    );
  }
}
