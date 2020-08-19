const red = 'color: red;font-weight:bold';
const blue = 'color: blue;';

const displayError = (path: string, code: number) => {
  console.log(`%cSomething went wrong with the API call to %c${path}%c. Error code: %c${code}`, blue, red, blue, red);
}

export function getFundInfo(): Promise<any> {
  return fetch("https://demoapis.com/sample/finance/info")
    .then(response => response.json());
}

export async function getFundAllocation(): Promise<any> {
  const response = await fetch("https://demoapis.com/sample/finance/allocation");

  if (response.ok) {
    return response.json();
  }

  displayError('finance/allocation', response.status);
}

export function getPerformance(): Promise<any> {
  return fetch("https://demoapis.com/sample/finance/performance")
    .then(response => response.json());
}

export function getPositions(): Promise<any> {
  return fetch("https://demoapis.com/sample/finance/positions")
    .then(response => response.json());
}
