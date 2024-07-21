"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { User } from "@/constants/data";
import { Plus, PencilRuler as Draft } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";

interface ProductsClientProps {
  data: User[];
}

export const Property: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Properties (${data.length})`}
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
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
