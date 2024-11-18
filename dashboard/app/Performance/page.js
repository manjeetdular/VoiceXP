import React from "react";
import AvgTime from "../components/AvgTime";
import Responcetime from "../components/Responcetime";
import { Grid2 } from "@mui/material";

const Performance = () => {
  return (
    <>
      <Grid2
        container
        columnSpacing={2}
        rowSpacing={2}
        className="items-center flex flex-wrap rounded-md m-8"
      >
        <Grid2
          className="h-[400px] bg-primary p-5 rounded-md hover:border-cta hover:border flex flex-col gap-2 shadow-md"
          size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
        >
          <div className="mb-5">
            <span className="text">Avg Time</span>
          </div>
          <AvgTime />
        </Grid2>
        <Grid2
          className="h-[400px] bg-primary p-5 rounded-md hover:border-cta hover:border flex flex-col gap-2 shadow-md"
          size={{ xs: 12, sm: 12, md: 6, lg: 8 }}
        >
          <Responcetime />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Performance;
