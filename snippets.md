```css
.panels {
    display: grid;
}
```

```css
.panels > div {
    border: 1px solid black;
}
```

```css
grid-template-columns: auto auto;
grid-template-rows: auto auto;
```

```css
.panel-info {
  grid-row: span 2;
}
```

``` css
.panel-positions {
  grid-column: span 2;
}
```

## dash1

``` css
@media (max-width: 750px) {
  .panels {
    grid-template-columns: 225px auto;
    grid-template-rows: auto auto auto;
  }
  .panel-positions {
    grid-column: span 2;
  }
}

@media (max-width: 500px) {
  .panels {
    grid-template-columns: auto;
  }
  .panel-positions {
    grid-column: span 1;
  }
}
```

## dash2

``` html
  const [fundInfo, setFundInfo] = React.useState<FundInfo>();
  React.useEffect(() => {
    getFundInfo().then((data: FundInfo) => {
      setFundInfo(data);
    });
  }, []);
```

``` html
<PanelBar>
    <PanelBarItem expanded={true} title="Fund Managers">
    {fundInfo && fundInfo.managers.map((item, idx) => (
        <div>{item.firstName}</div>
    ))}
    </PanelBarItem>
    <PanelBarItem title="Fund Details">

    </PanelBarItem>
</PanelBar>
```

## dash3

``` html
<div className="manager" key={idx}>
  <img src={`/team/${item.firstName}${item.lastName}.png`}
    alt={item.firstName + ' ' + item.lastName} />
  <span className="manager-info">
    <h2>{item.firstName + ' ' + item.lastName}</h2>
    <p>{item.position}</p>
  </span>
</div>
```

``` html
{fundInfo && fundInfo.quarters.map((quarter, idx) => (
    <PanelBarItem title={quarter.title} key={idx}>
        foo
    </PanelBarItem>
))}
```

## dash4

``` html
<ul className="fund-detail-list">
    {quarter.details.map((detail, index) => (
        <li key={index}>
        <span>{detail.name}:</span>
        <span>{detail.value}</span>
        </li>
    ))}
</ul>
```

## dash5

``` TypeScript
const [data, setData] = React.useState<Allocation[]>();
React.useEffect(() => {
  getFundAllocation().then((data: Allocation[]) => {
    setData(data);
  })
}, []);
```

```
<Chart>
    <ChartTitle text={"Asset Allocation"}></ChartTitle>
    <ChartSeries>
    <ChartSeriesItem type="donut" data={data}>
        
    </ChartSeriesItem>
    </ChartSeries>
</Chart>
```

``` XML
<ChartSeriesLabels content={renderLabel}></ChartSeriesLabels>
```

``` TypeScript
const renderLabel = (e: any) => {
  return e.value + "%";
}
```

``` XML
<ChartLegend position="bottom"></ChartLegend>
```

## dash7

``` TypeScript
const [data, setData] = React.useState<string[]>();
React.useEffect(() => {
    getPerformance().then((results: string[]) => {
        setData(results);
    })
}, []);
```

## dash8

``` XML
<Chart>
  <ChartTitle text="Fund Performance" />
  <ChartCategoryAxis>
    <ChartCategoryAxisItem categories={["2014", "2015", "2016", "2017", "2018", "2019", "2020"]} />
  </ChartCategoryAxis>
  <ChartSeries>
    <ChartSeriesItem type="line" data={data} />
  </ChartSeries>
  <ChartTooltip render={renderTooltip} />
</Chart>
```

## dash9

``` TypeScript
const renderTooltip = (e: any) => {
  return (
    <div>
      {e.point ?
        "$" + e.point.value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : ""}
    </div>
  );
};
```

## dash10

``` TypeScript
React.useEffect(() => {
  getPositions().then((data: Position[]) => {
    setPositions(data);
  });
}, []);
```

## dash11

``` TypeScript
<Grid
  data={positions}
  style={{ height: 700 }}
>
  <GridColumn title="Symbol" field="symbol" locked={true} width={100} />
  <GridColumn title="Name" field="name" />
  <GridColumn title="Change" field="day_change" cell={ChangeCell} />
  <GridColumn title="% Change" field="change_pct" cell={ChangeCell} />
  <GridColumn title="Volume" field="volume" cell={NumberCell} />
  <GridColumn title="Market Cap" field="market_cap" cell={NumberCell} />
</Grid>
```

```
cell={ChangeCell}
```

``` TypeScript
const ChangeCell = (props: GridCellProps) => {
  return (
    <td>hi</td>
  )
}
```

``` TypeScript
const ChangeCell = (props: GridCellProps) => {
  const value = props.dataItem[props.field || ""];
  return (
    <td>
      {value}
    </td>
  )
}
```

``` HTML
<td className={value > 0 ? "change-up" : "change-down"}>
    {value}%
</td>
```

## dash12

``` TypeScript
const NumberCell = (props: GridCellProps) => {
  const field = props.field || "";
  const startingValue = props.dataItem[field];
  let finalValue;

  if (startingValue > 1000000) {
    finalValue = (startingValue / 1000000).toFixed(2) + "M";
  }
  if (startingValue > 1000000000) {
    finalValue = (startingValue / 1000000000).toFixed(2) + "M";
  }

  return <td>{finalValue}</td>
}
```


