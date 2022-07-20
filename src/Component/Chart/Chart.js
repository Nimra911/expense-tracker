import React from 'react';
import './Chart.css';
import CharBar from '../Chart/ChartBar';
const Chart = (props) => {
    console.log('datapoints');
    console.log(props.dataPoints)
    const DataPointsValues = props.dataPoints.map(dataPoint=> dataPoint.value)
    const totalMax = Math.max(...DataPointsValues);
        
    

  
  return (
    <div className="chart">
        {
            props.dataPoints.map(datapoint=>
                (
                    <CharBar
                     value ={datapoint.value}
                     maxValue = {totalMax}
                     label={datapoint.label}
                     key ={datapoint.label}
                     />
                ))
        }

    </div>
  
  )
}

export default Chart
