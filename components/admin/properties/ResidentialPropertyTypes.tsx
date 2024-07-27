"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const propertyFeatures = [
  {
    id: "alternative",
    label: "Alternative",
  },
  {
    id: "apartment",
    label: "Apartment",
  },
  {
    id: "cottage",
    label: "Cottage",
  },
  {
    id: "development",
    label: "Development",
  },
  {
    id: "duplex",
    label: "Duplex",
  },
  {
    id: "flat",
    label: "Flat",
  },
  {
    id: "hotel",
    label: "Hotel",
  },
  {
    id: "house",
    label: "House",
  },
  {
    id: "land",
    label: "Land",
  },
  {
    id: "mews",
    label: "Mews",
  },
  {
    id: "newDevelopment",
    label: "New Development",
  },
  {
    id: "penthouse",
    label: "Penthouse",
  },
  {
    id: "residentialBuilding",
    label: "Residential Building",
  },
  {
    id: "triplex",
    label: "Triplex",
  },
  {
    id: "warehouseConversion",
    label: "Warehouse Conversion",
  },
  {
    id: "other",
    label: "Other",
  },
] as const;

const ResidentialPropertyTypes = ({ form }: { form: any }) => {
  const [showPropertyTypes, setShowPropertyTypes] = useState(false);

  return (
    <div className="space-y-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          setShowPropertyTypes(!showPropertyTypes);
        }}
      >
        <FormLabel className="text-base cursor-pointer">
          Residential Property SubType
        </FormLabel>
        <button type="button" className="focus:outline-none">
          {showPropertyTypes ? (
            <ChevronUp className="w-6 h-6 text-gray-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>
      <Separator />
      {showPropertyTypes && (
        <FormField
          control={form.control}
          name="propertySubType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-5 gap-4"
                >
                  {propertyFeatures.map((item) => (
                    <FormItem
                      key={item.id}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={item.id} />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
      )}
    </div>
  );
};

export default ResidentialPropertyTypes;
