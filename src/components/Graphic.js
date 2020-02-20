import React, { Component } from "react";

class Graphic extends Component {
  render() {
    const Graphic = type && GRAPH_TYPES[type];
    return (
      <Graphic
        data={data}
        width={width}
        height={height}
        options={optionsByGraphic(type, data.id)}
      />
    );
  }
}

export default Graphic;
