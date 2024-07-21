"use client";
import { FormControl, FormLabel } from "@/components/ui/form";
import { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";
import Input from "@/components/ui/Input";
import { Separator } from "@/components/ui/separator";

const PropertyDetails = ({ form }: { form: any }) => {
  const [showPropertyDetails, setShowPropertyDetails] = useState(false);

  return (
    <div className="space-y-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          setShowPropertyDetails(!showPropertyDetails);
        }}
      >
        <FormLabel className="text-base cursor-pointer">
          Property Details
        </FormLabel>
        <button type="button" className="focus:outline-none">
          {showPropertyDetails ? (
            <ChevronUp className="w-6 h-6 text-gray-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>
      <Separator />
      {showPropertyDetails && (
        <div className="space-y-4 ml-4">
          <FormControl>
            <Input
              label="Size in Sqft"
              placeholder="Size in Sqft"
              {...form.register("propertyDetails.sizeInSqft")}
            />
          </FormControl>
          <FormControl>
            <Input
              label="Start Size"
              placeholder="Start Size"
              {...form.register("propertyDetails.startSize")}
            />
          </FormControl>
          <FormControl>
            <Input
              label="End Size"
              placeholder="End Size"
              {...form.register("propertyDetails.endSize")}
            />
          </FormControl>
          {form.watch("type") === "commerical" &&
            form.watch("commericalSubType") === "office" && (
              <>
                <FormControl>
                  <Input
                    label="Minimum Desks"
                    placeholder={1}
                    defaultValue={1}
                    type="number"
                    {...form.register("propertyDetails.desksMin", {
                      valueAsNumber: true,
                    })}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    label="Maximum Desks"
                    placeholder={5}
                    defaultValue={1}
                    type="number"
                    {...form.register("propertyDetails.desksMax", {
                      valueAsNumber: true,
                    })}
                  />
                </FormControl>
              </>
            )}
          <FormControl>
            <Input
              label="Property Location"
              placeholder="Property Location"
              {...form.register("propertyDetails.propertyLocation")}
            />
          </FormControl>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
