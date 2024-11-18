"use client";
import React from "react";
import { LineChart, Line } from "recharts";
import Conversation from "./components/Conversation";
import Users from "./components/Users";
import UserEngage from "./components/UserEngage";
import { Grid2 } from "@mui/material";
import Table from "./components/Tabless";

const page = () => {
  const Cards = [
    { heading: "Conversational", percent: "91/15%" },
    { heading: "Users", numbers: "0123", percent: "+25%" },
    { heading: "Response Accuracy", numbers: "0123", percent: "+35%" },
    { heading: "Response Time", numbers: "0123", percent: "+45%" },
  ];

  const cardChart = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
  ];

  return (
    <>
      <div className="">
        <div className="p-5 rounded-md">
          <h1 className="text-lg font-medium">Hey, Someone!</h1>
          <span className="text-sm text-[#adb5bd]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
            eaque.
          </span>
          <Grid2
            container
            columnSpacing={2}
            rowSpacing={2}
            className="flex flex-wrap my-5 items-center"
          >
            {Cards.map((cards, index) => (
              <Grid2
                key={index}
                size={{ xs: 6, sm: 6, md: 6, lg: 3 }}
                className="min-h-36 backdrop-blur-sm flex flex-wrap bg-primary shadow-md rounded-md border p-3 cursor-pointer hover:border-cta hover:bg-cta/15"
              >
                <div className="min-w-full flex flex-wrap justify-around items-center">
                  <div className="flex flex-col gap-3">
                    <span className="font-semibold">{cards.heading}</span>
                    <span className="text-cta text-6xl">{cards.percent}</span>
                  </div>
                  <div className="mt-2">
                    <LineChart width={100} height={100} data={cardChart}>
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#3b82f6"
                        strokeWidth={1.5}
                        dot={false}
                        isAnimationActive={true}
                      />
                    </LineChart>
                  </div>
                </div>
              </Grid2>
            ))}
          </Grid2>
          <Grid2
            container
            columnSpacing={2}
            rowSpacing={2}
            className="flex w-full max-h-max items-center rounded-md my-8"
          >
            <Grid2
              className="h-full bg-primary p-5 rounded-md hover:border-cta hover:border flex flex-col gap-2 shadow-md"
              size={{ xs: 6, sm: 4, md: 3, lg: 4.5 }}
            >
              <Conversation />
              <div className="w-full text-center">
                <span className="text-center">Conversation Chart</span>
              </div>
            </Grid2>
            <Grid2
              className="h-full bg-primary p-5 rounded-md hover:border-cta hover:border flex flex-col gap-2 shadow-md"
              size={{ xs: 6, sm: 4, md: 3, lg: 4.5 }}
            >
              <Users />
              <div className="w-full text-center">
                <span className="text-center">Users</span>
              </div>
            </Grid2>
            <Grid2
              className="h-full bg-primary p-5 rounded-md hover:border-cta hover:border flex flex-col gap-2 shadow-md"
              size={{ xs: 6, sm: 4, md: 3, lg: 3 }}
            >
              <UserEngage />
              <div className="w-full text-center">
                <span className="text-center">Users Engagement</span>
              </div>
            </Grid2>
          </Grid2>
            <Table/>
        </div>
      </div>
    </>
  );
};

export default page;
