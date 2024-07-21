"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Input from "@/components/ui/Input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const Facts = ({ form }: { form: any }) => {
  const [showFacts, setShowFacts] = useState(false);
  return (
    <>
      <div className="space-y-4">
        <div
          onClick={() => setShowFacts(!showFacts)}
          className="flex items-center justify-between cursor-pointer"
        >
          <FormLabel className="text-base cursor-pointer">Facts</FormLabel>
          <button type="button" className="focus:outline-none">
            {showFacts ? (
              <ChevronUp className="w-6 h-6 text-gray-600" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
        <Separator />
        {showFacts && (
          <div className="space-y-4">
            <FormControl>
              <Input
                label="Fact Title"
                placeholder="Fact Title"
                {...form.register("facts.factTitle")}
              />
            </FormControl>
            <FormField
              control={form.control}
              name="facts.factDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fact Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Fact Description" {...field} />
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

export default Facts;
