"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const PropertyChoice = ({
  form,
  propertyTypes,
  loading,
}: {
  form: any;
  propertyTypes: { _id: string; type: string }[];
  loading: boolean;
}) => {
  const uniqueTypes = Array.from(new Set(propertyTypes.map((item) => item.type)));

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
                  {uniqueTypes.map((type) => (
                    <FormItem
                      key={type}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={type} />
                      </FormControl>
                      <FormLabel className="font-normal capitalize">{type}</FormLabel>
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
