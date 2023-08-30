import {scroller} from "react-scroll";
import {LinkData} from "../../data/data";

export const scrollToElement = (element: string) => {
  scroller.scrollTo(element, {
    duration: scrollDuration,
    smooth: scrollSmooth,
    offset: scrollOffset
  });
};

export const scroll = (element: LinkData, handlerFunction: () => void | undefined) => {
  return () => {
    if (handlerFunction !== undefined) {
      handlerFunction();
    }
    scrollToElement(element.id);
  }
};

const scrollDuration: number = 500
const scrollSmooth: boolean = true
const scrollOffset: number = -100