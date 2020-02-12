import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { getIdol } from "../utils/Randomizer";

/******************************************************************************/

/* CSS Styles */
const image = {
  border: "1px solid black"
};

const name = {
  marginTop: 15
};

/******************************************************************************/

/* Class implementation */
export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { idol: "" };

    // Bind functions
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const idol = getIdol();
    return (
      <div
        style={{
          height: "100vh",
          maxHeight: "100vh",
          overflow: "hidden",
          marginTop: 200
        }}
      >
        {/* <img src={idol} className="App-logo" alt="logo" /> */}
        <img src={idol} alt="smile" style={image} />

        <Typography variant="h6" color="inherit" style={name}>
          Zezinho
        </Typography>

        <Button color="inherit" onClick={this.handleClick}>
          Fullscreen
        </Button>
      </div>
    );
  }
}
