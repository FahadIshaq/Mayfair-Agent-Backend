import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Input from "@/components/ui/Input";
import { InputTags } from "@/components/ui/inputTags";

const CommericalDetails = ({ form }: { form: any }) => {
  const [showCommericalDetails, setShowCommericalDetails] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowCommericalDetails(!showCommericalDetails)}
        className="flex items-center justify-between cursor-pointer"
      >
        <FormLabel className="text-base cursor-pointer">
          Commerical Details
        </FormLabel>
        <button
          type="button"
          onClick={() => setShowCommericalDetails(!showCommericalDetails)}
          className="focus:outline-none"
        >
          {showCommericalDetails ? (
            <ChevronUp className="w-6 h-6 text-gray-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>
      <Separator />
      {showCommericalDetails && (
        <div className="ml-4 space-y-4">
          <FormField
            control={form.control}
            name="commericalDetails.availableAs"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Available As</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-row space-y-1 gap-10"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="sale" />
                      </FormControl>
                      <FormLabel className="font-normal">For Sale</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="rent" />
                      </FormControl>
                      <FormLabel className="font-normal">To Rent</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="commericalDetails.rent.lower"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    label="Rent Lower"
                    placeholder="Rent Lower"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="commericalDetails.rent.upper"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    label="Rent Upper"
                    placeholder="Rent Upper"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="commericalDetails.rent.type"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input label="Rent Type" placeholder="Rent Type" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="commericalDetails.propertyTypes"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputTags
                    label="Property Types"
                    placeholder="Property Types"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="commericalDetails.floorArea"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    label="Floor Area"
                    placeholder="Floor Area"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="commericalDetails.siteArea"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input label="Site Area" placeholder="Site Area" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}
    </>
  );
};

export default CommericalDetails;
