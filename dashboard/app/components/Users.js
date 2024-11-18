"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Users = () => {
  const data = [
    {
      name: "Day 1",
      newUser: 4000,
      oldUser: 2400,
      amt: 2400,
    },
    {
      name: "Day 2",
      newUser: 3000,
      oldUser: 1398,
      amt: 2210,
    },
    {
      name: "Day 3",
      newUser: 2000,
      oldUser: 9800,
      amt: 2290,
    },
    {
      name: "Day 4",
      newUser: 2780,
      oldUser: 3908,
      amt: 2000,
    },
    {
      name: "Day 5",
      newUser: 1890,
      oldUser: 4800,
      amt: 2181,
    },
    {
      name: "Day 6",
      newUser: 2390,
      oldUser: 3800,
      amt: 2500,
    },
    {
      name: "Day 7",
      newUser: 3490,
      oldUser: 4300,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart
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
        <Bar
          dataKey="oldUser"
          fill="#79c3fb"
          activeBar={<Rectangle fill="#79c3fb" stroke="blue" />}
        />
        <Bar
          dataKey="newUser"
          fill="#ffbfa4"
          activeBar={<Rectangle fill="#ffbfa4" stroke="orange" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default Users;
