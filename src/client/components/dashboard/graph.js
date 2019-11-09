import React from 'react'
// import CanvasJSReact from "../../canvas/canvasjs.react";
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import {Chart} from 'react-google-charts';

// const Graph = () => {
//   const options = {
//     title: {
//     },
//     animationEnabled: true,
// 	exportEnabled: true,
// 	theme: "light2",
//     dataPointWidth: 30,
//     data: [
//       {
//         // Change type to "doughnut", "line", "splineArea", etc.
//         type: "column",
       
//         dataPoints: [
//           { label: "Kisumu Sacco", y: 4 },
//           { label: "Kondele sacco", y: 5 },
//           { label: "Makoma Sacco", y: 3 },
//           { label: "Kikomi Sacco", y: 8 },
//           { label: "Kwetu sacco", y: 12 }
//         ]
//       }
//     ]
//   };

//   return (
//     <div>
//       <CanvasJSChart
//         options={options}
//       />
//       {/* You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods */}
//     </div>
//   );
// };

// export default Graph;
const Graph = ()=>(

<Chart
  width={'500px'}
  height={'400px'}
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={[
    ['Sacco', 'Kondele sacco', 'Kubuntu sacco', 'Makoma sacco', 'Nyalenda sacco', "Great Sacco"],
    [' ', 3, 4, 6, 8, 2]

  ]}
  options={{
    // Material design options
    chart: {
     
    },
  }}
  // For tests
  rootProps={{ 'data-testid': '2' }}
/>

)
export default Graph;