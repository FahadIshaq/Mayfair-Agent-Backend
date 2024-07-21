"use client";

import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FeaturedImageUploader from "./FeatureImageUploader";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Categories from "./Categories";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  content: z.string(),
  featuredImage: z.any(),
  date: z.date(),
  categories: z.array(z.string()),
  status: z.enum(["draft", "published"]),
  user: z.string(),
});

const AddNewBlog = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      featuredImage: null,
      date: new Date(),
      categories: [],
      status: "draft",
      user: "Qasim",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <>
      <div className="flex items-start justify-between mb-2">
        <Heading
          title={`New Blog`}
          description="Add a new blog. You can add, edit and delete blogs."
        />
      </div>
      <Separator />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input label="Title" placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="mt-1 mb-10">
                    <ReactQuill
                      modules={{
                        toolbar: [
                          [{ header: "1" }, { header: "2" }],
                          [{ size: ["small", false, "large", "huge"] }],
                          ["bold", "italic", "underline", "strike"],
                          [
                            { list: "ordered" },
                            { list: "bullet" },
                            { list: "check" },
                          ],
                          [{ indent: "-1" }, { indent: "+1" }],
                          [{ header: [1, 2, 3, 4, 5, 6, false] }],
                          ["link", "image", "video"],
                          ["clean"],
                          ["code-block"],
                          [{ color: [] }, { background: [] }],
                        ],
                      }}
                      theme="snow"
                      id="propertyDescription"
                      value={field.value}
                      onChange={field.onChange}
                      style={{ height: "400px" }}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="featuredImage"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mt-10">
                <FormLabel className="mt-5">Featured Image</FormLabel>
                <FormControl>
                  <FeaturedImageUploader
                    fileBuffer={field.value}
                    setFileBuffer={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Categories form={form} />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="draft" />
                      </FormControl>
                      <FormLabel className="font-normal">Draft</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="published" />
                      </FormControl>
                      <FormLabel className="font-normal">Published</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button
              type="button"
              onClick={() => form.handleSubmit(onSubmit)()}
              className="w-32"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default AddNewBlog;
