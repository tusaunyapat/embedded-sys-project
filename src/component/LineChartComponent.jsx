// LineChart.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineChartComponent = ({ data }) => {
  return (
    <LineChart
      width={450}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="dust"
        stroke="#FF0000"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="humidity"
        stroke="#00FF00"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="temp"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default LineChartComponent;
