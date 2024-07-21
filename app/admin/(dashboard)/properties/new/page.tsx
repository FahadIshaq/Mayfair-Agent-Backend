import React from "react";
import AddNewProperty from "./AddNewProperty";
import { ScrollArea } from "@/components/ui/scroll-area";

const NewProperty = () => {
  return (
    <ScrollArea className="h-screen w-full">
      <div className="m-5 mb-20">
        <AddNewProperty />
      </div>
    </ScrollArea>
  );
};

export default NewProperty;
