"use client";
import React from "react";
import Rating from "@mui/material/Rating";
import Reviews from "../components/Reviews";
import { Grid2 } from "@mui/material";
import { LineChart, Line } from "recharts";
import AvgTime from "../components/AvgTime";
import ResponceFeedback from "../components/ResponceFeedback";

const feedback = () => {
  const Cards = [
    { heading: "Conversational", percent: "91/15%" },
    { heading: "Users", numbers: "0123", percent: "+25%" },
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
      <Grid2
        container
        columnSpacing={2}
        rowSpacing={2}
        className="flex flex-wrap rounded-md m-5"
      >
        <Grid2
          size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
          className="flex  gap-4 flex-col"
        >
          <Grid2 className="min-h-36 backdrop-blur-sm flex flex-wrap justify-around bg-primary shadow-md rounded-md border p-3 cursor-pointer hover:border-cta hover:bg-cta/15">
            <div className="flex  flex-col flex-wrap justify-center ">
              <div className="flex gap-3">
                <span className="font-semibold text-3xl">Heading</span>
                <span className="text-cta text-3xl">197%</span>
              </div>
              <div className="mt-2 flex justify-around">
                <Rating name="size-large" defaultValue={3.5} size="large" />
              </div>
            </div>
          </Grid2>
          <Grid2 className="backdrop-blur-sm flex flex-wrap justify-around bg-primary shadow-md rounded-md border p-3 cursor-pointer hover:border-cta hover:bg-cta/15">
            <div className="flex  flex-col flex-wrap justify-center ">
              <div className="flex gap-3">
                <span className="font-semibold text-3xl">
                  Positive/Negative
                </span>
                <span className="text-cta text-3xl">197%</span>
              </div>
              <div className="mt-2 flex justify-around">
                <LineChart width={200} height={80} data={cardChart}>
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#3b82f6"
                    strokeWidth={1.5}
                    dot={false}
                    isAnimationActive={true}
                  />
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="red"
                    strokeWidth={1.5}
                    dot={false}
                    isAnimationActive={true}
                  />
                </LineChart>
              </div>
            </div>
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 8 }} className="bg-primary p-5 rounded-md hover:border-cta hover:border flex flex-col gap-2 shadow-md">
          <ResponceFeedback />
        </Grid2>
      </Grid2>

      <div className="m-5">
        <Reviews />
      </div>
    </>
  );
};

export default feedback;
