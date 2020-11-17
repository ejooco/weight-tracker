import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from 'axios';

function ChartTwo () {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/weight-tracker-entries/')
        .then(res => {
            console.log(res)
            setChartData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const chartParams = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: chartData.map(item => item.date)
        }
      },
      series: [
        {
          name: "series-1",
          data: chartData.map(item => item.weight)
        }
      ]
    };
  

    return (
        <>
        <Chart
              options={chartParams.options}
              series={chartParams.series}
              type="line"
              width="500"
        />
        </>
    );

}

export default ChartTwo;
