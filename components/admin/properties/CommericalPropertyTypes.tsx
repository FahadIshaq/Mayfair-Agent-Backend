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

const propertyFeatures = [
  {
    id: "healthCare",
    label: "Health Care",
  },
  {
    id: "hotel",
    label: "Hotel",
  },
  {
    id: "office",
    label: "Office",
  },
  {
    id: "retail",
    label: "Retail",
  },
  {
    id: "openStorageLand",
    label: "Open Storage Land",
  },
  {
    id: "shoppingCenter",
    label: "Shopping Center",
  },
  {
    id: "other",
    label: "Other",
  },
] as const;

const CommericalPropertyTypes = ({ form }: { form: any }) => {
  const [showPropertyTypes, setShowPropertyTypes] = useState(false);

  return (
    <div className="space-y-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setShowPropertyTypes(!showPropertyTypes)}
      >
        <FormLabel className="text-base cursor-pointer">
          Commerical Property SubType
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
          name="commericalSubType"
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

export default CommericalPropertyTypes;
