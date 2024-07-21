"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Key, useState } from "react";

import { ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import Input from "@/components/ui/Input";
import { useFieldArray } from "react-hook-form";
import { InputTags } from "@/components/ui/inputTags";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const PrivateOffice = ({ form }: { form: any }) => {
  const [showPrivateOffice, setShowPrivateOffice] = useState(false);

  const { append: appendOffice, remove: removeOffice } = useFieldArray({
    control: form.control,
    name: "privateOffice.privateOffices",
  });

  return (
    <div className="space-y-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          setShowPrivateOffice(!showPrivateOffice);
        }}
      >
        <FormLabel className="text-base cursor-pointer">
          Private Office
        </FormLabel>
        <button type="button" className="focus:outline-none">
          {showPrivateOffice ? (
            <ChevronUp className="w-6 h-6 text-gray-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>
      <Separator />
      {showPrivateOffice && (
        <div className="space-y-4 ml-4">
          <FormControl>
            <Input
              label="Availability Title"
              placeholder="Availability Title"
              {...form.register("privateOffice.availabilityTitle")}
            />
          </FormControl>
          <FormControl>
            <Input
              label="Private Office Availabile Title"
              placeholder="Private Office Availabile Title"
              {...form.register("privateOffice.privateOfficeAvailabileTitle")}
            />
          </FormControl>
          <div className="border-2 border-gray-100 p-2">
            {form
              .getValues("privateOffice.privateOffices")
              .map((_: any, index: any) => (
                <div key={index}>
                  <div className="flex justify-end">
                    <Trash2
                      onClick={() => removeOffice(index as number)}
                      className="w-6 h-6 cursor-pointer my-2"
                    />
                  </div>
                  <div className="space-y-4 border-gray-100 border-2 p-5">
                    <FormControl>
                      <Input
                        label="Title"
                        placeholder="Title"
                        {...form.register(
                          `privateOffice.privateOffices.${index}.title`
                        )}
                      />
                    </FormControl>
                    <FormControl>
                      <Input
                        label="Price"
                        placeholder="Price"
                        {...form.register(
                          `privateOffice.privateOffices.${index}.price`
                        )}
                      />
                    </FormControl>
                    <FormControl>
                      <Input
                        label="Desks"
                        placeholder="Desks"
                        {...form.register(
                          `privateOffice.privateOffices.${index}.desks`
                        )}
                      />
                    </FormControl>
                    <FormControl>
                      <Input
                        label="Minimium Term Title"
                        placeholder="Minimium Term Title"
                        {...form.register(
                          `privateOffice.privateOffices.${index}.minimiumTermTitle`
                        )}
                      />
                    </FormControl>
                    <FormControl>
                      <Input
                        label="Maximum Term Title"
                        placeholder="Maximum Term Title"
                        {...form.register(
                          `privateOffice.privateOffices.${index}.maximumTermTitle`
                        )}
                      />
                    </FormControl>
                    <FormControl>
                      <Input
                        label="Maximum Term Text"
                        placeholder="Maximum Term Text"
                        {...form.register(
                          `privateOffice.privateOffices.${index}.maximumTermText`
                        )}
                      />
                    </FormControl>
                    <div className="space-y-4">
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name={`privateOffice.privateOffices.${index}.included`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <InputTags label="Included" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name={`privateOffice.privateOffices.${index}.notIncluded`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <InputTags label="Not_Included" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            <div className="flex justify-center mt-3">
              <Button
                type="button"
                onClick={() =>
                  appendOffice({
                    title: "",
                    price: "",
                    desks: "",
                    minimiumTermTitle: "",
                    maximumTermTitle: "",
                    maximumTermText: "",
                    included: [],
                    notIncluded: [],
                  })
                }
                className="focus:outline-none"
              >
                Add More
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivateOffice;
