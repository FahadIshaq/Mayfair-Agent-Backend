"use client";
import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const PropertyDescription = ({ form }: { form: any }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
      <div className="space-y-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setShowDescription(!showDescription)}
        >
          <FormLabel className="text-base cursor-pointer">
            Property Description
          </FormLabel>
          <button type="button" className="focus:outline-none">
            {showDescription ? (
              <ChevronUp className="w-6 h-6 text-gray-600" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
        <Separator />
        {showDescription && (
          <div className="ml-4">
            <FormField
              control={form.control}
              name="propertyDescription"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="mt-1">
                      <ReactQuill
                        theme="snow"
                        id="propertyDescription"
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
    </>
  );
};

export default PropertyDescription;
