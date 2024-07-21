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
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Input from "@/components/ui/Input";

const blogCategories = [
  {
    id: "Types-of-offices",
    label: "Types of Offices",
  },
  {
    id: "guides",
    label: "Guides",
  },
  {
    id: "hybrid-working",
    label: "Hybrid Working",
  },
  {
    id: "office-trends",
    label: "Office Trends",
  },
] as const;

const Categories = ({ form }: { form: any }) => {
  const [showCategores, setShowCategories] = useState(false);

  return (
    <div className="space-y-4">
      <div
        className="flex items-center justify-between"
        onClick={() => setShowCategories(!showCategores)}
      >
        <FormLabel className="text-base">Categories</FormLabel>
        <button type="button" className="focus:outline-none">
          {showCategores ? (
            <ChevronUp className="w-6 h-6 text-gray-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>
      <Separator />
      {showCategores && (
        <div className="ml-4">
          <FormField
            control={form.control}
            name="categories"
            render={() => (
              <FormItem>
                {blogCategories.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="amenties"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([
                                      ...(field.value || []),
                                      item.id,
                                    ])
                                  : field.onChange(
                                      (field.value || []).filter(
                                        (value: string) => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </FormItem>
            )}
          />

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" className="mt-6">
                Add New Category
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Category</DialogTitle>
                <DialogDescription>
                  Add a new category to the blog post
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Input
                    label="Name"
                    id="name"
                    value="category name"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default Categories;
