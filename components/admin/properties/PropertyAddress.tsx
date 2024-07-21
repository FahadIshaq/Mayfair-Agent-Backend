"use client";

import { FormControl, FormLabel } from "@/components/ui/form";
import { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";
import Input from "@/components/ui/Input";
import { Separator } from "@/components/ui/separator";

const PropertyAddress = ({ form }: { form: any }) => {
  const [showPropertyAddress, setShowPropertyAddress] = useState(false);
  return (
    <div className="space-y-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setShowPropertyAddress(!showPropertyAddress)}
      >
        <FormLabel className="text-base cursor-pointer">
          Property Address
        </FormLabel>
        <button type="button" className="focus:outline-none">
          {showPropertyAddress ? (
            <ChevronUp className="w-6 h-6 text-gray-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>
      <Separator />
      {showPropertyAddress && (
        <div className="space-y-4 ml-4">
          <FormControl>
            <Input
              label="Building Number"
              placeholder="Building Number"
              {...form.register("propertyAddress.buildingNumber")}
            />
          </FormControl>
          <FormControl>
            <Input
              label="Street"
              placeholder="Street"
              {...form.register("propertyAddress.street")}
            />
          </FormControl>
          <FormControl>
            <Input
              label="City"
              placeholder="City"
              {...form.register("propertyAddress.city")}
            />
          </FormControl>
          <FormControl>
            <Input
              label="State"
              placeholder="State"
              {...form.register("propertyAddress.state")}
            />
          </FormControl>
          <FormControl>
            <Input
              label="Zip"
              placeholder="Zip"
              {...form.register("propertyAddress.zip")}
            />
          </FormControl>
          <FormControl>
            <Input
              label="Location"
              placeholder="Location"
              {...form.register("propertyAddress.location")}
            />
          </FormControl>
        </div>
      )}
    </div>
  );
};

export default PropertyAddress;
