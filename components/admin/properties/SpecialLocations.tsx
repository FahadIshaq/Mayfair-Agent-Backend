"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";
import Input from "@/components/ui/Input";
import "react-quill/dist/quill.snow.css";
import { Separator } from "@/components/ui/separator";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const SpecialLocations = ({ form }: { form: any }) => {
  const [showSpecialOffers, setShowSpecialOffers] = useState(false);
  return (
    <div className="space-y-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          setShowSpecialOffers(!showSpecialOffers);
        }}
      >
        <FormLabel className="text-base cursor-pointer">
          Special Offers
        </FormLabel>
        <button type="button" className="focus:outline-none">
          {showSpecialOffers ? (
            <ChevronUp className="w-6 h-6 text-gray-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>
      <Separator />
      {showSpecialOffers && (
        <div className="space-y-4 ml-4">
          <FormControl>
            <Input
              label="Title"
              placeholder="Title"
              {...form.register("specialOffers.title")}
            />
          </FormControl>
          <FormField
            control={form.control}
            name="specialOffers.description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">
                  Special Offers Description
                </FormLabel>
                <FormControl>
                  <div className="mt-1">
                    <ReactQuill
                      theme="snow"
                      id="specialOffersDescription"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default SpecialLocations;
