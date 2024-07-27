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

const Amenties = ({ form }: { form: any }) => {
  const [showAmenties, setShowAmenties] = useState(false);
  const [amenitiesData, setAmenitiesData] = useState<{ _id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchAmenities = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/amenities`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_AUTH_TOKEN}`,
            },
          }
        );

        setAmenitiesData(response.data.properties);
        setLoading(false);
      } catch (error) {
        console.error("An error occurred:", error);
        setLoading(false);
      }
    };

    fetchAmenities();
  }, []);

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
          {loading ? (
            <div>Loading...</div> 
          ) : (
            <FormField
              control={form.control}
              name="amenties"
              render={() => (
                <FormItem>
                  {amenitiesData.map((item) => (
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
          )}
        </div>
      )}
    </div>
  );
};

export default Amenties;
