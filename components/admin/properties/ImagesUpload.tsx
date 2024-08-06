"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import ImageUpload from "@/components/ui/imageUpload";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ImagesUpload = ({ form, uploadedFiles, setUploadedFiles }: { form: any, uploadedFiles: File[], setUploadedFiles: React.Dispatch<React.SetStateAction<File[]>> }) => {
  const [showUpload, setShowUpload] = useState(false);
  return (
    <div className="space-y-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          setShowUpload(!showUpload);
        }}
      >
        <FormLabel className="text-base cursor-pointer">
          Upload Images
        </FormLabel>
        <button type="button" className="focus:outline-none">
          {showUpload ? (
            <ChevronUp className="w-6 h-6 text-gray-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>
      <Separator />
      {showUpload && (
        <div className="ml-4">
          <FormField
            name="propertyImages"
            control={form.control}
            defaultValue={[]}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ImageUpload
                    fileBuffers={field.value}
                    setFileBuffers={field.onChange}
                    uploadedFiles={uploadedFiles}
                    setUploadedFiles={setUploadedFiles}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default ImagesUpload;
