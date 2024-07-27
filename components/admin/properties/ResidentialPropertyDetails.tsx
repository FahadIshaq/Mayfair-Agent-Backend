"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useState } from "react";

import { ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Input from "@/components/ui/Input";
import { useFieldArray } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const ResidentialPropertyDetails = ({ form }: { form: any }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { append, remove } = useFieldArray({
    control: form.control,
    name: "residentialPropertyDetails.floorAreaInfo",
  });

  const handleAddLocation = () => {
    append({
      description: "",
      size: "",
      status: "",
    });
  };

  const handleRemoveFloorAreaInfo = (index: number) => {
    remove(index);
  };

  return (
    <div className="space-y-4 overflow-auto">
      {" "}
      {/* Ensure overflow is handled */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          setShowDetails(!showDetails);
        }}
      >
        <FormLabel className="text-base cursor-pointer">
          Residential Property Details
        </FormLabel>
        <button type="button" className="focus:outline-none">
          {showDetails ? (
            <ChevronUp className="w-6 h-6 text-gray-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>
      <Separator />
      {showDetails && (
        <div className="space-y-4 ml-4 overflow-y-auto">
          {" "}
          {/* Adjust for content overflow */}
          <div className="space-y-4">
            <FormControl>
              <Input
                label="Bedrooms"
                placeholder="Number of Bedrooms"
                {...form.register("residentialPropertyDetails.bedrooms")}
              />
            </FormControl>
          </div>
          <div className="space-y-4">
            <FormControl>
              <Input
                label="Bathrooms"
                placeholder="Number of Bathrooms"
                {...form.register("residentialPropertyDetails.bathrooms")}
              />
            </FormControl>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <FormLabel className="text-base">
                Floor Area Information
              </FormLabel>
            </div>
            <div className="border-2 border-gray-100 p-2">
              {form
                .getValues("residentialPropertyDetails.floorArea")
                .map((_: any, index: number) => (
                  <div key={index}>
                    <div className="flex justify-end">
                      <Trash2
                        onClick={() => handleRemoveFloorAreaInfo(index)}
                        className="w-6 h-6 cursor-pointer my-2"
                      />
                    </div>
                    <div className="space-y-4 border-gray-100 border-2 p-5">
                      <div className="space-y-4">
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            label="Description"
                            placeholder="site"
                            {...form.register(
                              `residentialPropertyDetails.floorArea.${index}.description`
                            )}
                          />
                        </FormControl>
                      </div>
                      <div className="space-y-4">
                        <FormControl>
                          <Input
                            label="Size"
                            placeholder="3.44 acres"
                            {...form.register(
                              `residentialPropertyDetails.floorArea.${index}.size`
                            )}
                          />
                        </FormControl>
                      </div>

                      <div className="space-y-4">
                        <FormControl>
                          <Input
                            label="Status"
                            placeholder="Available"
                            {...form.register(
                              `residentialPropertyDetails.floorArea.${index}.status`
                            )}
                          />
                        </FormControl>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="flex justify-center mt-3">
                <Button
                  type="button"
                  onClick={handleAddLocation}
                  className="focus:outline-none"
                >
                  Add More
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResidentialPropertyDetails;
