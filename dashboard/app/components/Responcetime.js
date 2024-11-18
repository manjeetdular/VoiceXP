"use client";

import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Responcetime = () => {
  const data = [
    {
      name: "Page A",
      pv: 240,
      amt: 240,
    },
    {
      name: "Page B",
      pv: 139,
      amt: 221,
    },
    {
      name: "Page C",
      pv: 980,
      amt: 229,
    },
    {
      name: "Page D",
      pv: 390,
      amt: 200,
    },
    {
      name: "Page E",
      pv: 480,
      amt: 218,
    },
    {
      name: "Page F",
      pv: 380,
      amt: 250,
    },
    {
      name: "Page G",
      pv: 430,
      amt: 210,
    },
  ];

  return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#2a71ff"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
  );
};

export default Responcetime;
