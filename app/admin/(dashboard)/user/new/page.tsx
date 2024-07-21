import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import AddNewUser from "./AddNewUser";

const NewProperty = () => {
  return (
    <ScrollArea className="h-screen w-full">
      <div className="m-5 mb-20">
        <AddNewUser />
      </div>
    </ScrollArea>
  );
};

export default NewProperty;
