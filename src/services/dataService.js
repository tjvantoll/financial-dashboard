export function getPositions() {
  return fetch("https://telerik.github.io/kendo-react-finance-portfolio/data/tech-symbols.json")
    .then(response => response.json());
}
