"use client";
import FcbQueryForm from "@/app/dashboard/ui/fcb/queryform";
import { Typography } from "@mui/material";

export default function FCBQueryPage() {
  return (
    <div>
        <div className=" flex justify-center">  <Typography variant="h4">  Form Title </Typography> </div>
      <FcbQueryForm />
    </div>
  );
}
