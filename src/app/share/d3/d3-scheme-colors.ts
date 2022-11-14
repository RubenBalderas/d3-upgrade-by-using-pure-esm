import {
  interpolateTurbo,
  interpolateBlues,
} from "d3-scale-chromatic";

export class D3SchemeColors {
  public interpolateColors(
    dataLength: number,
    interpolateColorType: InterpolateColor | MonochromaticColor,
    colorRangeInfo: {
      colorStart: number;
      colorEnd: number;
      useEndAsStart: boolean;
    },
    colorType?: "interpolate" | "monochromatic"
  ) {
    const { colorStart, colorEnd } = colorRangeInfo;
    const colorRange = colorEnd - colorStart;
    const intervalSize = colorRange / dataLength;
    let colorPoint;
    const colorArray = [];

    for (let i = 0; i < dataLength; i++) {
      colorPoint = this.calculatePoint(i, intervalSize, colorRangeInfo);
      colorArray.push(
        this.sequentialColor(
          interpolateColorType,
          colorPoint,
          colorType || "interpolate"
        )
      );
    }

    return colorArray;
  }

  private calculatePoint(i: number, intervalSize: number, colorRangeInfo: any) {
    const { colorStart, colorEnd, useEndAsStart } = colorRangeInfo;
    return useEndAsStart
      ? colorEnd - i * intervalSize
      : colorStart + i * intervalSize;
  }

  public sequentialColor(
    interpolateColorType: InterpolateColor | MonochromaticColor,
    colorPoint: number,
    colorType: "interpolate" | "monochromatic"
  ) {
    // Refer this https://github.com/d3/d3-scale-chromatic
    if (colorType === "interpolate") {
      switch (interpolateColorType) {
        case InterpolateColor.InterpolateTurbo:
          return interpolateTurbo(colorPoint);
        case InterpolateColor.InterpolateBlues:
          return interpolateBlues(colorPoint);
        default:
          break;
      }
    } else {
      switch (interpolateColorType) {
        case MonochromaticColor.InterpolateBlues:
          return interpolateBlues(colorPoint);
        default:
          break;
      }
    }
  }
}

export enum InterpolateColor {
  None = 0,
  InterpolateTurbo = 1,
  InterpolateCool = 2,
  InterpolateBlues = 3,
}
export enum MonochromaticColor {
  None = 0,
  InterpolateBlues = 1,
  InterpolateGreens = 2,
  InterpolateGreys = 3,
  InterpolateOranges = 4,
  InterpolatePurples = 5,
  InterpolateReds = 6,
}
