export function getFundInfo(): Promise<any> {
  return fetch("https://demoapis.com/sample/finance/info")
    .then(response => response.json());
}

export function getFundAllocation(): Promise<any> {
  return fetch("https://demoapis.com/sample/finance/allocation?counter=5")
    .then(response => response.json());
}

export function getPerformance(): Promise<any> {
  return fetch("https://demoapis.com/sample/finance/performance")
    .then(response => response.json());
}

export function getPositions(): Promise<any> {
  return fetch("https://demoapis.com/sample/finance/positions")
    .then(response => response.json());
}
