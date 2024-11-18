"use client";
import React from "react";
import UserEngage from "../components/UserEngage";
import Conversation from "../components/Conversation";
import Users from "../components/Users";
import { Grid2 } from "@mui/material";
import UsersTable from "../components/UsersTable";

const Page = () => {
  return (
    <>
      <div className="my-5">
        <span className="text-3xl font-medium p-5">Users</span>
      </div>
      <Grid2
        container
        columnSpacing={2}
        rowSpacing={2}
        className="flex  items-center rounded-md mb-5 mx-5"
      >
        <Grid2
          className="h-full bg-primary p-5 rounded-md hover:border-cta hover:border flex flex-col gap-2 shadow-md"
          size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
        >
          <div className="mb-5">
            <span className="text">Users</span>
          </div>
          <Users />
        </Grid2>
        <Grid2
          className="h-full bg-primary p-5 rounded-md hover:border-cta hover:border flex flex-col gap-2 shadow-md"
          size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
        >
          <UserEngage />
          <div className="w-full text-center">
            <span className="text-center">Users Engagement</span>
          </div>
        </Grid2>
      </Grid2>
      <Grid2
        container
        columnSpacing={2}
        rowSpacing={2}
        className="flex  items-center rounded-md mb-5 mx-5"
      >
        <Grid2
          className="h-full bg-primary p-5 rounded-md hover:border-cta hover:border flex flex-col gap-2 shadow-md"
          size={{ xs: 12, sm: 8, md: 8, lg: 8 }}
        >
          <div className="mb-5">
            <span className="text">Users</span>
          </div>
          <UsersTable />
        </Grid2>
        <Grid2
          className="h-full bg-primary p-5 rounded-md hover:border-cta hover:border flex flex-col gap-2 shadow-md"
          size={{ xs: 12, sm: 4, md: 4, lg: 4 }}
        >
          <UserEngage />
        </Grid2>
      </Grid2>
      
    </>
  );
};

export default Page;
