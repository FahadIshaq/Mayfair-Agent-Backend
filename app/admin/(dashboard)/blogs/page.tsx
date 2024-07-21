import React from "react";
import Blogs from "@/components/admin/tables/blogs-tables/Blogs";
import { blogs } from "@/constants/data";

const page = () => {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <Blogs data={blogs} />
      </div>
    </>
  );
};

export default page;
