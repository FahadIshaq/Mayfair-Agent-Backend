"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
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
import Input from "@/components/ui/Input";
import {
  ChevronDown,
  ChevronUp,
  Delete,
  DeleteIcon,
  Trash2,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InputTags } from "@/components/ui/inputTags";
import ImageUpload from "@/components/ui/imageUpload";
import PropertyAddress from "./PropertyAddress";
import PropertyDetails from "./propertyDetails";
import Amenties from "./Amenties";
import PropertyDescription from "./PropertyDescription";
import PrivateOffice from "./PrivateOffice";
import SpecialLocations from "./SpecialLocations";
import Locations from "./Locations";
import ImagesUpload from "./ImagesUpload";
import Facts from "./Facts";
import CommericalDetails from "./CommericalDetails";
import PropertyChoice from "./PropertyChoice";
import ResidentialPropertyTypes from "./ResidentialPropertyTypes";
import CommericalPropertyTypes from "./CommericalPropertyTypes";
import ResidentialPropertyDetails from "./ResidentialPropertyDetails";
import PropertyOption from "./PropertyOption";

const BufferSchema = z.custom<ArrayBuffer>((data) => {
  if (!(data instanceof ArrayBuffer)) {
    throw new Error("Invalid buffer data");
  }
  return data;
});

const formSchema = z.object({
  title: z.string().min(2).max(50),
  type: z.enum(["commerical", "residential"]),
  propertyOption: z.enum(["buy", "rent"]),
  residentialSubType: z
    .enum([
      "alternative",
      "apartment",
      "cottage",
      "development",
      "duplex",
      "flat",
      "hotel",
      "house",
      "land",
      "news",
      "newDevelopment",
      "penthouse",
      "residentialBuilding",
      "triplex",
      "warehouseConversion",
      "other",
    ])
    .optional(),
  residentialPropertyDetails: z.object({
    bedrooms: z.number().positive().int().optional(),
    bathrooms: z.number().positive().int().optional(),
    floorAreaInfo: z.array(
      z.object({
        description: z.string(),
        size: z.string(),
        status: z.string(),
      })
    ),
  }),
  commericalSubType: z
    .enum([
      "healthCare",
      "hotel",
      "office",
      "retail",
      "openStorageLand",
      "shoppingCenter",
      "other",
    ])
    .optional(),
  propertyAddress: z.object({
    buildingNumber: z.string(),
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    location: z.string(),
  }),
  propertyDetails: z.object({
    sizeInSqft: z.string(),
    startSize: z.string(),
    endSize: z.string(),
    desksStart: z.string(),
    desksEnd: z.string(),
    propertyLocation: z.string(),
  }),
  amenties: z.array(z.string()),
  propertyDescription: z.string(),
  facts: z.object({
    factTitle: z.string(),
    factDescription: z.string(),
  }),
  locations: z.object({
    locationIframe: z.string(),
    latitude: z.string(),
    longitude: z.string(),
    nearestTransportOption: z.array(
      z.object({
        locationName: z.string(),
        distance: z.string(),
        undergroundOrOverground: z.string(),
      })
    ),
  }),
  privateOffice: z.object({
    availabilityTitle: z.string(),
    privateOfficeAvailabileTitle: z.string(),
    privateOffices: z.array(
      z.object({
        title: z.string(),
        price: z.string(),
        desks: z.string(),
        minimiumTermTitle: z.string(),
        maximumTermTitle: z.string(),
        maximumTermText: z.string(),
        included: z.array(z.string()),
        notIncluded: z.array(z.string()),
      })
    ),
  }),
  specialOffers: z.object({
    title: z.string(),
    description: z.string(),
  }),
  commericalDetails: z.object({
    availableAs: z.string(),
    rent: z.object({
      lower: z.string(),
      upper: z.string(),
      type: z.string(),
    }),
    propertyTypes: z.array(z.string()),
    floorArea: z.string(),
    siteArea: z.string(),
  }),
  images: z.array(BufferSchema),
  status: z.enum(["draft", "published"]),
});

const AddNewProperty = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      type: "residential",
      propertyOption: "buy",
      residentialSubType: undefined,
      residentialPropertyDetails: {
        bedrooms: undefined,
        bathrooms: undefined,
        floorAreaInfo: [
          {
            description: "",
            size: "",
            status: "",
          },
        ],
      },
      commericalSubType: undefined,
      propertyAddress: {
        buildingNumber: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        location: "",
      },
      propertyDetails: {
        sizeInSqft: "",
        startSize: "",
        endSize: "",
        desksStart: "",
        desksEnd: "",
        propertyLocation: "",
      },
      amenties: [],
      propertyDescription: "",
      facts: {
        factTitle: "",
        factDescription: "",
      },
      locations: {
        locationIframe: "",
        latitude: "",
        longitude: "",
        nearestTransportOption: [
          {
            locationName: "",
            distance: "",
            undergroundOrOverground: "",
          },
        ],
      },
      privateOffice: {
        availabilityTitle: "",
        privateOfficeAvailabileTitle: "",
        privateOffices: [
          {
            title: "",
            price: "",
            desks: "",
            minimiumTermTitle: "",
            maximumTermTitle: "",
            maximumTermText: "",
            included: [],
            notIncluded: [],
          },
        ],
      },
      specialOffers: {
        title: "",
        description: "",
      },
      commericalDetails: {
        availableAs: "",
        rent: {
          lower: "",
          upper: "",
          type: "",
        },
        propertyTypes: [],
        floorArea: "",
        siteArea: "",
      },
      images: [],
      status: "draft",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <div className="flex items-start justify-between mb-2">
        <Heading
          title={`New Property`}
          description="Add new property to the system."
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

          <PropertyChoice form={form} />
          <PropertyOption form={form} />
          {form.watch("type") === "residential" && (
            <>
              <ResidentialPropertyTypes form={form} />
              <ResidentialPropertyDetails form={form} />
            </>
          )}

          {form.watch("type") === "commerical" && (
            <CommericalPropertyTypes form={form} />
          )}

          {form.watch("type") === "commerical" &&
            form.watch("commericalSubType") === "office" && (
              <PrivateOffice form={form} />
            )}

          <PropertyAddress form={form} />
          <PropertyDetails form={form} />
          <Amenties form={form} />
          <PropertyDescription form={form} />
          <Facts form={form} />
          <Locations form={form} />
          <SpecialLocations form={form} />

          <ImagesUpload form={form} />

          <CommericalDetails form={form} />

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

export default AddNewProperty;
