import React from "react";
import { Amenties } from "@/components/admin/tables/amenities-tables/Amenties";
import { propertiesSubTypes } from "@/constants/data";
import { PropertyTypes } from "@/components/admin/tables/propertyTypes-tables/PropertyTypes";

const page = () => {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <PropertyTypes data={propertiesSubTypes} />
      </div>
    </>
  );
};

export default page;
