import React from "react";
import { amenities } from "@/constants/data";
import { Amenties } from "@/components/admin/tables/amenities-tables/Amenties";

const page = () => {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <Amenties data={amenities} />
      </div>
    </>
  );
};

export default page;
