import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";

import FullscreenIcon from "@material-ui/icons/Fullscreen"
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit"

import { getIdol } from "../utils/Randomizer";

/******************************************************************************/

/* CSS Styles */
const container = {
  height: "100vh",
  maxHeight: "100vh",
  overflow: "hidden",
  position: "relative"
}

const image = {
  border: "1px solid black",
  marginTop: 200
};

const imageFullscreen = {
  height: "100%",
  width: "100%",
};

const name = {
  marginTop: 15
};

const fabFullscreen = {
  position: "absolute",
  bottom: "12px",
  right: "16px",
  backgroundColor: "#AAA",
  color: "white",
  fontSize: "16px",
  padding: "12px 24px",
  border: "none",
  cursor: "pointer",
}

/******************************************************************************/

/* Class implementation */
export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { idol: "", fullscreen: false };

    // Bind functions
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ fullscreen: !this.state.fullscreen })
  }

  render() {
    const idol = getIdol();
    const imageStyle = this.state.fullscreen ? imageFullscreen : image;
    return (
      <div style={container}>
        <img src={idol} alt="idol" style={imageStyle} />

        <Typography variant="h6" color="inherit" style={name}>
          Zezinho
        </Typography>

        <Fab color="primary" style={fabFullscreen} onClick={this.handleClick}>
          { this.state.fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </Fab>
      </div>
    );
  }
}
