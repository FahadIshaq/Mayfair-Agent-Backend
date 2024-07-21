import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import AddNewBlog from "../../../../../components/admin/blog/AddNewBlog";

const page = () => {
  return (
    <ScrollArea className="h-screen w-full">
      <div className="m-5 mb-20">
        <AddNewBlog />
      </div>
    </ScrollArea>
  );
};

export default page;
