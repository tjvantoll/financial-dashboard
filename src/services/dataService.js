import { info } from "../data/info";
import { allocation } from "../data/allocation";
import { performance } from "../data/performance";
import { positions } from "../data/positions";

function getRandomDelay() {
  // return 0;
  return 500 + (Math.random() * 2000);
  // return 9999999999;
}

export function getFundInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(info);
    }, getRandomDelay());
  })
}

export function getFundAllocation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allocation);
    }, getRandomDelay());
  });
}

export function getPerformance() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(performance);
    }, getRandomDelay());
  })
}

export function getPositions() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(positions);
    }, getRandomDelay());
  });
}
