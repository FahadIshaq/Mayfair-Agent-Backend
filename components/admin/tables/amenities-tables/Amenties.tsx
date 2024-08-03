"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Amenities } from "@/constants/data";
import { Plus, PencilRuler as Draft } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Modal } from "./Modal";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface AmenitiesClientProps {
  data: Amenities[];
}

export const Amenties: React.FC<AmenitiesClientProps> = ({ data }) => {
  const router = useRouter();
  const [amenitiesData, setAmenitiesData] = useState(null || data);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("admin");

  const addAmenity = async (payload: string) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/amenities`,
        { name: payload },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      toast.success("Amenity added successfully!");
      fetchAmenities();
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("Failed to add amenity.");
    }
  };

  const fetchAmenities = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/amenities`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAmenitiesData(response.data.properties);
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("Failed to fetch amenities.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAmenities();
  }, []);

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Amenities (${amenitiesData ? amenitiesData.length : 0})`}
          description="Manage Amenities for your properties."
        />
        <div className="space-x-2">
          <Modal onSubmit={addAmenity} />
        </div>
      </div>
      <Separator />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <DataTable searchKey="name" columns={columns} data={amenitiesData} />
      )}
    </>
  );
};
