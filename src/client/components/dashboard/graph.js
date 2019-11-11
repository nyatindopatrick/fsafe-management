import React, { useState, useEffect } from "react";
import Data from "./data.json";
// // import CanvasJSReact from "../../canvas/canvasjs.react";
// // var CanvasJS = CanvasJSReact.CanvasJS;
// // var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// import {Chart} from 'react-google-charts';

// // const Graph = () => {
// //   const options = {
// //     title: {
// //     },
// //     animationEnabled: true,
// // 	exportEnabled: true,
// // 	theme: "light2",
// //     dataPointWidth: 30,
// //     data: [
// //       {
// //         // Change type to "doughnut", "line", "splineArea", etc.
// //         type: "column",

// //         dataPoints: [
// //           { label: "Kisumu Sacco", y: 4 },
// //           { label: "Kondele sacco", y: 5 },
// //           { label: "Makoma Sacco", y: 3 },
// //           { label: "Kikomi Sacco", y: 8 },
// //           { label: "Kwetu sacco", y: 12 }
// //         ]
// //       }
// //     ]
// //   };

// //   return (
// //     <div>
// //       <CanvasJSChart
// //         options={options}
// //       />
// //       {/* You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods */}
// //     </div>
// //   );
// // };

// // export default Graph;
// const Graph = ()=>(

// <Chart
//   width={'500px'}
//   height={'400px'}
//   chartType="Bar"
//   loader={<div>Loading Chart</div>}
//   data={[
//     ['Sacco', 'Kondele sacco', 'Kubuntu sacco', 'Makoma sacco', 'Nyalenda sacco', "Great Sacco"],
//     [' ', 3, 4, 6, 8, 2]

//   ]}
//   options={{
//     // Material design options
//     chart: {

//     },
//   }}
//   // For tests
//   rootProps={{ 'data-testid': '2' }}
// />

// )
// export default Graph;

function compareNumbers(a, b) {
  return a - b;
}

const App = () => {
  const [datas, getData] = useState(null);

  useEffect(() => {
    populateArray();
    setInterval(populateArray, 2000);
  }, [datas]);

  const populateArray = () => {
    getData(Data);
  };

  const series = [];
  const labels = () => {
    const arr = [];
    datas &&
      datas.map(label => {
        arr.push(label.sacco);
      });
    return arr;
  };
  console.log(labels());
  const colors = ["#43A19E", "#7B43A1", "#F2317A", "#FF9824", "#58CF6C"];
  const data = () => {
    const dataList = [];
    datas &&
      datas.map(item => {
        dataList.push(item.reports);
      });
    return dataList;
  };

  return (
    <section>
      <Charts data={[data()]} labels={series} colors={colors} height={250} />
      <Legend labels={labels()} colors={colors} />
    </section>
  );
};

const Legend = props => {
  var labels = props.labels,
    colors = props.colors;

  return (
    <div className="Legend">
      {labels.map(function(label, labelIndex) {
        return (
          <div>
            <span
              className="Legend--color"
              style={{ backgroundColor: colors[labelIndex % colors.length] }}
            />
            <span className="Legend--label">{label}</span>
          </div>
        );
      })}
    </div>
  );
};

const Charts = props => {
  const data = props.data;
  const layered = props.grouping === "layered" ? true : false;
  const stacked = props.grouping === "stacked" ? true : false;
  const opaque = props.opaque;
  let max = 0;

  for (var i = data.length; i--; ) {
    for (var j = data[i].length; j--; ) {
      if (data[i][j] > max) {
        max = data[i][j];
      }
    }
  }

  return (
    <div className={"Charts" + (props.horizontal ? " horizontal" : "")}>
      {data &&
        data.map(function(serie, serieIndex) {
          var sortedSerie = serie.slice(0),
            sum;

          sum = serie.reduce(function(carry, current) {
            return carry + current;
          }, 0);
          sortedSerie.sort(compareNumbers);

          return (
            <div
              className={"Charts--serie " + props.grouping}
              key={serieIndex}
              style={{ height: props.height ? props.height : "auto" }}
            >
              <label>{props.labels[serieIndex]}</label>
              {serie.map(function(item, itemIndex) {
                var color = props.colors[itemIndex],
                  style,
                  size = (item / (stacked ? sum : max)) * 100;

                style = {
                  backgroundColor: color,
                  opacity: opaque ? 1 : item / max + 0.05,
                  zIndex: item
                };

                if (props.horizontal) {
                  style["width"] = size + "%";
                } else {
                  style["height"] = size + "%";
                }

                if (layered && !props.horizontal) {
                  //console.log(sortedSerie, serie, sortedSerie.indexOf(item));
                  style["right"] =
                    (sortedSerie.indexOf(item) / (serie.length + 1)) * 100 +
                    "%";
                  // style['left'] = (itemIndex * 10) + '%';
                }

                return (
                  <div
                    className={"Charts--item " + props.grouping}
                    style={style}
                    key={itemIndex}
                  >
                    <b style={{ color: color }}>{item}</b>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default App;
