import React, { useState, useEffect } from 'react';
import Data from './data.json';

function compareNumbers(a, b) {
  return a - b;
}

const App = () => {
  const [datas, getData] = useState(null);
  const [data, setData] = useState([]);
  const [labels, setLabel] = useState(null);

  useEffect(() => {
    populateArray();
    // const refresh = setInterval(populateArray, 2000);
    // return () => {
    //   clearInterval(refresh);
    // };
  }, [datas]);

  const populateArray = () => {
    const arr = [];
    const reprts = [];
    Data.map(label => {
      arr.push(label.sacco);
      reprts.push(label.reports);
    });
    getData(Data);
    setLabel(arr);
    setData(reprts);
  };

  const series = [];

  console.log(labels);
  const colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'];
  return (
    <section>
      <Charts data={[data]} labels={series} colors={colors} horizontal={true} />
      <Legend labels={labels} colors={colors} />
    </section>
  );
};

const Legend = props => {
  var labels = props.labels,
    colors = props.colors;

  return (
    <div className='Legend'>
      {labels &&
        labels.map(function(label, labelIndex) {
          return (
            <div>
              <span
                className='Legend--color'
                style={{ backgroundColor: colors[labelIndex % colors.length] }}
              />
              <span className='Legend--label'>{label}</span>
            </div>
          );
        })}
    </div>
  );
};

const Charts = props => {
  const data = props.data;
  const layered = props.grouping === 'layered' ? true : false;
  const stacked = props.grouping === 'stacked' ? true : false;
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
    <div className={'Charts' + (props.horizontal ? ' horizontal' : '')}>
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
              className={'Charts--serie ' + props.grouping}
              key={serieIndex}
              style={{ height: props.height ? props.height : 'auto' }}
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
                  style['width'] = size + '%';
                } else {
                  style['height'] = size + '%';
                }

                if (layered && !props.horizontal) {
                  //console.log(sortedSerie, serie, sortedSerie.indexOf(item));
                  style['right'] =
                    (sortedSerie.indexOf(item) / (serie.length + 1)) * 100 +
                    '%';
                  // style['left'] = (itemIndex * 10) + '%';
                }

                return (
                  <div
                    className={'Charts--item ' + props.grouping}
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
