import { info } from "../data/info";
import { allocation } from "../data/allocation";
import { performance } from "../data/performance";
import { positions } from "../data/positions";

const DELAY_MS = 0;

export function getFundInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(info);
    }, DELAY_MS);
  })
}

export function getFundAllocation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allocation);
    }, DELAY_MS);
  });
}

export function getPerformance() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(performance);
    }, DELAY_MS);
  })
}

export function getPositions() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(positions);
    }, DELAY_MS);
  });
}
