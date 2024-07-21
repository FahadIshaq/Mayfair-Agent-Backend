"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const propertyFeatures = [
  {
    id: "swimming-pool",
    label: "Swimming Pool",
  },
  {
    id: "gym",
    label: "Gym",
  },
  {
    id: "parking",
    label: "Parking",
  },
  {
    id: "garden",
    label: "Garden",
  },
  {
    id: "security",
    label: "Security",
  },
  {
    id: "balcony",
    label: "Balcony",
  },
  {
    id: "pet-friendly",
    label: "Pet Friendly",
  },
  {
    id: "wifi",
    label: "WiFi",
  },
] as const;

const Amenties = ({ form }: { form: any }) => {
  const [showAmenties, setShowAmenties] = useState(false);

  return (
    <div className="space-y-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          setShowAmenties(!showAmenties);
        }}
      >
        <FormLabel className="text-base cursor-pointer">
          {" "}
          {form.watch("type") === "commerical"
            ? "Commerical Aminities"
            : "Residential Aminities"}
        </FormLabel>
        <button type="button" className="focus:outline-none">
          {showAmenties ? (
            <ChevronUp className="w-6 h-6 text-gray-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>
      <Separator />
      {showAmenties && (
        <div className="ml-4">
          <FormField
            control={form.control}
            name="amenties"
            render={() => (
              <FormItem>
                {propertyFeatures.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="amenties"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([
                                      ...(field.value || []),
                                      item.id,
                                    ])
                                  : field.onChange(
                                      (field.value || []).filter(
                                        (value: string) => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </FormItem>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default Amenties;
