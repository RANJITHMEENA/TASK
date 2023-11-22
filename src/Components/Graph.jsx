import React from 'react';
import Chart from 'react-apexcharts';

const LineGraph = ({data}) => {
    console.log(data?.hourly?.temperature_2m?.slice(0, 5))
    const options = {
    chart: {
      id: 'line-chart',
    },
    xaxis: {
      categories:data?.hourly?.time.slice(0, 5) ,
      title: {
        text: 'Date',
      },
    },
    yaxis: {
      title: {
        text: `Wind speed ${data?.current_units?.wind_speed_10m}`,
      },
    },
  };

  const series = [
    {
      name: 'Wind Speed',
      data:data?.hourly?.wind_speed_10m?.slice(0, 5),
    },
  ];

  return (
    <div>
{data &&      <Chart options={options} series={series} type="line" height={350} />
}    </div>
  );
};

export default LineGraph;
