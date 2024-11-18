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

const Conversation = () => {
  const data = [
    {
      name: "17:00",
      Old: 4000,
      New: 2400,
      amt: 2400,
      ur:9600,
    },
    {
      name: "18:00",
      Old: 3000,
      New: 1398,
      amt: 2210,
      ur:9500,
    },
    {
      name: "19:00",
      Old: 2000,
      New: 9800,
      amt: 2290,
      ur:4500,
    },
    {
      name: "20:00",
      Old: 2780,
      New: 3908,
      amt: 2000,
    },
    {
      name: "21:00",
      Old: 1890,
      New: 4800,
      amt: 2181,
    },
    {
      name: "22:00",
      Old: 2390,
      New: 3800,
      amt: 2500,
    },
    {
      name: "23:00",
      Old: 3490,
      New: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <ResponsiveContainer width={"100%"} height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Old"
            stroke="#2a6fff"
            isAnimationActive={true}
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="New" stroke="#ffbfa4" />
        </LineChart>
      </ResponsiveContainer>
      
    </>
  );
};
export default Conversation;
