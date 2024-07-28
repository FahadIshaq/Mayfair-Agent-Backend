"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useEffect, useState } from "react";
import axios from "axios";

import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const Amenties = ({ form, filteredProperties, propertySubType }: { form: any; filteredProperties: { _id: string; name: string; amenities: any[] }[], propertySubType: string | undefined }) => {
  const [showAmenties, setShowAmenties] = useState(false);
  const [amenities, setAmenities] = useState<{ _id: string; name: string }[]>([]);

  useEffect(() => {
    if (propertySubType) {
      const selectedProperty = filteredProperties.find(property => property._id === propertySubType);
      setAmenities(selectedProperty ? selectedProperty.amenities : []);
    }
  }, [propertySubType, filteredProperties]);

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
          {form.watch("propertyType") === "commercial"
            ? "Commercial Amenities"
            : "Residential Amenities"}
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
                {amenities.map((item) => (
                  <FormField
                    key={item._id}
                    control={form.control}
                    name="amenties"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item._id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item._id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([
                                      ...(field.value || []),
                                      item._id,
                                    ])
                                  : field.onChange(
                                      (field.value || []).filter(
                                        (value: string) => value !== item._id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.name}
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
