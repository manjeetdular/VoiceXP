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
import Tabless from "../components/Tabless";
import { Grid2 } from "@mui/material";

const page = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <div className="my-5">
        <span className="text-3xl font-medium p-5">Conversation</span>
      </div>
      <div className="bg-primary h-[500px] rounded-md shadow-lg p-5 mx-5">
        <ResponsiveContainer width={"100%"} height={400} className="">
          <div className="mb-5">
            <span className="text">Conversation Chart</span>
          </div>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#2a6fff"
              isAnimationActive={true}
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#ffbfa4" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <Grid2 container className="m-5">
        <Tabless />
      </Grid2>
    </>
  );
};
export default page;
