"use client";

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { columns } from "./columns";
import { Modal } from "./Modal";
import { Property } from "@/constants/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getLocalStorageItem } from "@/lib/utils";

interface PropertyTypesProps {
  data: Property[];
}

export const PropertyTypes: React.FC<PropertyTypesProps> = ({ data }) => {
  const router = useRouter();
  const [properties, setProperties] = useState(null || data);
  const [loading, setLoading] = useState(false);
  const token = getLocalStorageItem("admin");

  const fetchPropertyTypes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/propertyType`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data.properties);
      setProperties(response.data.properties);
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("Failed to fetch property types.");
    } finally {
      setLoading(false);
    }
  };

  const addPropertyType = async (payload: { type: string }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/propertyType`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      toast.success("Property type added successfully!");
      fetchPropertyTypes();
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("Cannot add a duplicate property type.");
    }
  };

  useEffect(() => {
    fetchPropertyTypes();
  }, []);

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Property Types (${properties ? properties.length : 0})`}
          description="Manage Property Types."
        />
        <div className="space-x-2">
          <Modal onSubmit={addPropertyType} />
        </div>
      </div>
      <Separator />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <DataTable searchKey="name" columns={columns} data={properties} />
      )}
    </>
  );
};
