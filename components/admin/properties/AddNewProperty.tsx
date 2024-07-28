"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Input from "@/components/ui/Input";
import PropertyAddress from "./PropertyAddress";
import PropertyDetails from "./PropertyDetails";
import Amenties from "./Amenties";
import PropertyDescription from "./PropertyDescription";
import PrivateOffice from "./PrivateOffice";
import SpecialLocations from "./SpecialLocations";
import Locations from "./Locations";
import ImagesUpload from "./ImagesUpload";
import Facts from "./Facts";
import PropertyChoice from "./PropertyChoice";
import ResidentialPropertyTypes from "./ResidentialPropertyTypes";
import CommericalPropertyTypes from "./CommericalPropertyTypes";
import ResidentialPropertyDetails from "./ResidentialPropertyDetails";
import PropertyOption from "./PropertyOption";

import axios from "axios";
import { toast } from "react-toastify";

const BufferSchema = z.custom<ArrayBuffer>((data) => {
  if (!(data instanceof ArrayBuffer)) {
    throw new Error("Invalid buffer data");
  }
  return data;
});

const formSchema = z.object({
  title: z.string().min(2).max(50),
  propertyType: z.string(),
  propertyOption: z.enum(["buy", "rent"]),
  propertySubType: z.string().optional(),
  residentialPropertyDetails: z.object({
    bedrooms: z.string(),
    bathrooms: z.string(),
    floorArea: z.array(
      z.object({
        description: z.string(),
        size: z.string(),
        status: z.string(),
      })
    ),
  }),
  commericalSubType: z.string().optional(),
  propertyAddress: z.object({
    buildingNumber: z.string(),
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    location: z.string(),
  }),
  propertyDetails: z.object({
    squareft: z.string(),
    startSize: z.string(),
    endSize: z.string(),
    desksMin: z.number().positive().int().optional(),
    desksMax: z.number().positive().int().optional(),
    propertyLocation: z.string(),
  }),
  propertyRent: z.string().optional(),
  amenties: z.array(z.string()),
  propertyDescription: z.string(),
  facts: z.object({
    title: z.string(),
    description: z.string(),
  }),
  location: z.object({
    locationIframe: z.string(),
    latitude: z.string(),
    longitude: z.string(),
    transportOptions: z.array(
      z.object({
        name: z.string(),
        distance: z.string(),
        type: z.string(),
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
  propertyImages: z.array(BufferSchema),
  propertyStatus: z.enum(["draft", "published"]),
});

const AddNewProperty = () => {
  const [propertyTypes, setPropertyTypes] = useState<{ _id: string; type: string; name: string; amenities: any[] }[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<{ _id: string; name: string; amenities: any[] }[]>([]);

  const [loading, setLoading] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      propertyType: "",
      propertyOption: "buy",
      propertySubType: undefined,
      residentialPropertyDetails: {
        bedrooms: "",
        bathrooms: "",
        floorArea: [
          {
            description: "",
            size: "",
            status: "",
          },
        ],
      },
      propertyDetails: {
        squareft: "",
        startSize: "",
        endSize: "",
        desksMin: undefined,
        desksMax: undefined,
        propertyLocation: "",
      },
      propertyRent: undefined,
      amenties: [],
      propertyDescription: "",
      facts: {
        title: "",
        description: "",
      },
      location: {
        locationIframe: "",
        latitude: "",
        longitude: "",
        transportOptions: [
          {
            name: "",
            distance: "",
            type: "",
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
      propertyImages: [],
      propertyStatus: "draft",
    },
  });

  useEffect(() => {
    const fetchPropertyTypes = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/propertyType`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_AUTH_TOKEN}`,
            },
          }
        );

        setPropertyTypes(response.data.properties);
        setLoading(false);
      } catch (error) {
        console.error("An error occurred:", error);
        setLoading(false);
      }
    };

    fetchPropertyTypes();
  }, []);

  useEffect(() => {
    const selectedType = form.watch("propertyType");
    if (selectedType) {
      const filtered = propertyTypes
        .filter((property) => property.type === selectedType)
        .map(({ _id, name, amenities }) => ({ _id, name, amenities }));
      setFilteredProperties(filtered);
    }
  }, [form.watch("propertyType"), propertyTypes]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();

    // Loop over the values and append them to the FormData object
    Object.keys(values).forEach(key => {
      const value = values[key as keyof typeof values];

      if (key === 'propertyImages') {
        (value as ArrayBuffer[]).forEach((image, index) => {
          formData.append(`propertyImages[${index}]`, new Blob([image]), `image${index}.jpg`);
        });
      } else if (typeof value === 'object' && value !== null) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value as string | Blob);
      }
    });

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/property`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_AUTH_TOKEN}`,
          },
        }
      );

      toast.success("Property added successfully!");

      form.reset(); // Reset form to default values
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("Failed to add property.");
    }
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

          <PropertyChoice
            form={form}
            propertyTypes={propertyTypes}
            loading={loading}
          />
          <PropertyOption form={form} />

          {form.watch("propertyType") &&
            form.watch("propertyType") === "residential" && (
              <>
                <ResidentialPropertyTypes form={form} filteredProperties={filteredProperties} />
                <ResidentialPropertyDetails form={form} />
              </>
            )}

          {form.watch("propertyType") &&
            form.watch("propertyType") === "commercial" && (
              <>
                <CommericalPropertyTypes form={form} filteredProperties={filteredProperties} />
                {form.watch("commericalSubType") === "office" && <PrivateOffice form={form} />}
              </>
            )}

          <PropertyAddress form={form} />
          <PropertyDetails form={form} />

          <FormField
            control={form.control}
            name="propertyRent"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="number" label="Property Rent" placeholder="Property Rent" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Amenties form={form} filteredProperties={filteredProperties} propertySubType={form.watch("propertySubType")} />
          <PropertyDescription form={form} />
          <Facts form={form} />
          <Locations form={form} />
          <SpecialLocations form={form} />

          <ImagesUpload form={form} />

          <div className="flex justify-end">
            <Button type="submit" className="w-32">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default AddNewProperty;
