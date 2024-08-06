"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useState } from "react";

import { ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import Input from "@/components/ui/Input";
import { useFieldArray } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Locations = ({ form }: { form: any }) => {
  const [showLocations, setShowLocations] = useState(false);
  const { append, remove } = useFieldArray({
    control: form.control,
    name: "locations.nearestTransportOption",
  });

  const handleAddLocation = () => {
    append({
      name: "",
      distance: "",
      type: "",
    });
  };

  const handleRemoveLocation = (index: number) => {
    remove(index);
  };

  return (
    <div className="space-y-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          setShowLocations(!showLocations);
        }}
      >
        <FormLabel className="text-base cursor-pointer">Locations</FormLabel>
        <button type="button" className="focus:outline-none">
          {showLocations ? (
            <ChevronUp className="w-6 h-6 text-gray-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>
      <Separator />
      {showLocations && (
        <div className="space-y-4 ml-4">
          <div className="space-y-4">
            <FormControl>
              <Input
                label="Location Latitude"
                placeholder="Location Latitude"
                {...form.register("location.latitude")}
              />
            </FormControl>
          </div>

          <div className="space-y-4">
            <FormControl>
              <Input
                label="Location Longitude"
                placeholder="Location Longitude"
                {...form.register("location.longitude")}
              />
            </FormControl>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <FormLabel className="text-base">
                Nearest Transport Option
              </FormLabel>
            </div>
            <div className="border-2 border-gray-100 p-2">
              {form
                .getValues("location.transportOptions")
                .map((_: any, index: number) => (
                  <div key={index}>
                    <div className="flex justify-end">
                      <Trash2
                        onClick={() => handleRemoveLocation(index)}
                        className="w-6 h-6 cursor-pointer my-2"
                      />
                    </div>
                    <div className="space-y-4 border-gray-100 border-2 p-5">
                      <div className="space-y-4">
                        <FormControl>
                          <Input
                            label="Location Name"
                            placeholder="Location Name"
                            {...form.register(
                              `location.transportOptions.${index}.name`
                            )}
                          />
                        </FormControl>
                      </div>
                      <div className="space-y-4">
                        <FormControl>
                          <Input
                            label="Distance"
                            placeholder="Distance"
                            {...form.register(
                              `location.transportOptions.${index}.distance`
                            )}
                          />
                        </FormControl>
                      </div>
                      <FormField
                        control={form.control}
                        name={`location.transportOptions.${index}.type`}
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>Underground or Overground</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="underground" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Underground
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="overground" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Overground
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                          </FormItem>
                        )}
                      />
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

export default Locations;
