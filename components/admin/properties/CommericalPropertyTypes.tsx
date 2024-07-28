"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

const CommericalPropertyTypes = ({ form, filteredProperties }: { form: any; filteredProperties: { _id: string; name: string; amenities: any[] }[] }) => {
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
          Commercial Property SubType
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
                  {filteredProperties.map((item) => (
                    <FormItem
                      key={item._id}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={item._id} />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {item.name}
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

export default CommericalPropertyTypes;
