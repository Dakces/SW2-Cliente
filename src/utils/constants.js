import { Line, HorizontalBar, Radar, Bar } from "react-chartjs-2";

export const typeLine = "line";
export const typeHorizontalBar = "horizontalBar";
export const typeBar = "bar";
export const typeRadar = "radar";

export const GRAPH_TYPES = {
  [typeLine]: Line,
  [typeHorizontalBar]: HorizontalBar,
  [typeBar]: Bar,
  [typeRadar]: Radar
};

export function optionsForGraphic(type, graphicId, currency) {
  switch (type) {
    case typeHorizontal: {
      return horizontalGraphicOptions(graphicId, currency);
    }
    case typeRadar: {
      return radarGraphicOptions(graphicId, currency);
    }
    case typeBar: {
      return barGraphicOptions(graphicId, currency);
    }
    default: {
      return [];
    }
  }
}


export function optionsForGraphic(type, graphicId, currency) {
    switch (type) {
      case graphicRadar: {
        return graphicRadarOptions(graphicId, currency);
      }
      case graphicLine: {
        return graphicOptionsLine(graphicId, currency);
      }
      default: {
        return {};
      }
    }
  }
  