"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";
import axios from "axios";

const PropertyChoice = ({ form, setPropertyTypes }: { form: any, setPropertyTypes: (types: any[]) => void }) => {
  const [propertyTypes, setLocalPropertyTypes] = useState<{ _id: string; type: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyTypes = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/propertyType`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_AUTH_TOKEN}`,
            },
          }
        );

        setLocalPropertyTypes(response.data.properties);
        setPropertyTypes(response.data.properties);
        setLoading(false);
      } catch (error) {
        console.error("An error occurred:", error);
        setLoading(false);
      }
    };

    fetchPropertyTypes();
  }, [setPropertyTypes]);

  return (
    <div className="space-y-4">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <FormField
          control={form.control}
          name="propertyType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Property Type</FormLabel>
              <FormControl>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex flex-row gap-10"
                >
                  {propertyTypes.map((item) => (
                    <FormItem key={item._id} className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value={item._id} />
                      </FormControl>
                      <FormLabel className="font-normal">{item.type}</FormLabel>
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

export default PropertyChoice;
