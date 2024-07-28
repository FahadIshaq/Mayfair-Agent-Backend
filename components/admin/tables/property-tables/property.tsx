"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { propertyTableType, User } from "@/constants/data";
import { Plus, PencilRuler as Draft } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";
import axios from "axios";
import { useEffect, useState } from "react";

interface ProductsClientProps {
  data: propertyTableType[];
}

export const Property: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState(null || data);

  const fetchProperties = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/property`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_AUTH_TOKEN}`,
          },
        }
      );

      setProperties(response.data.properties);
      setLoading(false);
    } catch (error) {
      console.error("An error occurred:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [])

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Properties (${properties?.length})`}
          description="Manage properties"
        />
        <div className="space-x-2">
          <Button
            className="text-xs md:text-sm"
            onClick={() => router.push(`/admin/properties/drafts`)}
          >
            <Draft className="mr-2 h-4 w-4" /> Drafts
          </Button>
          <Button
            className="text-xs md:text-sm"
            onClick={() => router.push(`/admin/properties/new`)}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={properties} />
    </>
  );
};