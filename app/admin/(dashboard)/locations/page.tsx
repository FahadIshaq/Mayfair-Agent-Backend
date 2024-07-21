import React from "react";
import Locations from "@/components/admin/tables/locations-tables/Locations";
import { locations } from "@/constants/data";

const page = () => {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <Locations data={locations} />
      </div>
    </>
  );
};

export default page;
