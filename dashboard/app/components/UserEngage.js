"use client";
import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

function UserEngage() {
  const data = [
    { name: "Active", value: 400, color: "#ffbfa4" },
    { name: "Inactive", value: 150, color: "#79c3fb" },
  ];

 

  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <PieChart width={"100%"} height={"100%"}>
        <Pie
          dataKey="value"
          startAngle={360}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          fill={data.color}
          outerRadius={120}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default UserEngage;
